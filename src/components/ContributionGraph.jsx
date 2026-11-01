import { useEffect, useRef } from 'react';
import * as THREE from 'three';
import { COLS, LEVEL_COLORS, levelOf, buildCalendar, applyGitHubContributions } from '../data/contributions';
import { addTicker, prefersReducedMotion } from '../lib/scroll';

const S = 1.7; // cell spacing
const FROM = 'education'; // graph is visible from the top of this section...
const TO = 'interests'; // ...to the bottom of this one

const fmtDate = (d) => d.toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' });

// Fixed, transparent three.js canvas that sits above section backgrounds and
// below section content. A per-frame clip-path limits it to Education → Interests.
export default function ContributionGraph() {
  const canvasRef = useRef(null);
  const tipRef = useRef(null);

  useEffect(() => {
    const cv = canvasRef.current;
    const tip = tipRef.current;
    const from = document.getElementById(FROM);
    const to = document.getElementById(TO);
    if (!from || !to) return;

    let renderer;
    try {
      renderer = new THREE.WebGLRenderer({ canvas: cv, alpha: true, antialias: true });
    } catch {
      return; // no WebGL: the page works without the graph
    }
    const reduce = prefersReducedMotion();
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));

    const scene = new THREE.Scene();
    const cam = new THREE.PerspectiveCamera(60, 1, 0.1, 200);

    // Light intensities are scaled by PI to match three's pre-r155 (legacy) lighting look.
    scene.add(new THREE.AmbientLight(0xffffff, 0.75 * Math.PI));
    const sun = new THREE.DirectionalLight(0xffffff, 0.9 * Math.PI);
    sun.position.set(-6, 12, 8);
    scene.add(sun);

    const cells = buildCalendar();
    const colors = LEVEL_COLORS.map((c) => new THREE.Color(c));
    const geo = new THREE.BoxGeometry(S * 0.84, 1, S * 0.84);
    const mat = new THREE.MeshLambertMaterial({ transparent: true, opacity: 0.6 });
    const mesh = new THREE.InstancedMesh(geo, mat, cells.length);
    const dummy = new THREE.Object3D();
    scene.add(mesh);

    // k = 1 normal, 1.6 hovered (taller and slightly wider)
    const place = (i, k) => {
      const q = cells[i];
      const h = q.future ? 0.001 : 0.3 + levelOf(q.count) * 0.6;
      const wide = k > 1 ? 1.08 : 1;
      dummy.position.set(q.c * S, (h * k) / 2, q.w * S);
      dummy.scale.set(wide, h * k, wide);
      dummy.updateMatrix();
      mesh.setMatrixAt(i, dummy.matrix);
    };
    const paint = () => {
      cells.forEach((q, i) => {
        place(i, 1);
        mesh.setColorAt(i, colors[levelOf(q.count)]);
      });
      mesh.instanceMatrix.needsUpdate = true;
      mesh.instanceColor.needsUpdate = true;
      mesh.computeBoundingSphere();
    };
    paint();

    let alive = true;
    applyGitHubContributions(cells).then((changed) => alive && changed && paint());

    const resize = () => {
      renderer.setSize(window.innerWidth, window.innerHeight, false);
      cam.aspect = window.innerWidth / window.innerHeight;
      cam.updateProjectionMatrix();
    };
    resize();
    window.addEventListener('resize', resize);

    // pointer state (window-level, so hover works over section content too);
    // touch screens have no hover, so taps never leave a tooltip behind
    const canHover = window.matchMedia('(hover: hover)').matches;
    let seen = false, px = 0, py = 0, mx = 0, my = 0;
    const onMove = (e) => {
      seen = canHover;
      px = e.clientX;
      py = e.clientY;
      mx = px / window.innerWidth - 0.5;
      my = py / window.innerHeight - 0.5;
    };
    window.addEventListener('mousemove', onMove);

    const ray = new THREE.Raycaster();
    const ndc = new THREE.Vector2();
    let hovered = -1;
    let cx = null;

    const setHover = (id) => {
      if (id === hovered) return;
      if (hovered >= 0) place(hovered, 1);
      hovered = id;
      if (id >= 0) place(id, 1.6);
      mesh.instanceMatrix.needsUpdate = true;
    };
    const hideTip = () => {
      tip.style.display = 'none';
    };

    const frame = () => {
      if (document.hidden) return;
      const H = window.innerHeight;
      const top = from.getBoundingClientRect().top;
      const bottom = to.getBoundingClientRect().bottom;

      if (top >= H || bottom <= 0) {
        cv.style.clipPath = 'inset(100%)';
        setHover(-1);
        hideTip();
        return; // off-screen: skip rendering entirely
      }
      cv.style.clipPath = `inset(${Math.max(0, top)}px 0 ${Math.max(0, H - bottom)}px 0)`;

      // camera pans across the year as you scroll through the region
      const p = Math.min(1, Math.max(0, -top / Math.max(1, bottom - top - H)));
      const target = (8 + p * (COLS - 26)) * S;
      cx = cx === null || reduce ? target : cx + (target - cx) * 0.06;
      const ox = reduce ? 0 : mx * 3;
      const oy = reduce ? 0 : my * 1.5;
      cam.position.set(cx + ox, 12 - oy, window.innerWidth < 800 ? 26 : 17);
      cam.lookAt(cx, 0, 5);

      const inside = seen && py >= Math.max(0, top) && py <= Math.min(H, bottom);
      if (!inside) {
        setHover(-1);
        hideTip();
      } else {
        ndc.set(mx * 2, -my * 2);
        ray.setFromCamera(ndc, cam);
        const hit = ray.intersectObject(mesh)[0];
        const id = hit && !cells[hit.instanceId].future ? hit.instanceId : -1;
        setHover(id);
        if (id >= 0) {
          const q = cells[id];
          const label = q.count ? `${q.count} contribution${q.count > 1 ? 's' : ''}` : 'No contributions';
          tip.innerHTML = `<b>${label}</b> on ${fmtDate(q.date)}`;
          tip.style.display = 'block';
          const x = Math.min(px + 14, window.innerWidth - tip.offsetWidth - 8);
          tip.style.transform = `translate(${x}px, ${py + 14}px)`;
        } else hideTip();
      }

      renderer.render(scene, cam);
    };
    const stop = addTicker(frame);

    return () => {
      alive = false;
      stop();
      window.removeEventListener('resize', resize);
      window.removeEventListener('mousemove', onMove);
      geo.dispose();
      mat.dispose();
      mesh.dispose();
      renderer.dispose();
    };
  }, []);

  return (
    <>
      <canvas id="bg" ref={canvasRef} aria-hidden="true" />
      <div id="tip" ref={tipRef} role="tooltip" />
    </>
  );
}

