const primaryNodes = [
  { id: "business", label: "Business", x: 140, y: 560 },
  { id: "systems", label: "Systems", x: 460, y: 210 },
  { id: "product", label: "Product", x: 820, y: 560 },
  { id: "ai", label: "AI", x: 1080, y: 210 },
];

const minorNodes = [
  { x: 300, y: 420, r: 5 },
  { x: 620, y: 400, r: 4 },
  { x: 940, y: 400, r: 5 },
  { x: 200, y: 260, r: 4 },
  { x: 700, y: 660, r: 4 },
  { x: 980, y: 660, r: 5 },
];

const edges: [number, number][] = [
  [0, 1],
  [1, 2],
  [2, 3],
];

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
          const midY = Math.min(from.y, to.y) - 140;
          return (
            <path
              key={`edge-${i}`}
              d={`M ${from.x} ${from.y} Q ${midX} ${midY} ${to.x} ${to.y}`}
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
          className="absolute animate-float rounded-full border border-border-strong bg-surface/70 px-4 py-1.5 text-xs font-medium text-ink-muted shadow-lg backdrop-blur-md"
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
