// Data for the 3D GitHub contribution graph (Education → Interests background).
//
// By default the graph uses deterministic placeholder data. To show your real
// contributions, set USE_GITHUB_DATA to true. The counts are then fetched from
// a public GitHub contributions API for GITHUB_USER (see fetchGitHubContributions).

export const GITHUB_USER = 'Moukthika6706';
export const USE_GITHUB_DATA = false;

export const COLS = 53; // weeks
export const ROWS = 7; // days

// Level 0 = none, 1 = 1-3, 2 = 4-6, 3 = 7-9, 4 = 10+
export const LEVEL_COLORS = ['#8a2030', '#a3283a', '#c4505e', '#e07a86', '#ff9fa9'];
export const levelOf = (n) => (n === 0 ? 0 : n <= 3 ? 1 : n <= 6 ? 2 : n <= 9 ? 3 : 4);

const isoDate = (d) =>
  `${d.getFullYear()}-${String(d.getMonth() + 1).padStart(2, '0')}-${String(d.getDate()).padStart(2, '0')}`;

// Calendar cells: the last column's first row is today; later cells are "future".
// Placeholder counts are seeded, clustered by week, lighter on weekends, ~20% zero days.
export function buildCalendar(today = new Date()) {
  const day0 = new Date(today.getFullYear(), today.getMonth(), today.getDate());
  let seed = 7;
  const rnd = () => (seed = (seed * 16807) % 2147483647) / 2147483647;
  const cells = [];
  for (let c = 0; c < COLS; c++) {
    const week = 0.25 + 0.75 * Math.abs(Math.sin(c * 0.37) * Math.cos(c * 0.11));
    for (let w = 0; w < ROWS; w++) {
      const date = new Date(day0.getFullYear(), day0.getMonth(), day0.getDate() - (COLS - 1 - c) * 7 + w);
      const weekend = date.getDay() === 0 || date.getDay() === 6;
      let count = Math.round(rnd() * rnd() * 16 * week * (weekend ? 0.5 : 1.2));
      if (rnd() < 0.2) count = 0;
      const future = date > day0;
      cells.push({ c, w, date, future, count: future ? 0 : count });
    }
  }
  return cells;
}

// Returns Map<'YYYY-MM-DD', count> for the last year of contributions.
export async function fetchGitHubContributions(user = GITHUB_USER) {
  const res = await fetch(`https://github-contributions-api.jogruber.de/v4/${user}?y=last`);
  if (!res.ok) throw new Error(`GitHub contributions request failed: ${res.status}`);
  const json = await res.json();
  return new Map(json.contributions.map((d) => [d.date, d.count]));
}

// Overwrites placeholder counts with real data. Resolves true if cells changed.
export async function applyGitHubContributions(cells) {
  if (!USE_GITHUB_DATA) return false;
  try {
    const counts = await fetchGitHubContributions();
    cells.forEach((cell) => {
      if (!cell.future) cell.count = counts.get(isoDate(cell.date)) ?? 0;
    });
    return true;
  } catch (err) {
    console.warn('Falling back to placeholder contribution data:', err);
    return false;
  }
}
