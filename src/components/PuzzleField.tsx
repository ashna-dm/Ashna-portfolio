/**
 * Minimalist jigsaw backdrop that assembles like a real puzzle: pieces slide
 * in one at a time (snake order) and snap onto the piece already placed next
 * to them, until the whole grid is connected. Pure CSS animation.
 */
const COLS = 10;
const ROWS = 6;
const S = 100; // piece size in viewBox units
const BH = 22; // tab bump height
const STEP = 0.045; // seconds between pieces (connecting cascade)

// deterministic +/-1 per shared edge, so adjacent pieces interlock
const sgn = (a: number, b: number, salt: number) =>
  ((a * 73856093) ^ (b * 19349663) ^ salt) & 1 ? 1 : -1;

function hEdge(x0: number, y: number, x1: number, sign: number) {
  if (!sign) return `L ${x1} ${y}`;
  const ax = x0 + (x1 - x0) * 0.4;
  const bx = x0 + (x1 - x0) * 0.6;
  const c1 = x0 + (x1 - x0) * 0.3;
  const c2 = x0 + (x1 - x0) * 0.7;
  const k = y + sign * BH;
  return `L ${ax} ${y} C ${c1} ${k} ${c2} ${k} ${bx} ${y} L ${x1} ${y}`;
}
function vEdge(x: number, y0: number, y1: number, sign: number) {
  if (!sign) return `L ${x} ${y1}`;
  const ay = y0 + (y1 - y0) * 0.4;
  const by = y0 + (y1 - y0) * 0.6;
  const c1 = y0 + (y1 - y0) * 0.3;
  const c2 = y0 + (y1 - y0) * 0.7;
  const k = x + sign * BH;
  return `L ${x} ${ay} C ${k} ${c1} ${k} ${c2} ${x} ${by} L ${x} ${y1}`;
}

function pieceD(c: number, r: number) {
  const x = c * S;
  const y = r * S;
  const top = r === 0 ? 0 : sgn(c, r - 1, 1);
  const right = c === COLS - 1 ? 0 : sgn(c, r, 2);
  const bottom = r === ROWS - 1 ? 0 : sgn(c, r, 1);
  const left = c === 0 ? 0 : sgn(c - 1, r, 2);
  return (
    `M ${x} ${y} ` +
    hEdge(x, y, x + S, top) +
    " " +
    vEdge(x + S, y, y + S, right) +
    " " +
    hEdge(x + S, y + S, x, bottom) +
    " " +
    vEdge(x, y + S, y, left) +
    " Z"
  );
}

export default function PuzzleField() {
  // snake order so every next piece is adjacent to the previous one
  const order: { c: number; r: number }[] = [];
  for (let r = 0; r < ROWS; r++) {
    const cols = r % 2 === 0 ? [...Array(COLS).keys()] : [...Array(COLS).keys()].reverse();
    for (const c of cols) order.push({ c, r });
  }

  const OFF = 70; // slide-in distance toward the placed neighbour
  const pieces = order.map(({ c, r }, i) => {
    const prev = order[i - 1];
    // enter from the side away from the already-placed neighbour, then snap in
    let dx = 0;
    let dy = -OFF; // first piece drops from above
    if (prev) {
      dx = Math.sign(c - prev.c) * OFF;
      dy = Math.sign(r - prev.r) * OFF;
    }
    return { d: pieceD(c, r), dx, dy, delay: i * STEP };
  });

  return (
    <svg
      className="puzzle-assemble"
      viewBox={`0 0 ${COLS * S} ${ROWS * S}`}
      preserveAspectRatio="xMidYMid slice"
      aria-hidden="true"
    >
      {pieces.map((p, i) => (
        <path
          key={i}
          className="pc"
          d={p.d}
          style={
            {
              animationDelay: `${p.delay}s`,
              "--dx": `${p.dx}px`,
              "--dy": `${p.dy}px`,
            } as React.CSSProperties
          }
        />
      ))}
    </svg>
  );
}
