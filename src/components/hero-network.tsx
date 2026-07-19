const primaryNodes = [
  { id: "business", label: "Business", x: 50, y: 700 },
  { id: "systems", label: "Systems", x: 420, y: 140 },
  { id: "ai", label: "AI", x: 1150, y: 100 },
  { id: "product", label: "Product", x: 780, y: 660 },
];

const minorNodes = [
  { x: 230, y: 470, r: 5 },
  { x: 970, y: 330, r: 4 },
  { x: 760, y: 130, r: 4 },
  { x: 440, y: 690, r: 5 },
];

// Two independent mirrored arcs: business (bottom-left) sweeps up along the
// left margin to systems (near the avatar); ai (top-right) sweeps down along
// the right margin to product (near the avatar). They never touch the
// centered headline/content column, and never connect to each other.
const edges: { from: number; to: number; control: [number, number] }[] = [
  { from: 0, to: 1, control: [20, 150] }, // business -> systems
  { from: 2, to: 3, control: [1180, 650] }, // ai -> product
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
        preserveAspectRatio="none"
        className="h-full w-full opacity-[0.55] dark:opacity-70"
      >
        <defs>
          <linearGradient id="edge-gradient" x1="0" y1="0" x2="1" y2="0">
            <stop offset="0%" stopColor="var(--color-electric)" />
            <stop offset="50%" stopColor="var(--color-cyan)" />
            <stop offset="100%" stopColor="var(--color-purple)" />
          </linearGradient>
        </defs>

        {edges.map((e, i) => {
          const from = primaryNodes[e.from];
          const to = primaryNodes[e.to];
          return (
            <path
              key={`edge-${i}`}
              d={`M ${from.x} ${from.y} Q ${e.control[0]} ${e.control[1]} ${to.x} ${to.y}`}
              fill="none"
              stroke="url(#edge-gradient)"
              strokeWidth={1.5}
              strokeDasharray="6 10"
              className="animate-dash"
              opacity={0.6}
              vectorEffect="non-scaling-stroke"
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
            vectorEffect="non-scaling-stroke"
          />
        ))}

        {primaryNodes.map((n) => (
          <circle
            key={n.id}
            cx={n.x}
            cy={n.y}
            r={5}
            fill="var(--color-electric)"
            opacity={0.9}
            vectorEffect="non-scaling-stroke"
          />
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
