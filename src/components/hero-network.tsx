const primaryNodes = [
  { id: "business", label: "Business", x: 70, y: 120 },
  { id: "systems", label: "Systems", x: 60, y: 680 },
  { id: "product", label: "Product", x: 1130, y: 120 },
  { id: "ai", label: "AI", x: 1140, y: 680 },
];

const minorNodes = [
  { x: 180, y: 300, r: 5 },
  { x: 1020, y: 300, r: 4 },
  { x: 150, y: 500, r: 5 },
  { x: 1050, y: 500, r: 4 },
  { x: 600, y: 90, r: 4 },
  { x: 600, y: 720, r: 5 },
];

// Edges trace the outer perimeter (top, sides) so the connecting lines stay
// in the margins and never cross the centered headline/content column.
const edges: [number, number][] = [
  [0, 2], // business (top-left) -> product (top-right)
  [0, 1], // business (top-left) -> systems (bottom-left)
  [2, 3], // product (top-right) -> ai (bottom-right)
];

const CENTER_X = 600;
const CENTER_Y = 400;

export function HeroNetwork() {
  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden" aria-hidden>
      <div className="absolute left-1/2 top-1/3 h-[38rem] w-[38rem] -translate-x-1/2 -translate-y-1/2 animate-pulse-glow rounded-full bg-electric/25" />
      <div
        className="absolute right-0 top-2/3 h-[30rem] w-[30rem] translate-x-1/3 animate-pulse-glow rounded-full bg-purple/20"
        style={{ animationDelay: "1.2s" }}
      />
      <div
        className="absolute left-0 top-0 h-[26rem] w-[26rem] -translate-x-1/3 animate-pulse-glow rounded-full bg-cyan/20"
        style={{ animationDelay: "2.1s" }}
      />

      <svg
        viewBox="0 0 1200 800"
        preserveAspectRatio="xMidYMid slice"
        className="h-full w-full opacity-[0.55] dark:opacity-70"
      >
        <defs>
          <linearGradient id="edge-gradient" x1="0" y1="0" x2="1" y2="0">
            <stop offset="0%" stopColor="var(--color-electric)" />
            <stop offset="50%" stopColor="var(--color-cyan)" />
            <stop offset="100%" stopColor="var(--color-purple)" />
          </linearGradient>
        </defs>

        {edges.map(([a, b], i) => {
          const from = primaryNodes[a];
          const to = primaryNodes[b];
          const midX = (from.x + to.x) / 2;
          const midY = (from.y + to.y) / 2;
          // Bow the curve away from center so it stays clear of the content column.
          const controlX = midX + (midX - CENTER_X) * 0.35;
          const controlY = midY + (midY - CENTER_Y) * 0.35;
          return (
            <path
              key={`edge-${i}`}
              d={`M ${from.x} ${from.y} Q ${controlX} ${controlY} ${to.x} ${to.y}`}
              fill="none"
              stroke="url(#edge-gradient)"
              strokeWidth={1.5}
              strokeDasharray="6 10"
              className="animate-dash"
              opacity={0.6}
            />
          );
        })}

        {minorNodes.map((n, i) => (
          <circle
            key={`minor-${i}`}
            cx={n.x}
            cy={n.y}
            r={n.r}
            fill="var(--color-ink-muted)"
            opacity={0.35}
          />
        ))}

        {primaryNodes.map((n) => (
          <circle key={n.id} cx={n.x} cy={n.y} r={5} fill="var(--color-electric)" opacity={0.9} />
        ))}
      </svg>

      {primaryNodes.map((n, i) => (
        <div
          key={n.id}
          className="absolute hidden animate-float rounded-full border border-border-strong bg-surface/70 px-4 py-1.5 text-xs font-medium text-ink-muted shadow-lg backdrop-blur-md xl:block"
          style={{
            left: `${(n.x / 1200) * 100}%`,
            top: `${(n.y / 800) * 100}%`,
            transform: "translate(-50%, -50%)",
            animationDelay: `${i * 0.9}s`,
          }}
        >
          {n.label}
        </div>
      ))}
    </div>
  );
}
