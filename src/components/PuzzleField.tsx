/**
 * Minimalist jigsaw backdrop: a near-complete puzzle missing a few pieces.
 * The ~5 missing pieces fly in one by one from different sides (top, right,
 * bottom, left) and settle into their slots, then blend with the rest.
 * Pure CSS animation.
 */
const COLS = 8;
const ROWS = 5;
const S = 100; // piece size in viewBox units
const BH = 22; // tab bump height

type Dir = "top" | "right" | "bottom" | "left";
const OFFSET: Record<Dir, [number, number]> = {
  top: [0, -230],
  right: [230, 0],
  bottom: [0, 230],
  left: [-230, 0],
};

// the handful of pieces that start missing, each flying in from a side
const DROPS: { c: number; r: number; dir: Dir }[] = [
  { c: 3, r: 0, dir: "top" },
  { c: 6, r: 2, dir: "right" },
  { c: 1, r: 1, dir: "left" },
  { c: 5, r: 4, dir: "bottom" },
  { c: 2, r: 3, dir: "left" },
];

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
  const dropAt = (c: number, r: number) => DROPS.findIndex((d) => d.c === c && d.r === r);

  const pieces: { d: string; drop: number }[] = [];
  for (let r = 0; r < ROWS; r++) {
    for (let c = 0; c < COLS; c++) {
      pieces.push({ d: pieceD(c, r), drop: dropAt(c, r) });
    }
  }

  return (
    <svg
      className="puzzle-assemble"
      viewBox={`0 0 ${COLS * S} ${ROWS * S}`}
      preserveAspectRatio="xMidYMid slice"
      aria-hidden="true"
    >
      {pieces.map((p, i) => {
        if (p.drop < 0) return <path key={i} className="pc" d={p.d} />;
        const [dx, dy] = OFFSET[DROPS[p.drop].dir];
        return (
          <path
            key={i}
            className="pc drop"
            d={p.d}
            style={
              {
                animationDelay: `${0.5 + p.drop * 0.6}s`,
                "--dx": `${dx}px`,
                "--dy": `${dy}px`,
              } as React.CSSProperties
            }
          />
        );
      })}
    </svg>
  );
}
