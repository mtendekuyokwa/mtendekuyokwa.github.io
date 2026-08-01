interface Line {
  x1: number;
  y1: number;
  x2: number;
  y2: number;
  accent?: boolean;
}

interface Marker {
  x: number;
  y: number;
  label: string;
}

interface VariantData {
  lines: Line[];
  markers?: Marker[];
}

const TABLES: Record<string, VariantData> = {
  hero: {
    lines: [
      { x1: -40, y1: 940, x2: 860, y2: 320 },
      { x1: 1480, y1: 940, x2: 560, y2: 320 },
      { x1: -60, y1: 420, x2: 900, y2: -60 },
      { x1: 1500, y1: 420, x2: 560, y2: -60 },
      { x1: 0, y1: 620, x2: 1440, y2: 620 },
      { x1: 90, y1: 620, x2: 90, y2: 860, accent: true },
      { x1: 360, y1: 620, x2: 360, y2: 780 },
      { x1: 1080, y1: 620, x2: 1080, y2: 800 },
      { x1: 1350, y1: 620, x2: 1350, y2: 860, accent: true },
    ],
    markers: [
      { x: 110, y: 545, label: "LILONGWE — MW" },
      { x: 1090, y: 140, label: "MTENDE · SOFTWARE ENGINEER" },
    ],
  },
  photographer: {
    lines: [
      { x1: 240, y1: 180, x2: 1200, y2: 180 },
      { x1: 1200, y1: 180, x2: 1200, y2: 760 },
      { x1: 1200, y1: 760, x2: 240, y2: 760 },
      { x1: 240, y1: 760, x2: 240, y2: 180 },
      { x1: 240, y1: 470, x2: 1200, y2: 470 },
      { x1: 720, y1: 180, x2: 720, y2: 760 },
      { x1: 240, y1: 180, x2: 1200, y2: 760, accent: true },
      { x1: -60, y1: 180, x2: 240, y2: 180 },
      { x1: 1200, y1: 760, x2: 1500, y2: 760 },
      { x1: 60, y1: 900, x2: 300, y2: 760 },
    ],
    markers: [
      { x: 1200, y: 160, label: "MUBAS" },
      { x: 260, y: 790, label: "EST. 2022" },
    ],
  },
  projects: {
    lines: [
      { x1: 0, y1: 300, x2: 620, y2: 300 },
      { x1: 820, y1: 300, x2: 1440, y2: 300 },
      { x1: 0, y1: 600, x2: 1440, y2: 600 },
      { x1: 200, y1: 0, x2: 200, y2: 240 },
      { x1: 420, y1: 340, x2: 420, y2: 900 },
      { x1: 700, y1: 0, x2: 700, y2: 260, accent: true },
      { x1: 980, y1: 340, x2: 980, y2: 900 },
      { x1: 1240, y1: 0, x2: 1240, y2: 260, accent: true },
      { x1: 320, y1: 620, x2: 560, y2: 300, accent: true },
      { x1: 1120, y1: 620, x2: 880, y2: 300, accent: true },
    ],
    markers: [
      { x: 220, y: 280, label: "JIYA" },
      { x: 720, y: 280, label: "KATHOLIC" },
      { x: 1260, y: 280, label: "EULAR" },
    ],
  },
  marvels: {
    lines: [
      { x1: -60, y1: 900, x2: 800, y2: 120, accent: true },
      { x1: 1500, y1: 900, x2: 640, y2: 120 },
      { x1: -60, y1: 700, x2: 900, y2: 0 },
      { x1: 1500, y1: 700, x2: 560, y2: 0, accent: true },
      { x1: 0, y1: 500, x2: 1440, y2: 500 },
      { x1: 260, y1: 500, x2: 260, y2: 900 },
      { x1: 1180, y1: 500, x2: 1180, y2: 900 },
      { x1: 200, y1: 200, x2: 340, y2: 340, accent: true },
      { x1: 1260, y1: 240, x2: 1180, y2: 340, accent: true },
    ],
    markers: [{ x: 1080, y: 180, label: "SHIPPED" }],
  },
  marvelsBottom: {
    lines: [
      { x1: 0, y1: 700, x2: 1440, y2: 700 },
      { x1: 0, y1: 770, x2: 1440, y2: 770 },
      { x1: 0, y1: 840, x2: 1440, y2: 840 },
      { x1: 0, y1: 900, x2: 1440, y2: 900 },
      { x1: 180, y1: 620, x2: 180, y2: 900, accent: true },
      { x1: 720, y1: 620, x2: 720, y2: 900 },
      { x1: 1260, y1: 620, x2: 1260, y2: 900, accent: true },
    ],
    markers: [{ x: 1300, y: 650, label: "LET'S TALK" }],
  },
};

interface LineFieldProps {
  variant: keyof typeof TABLES;
  className?: string;
}

export default function LineField({ variant, className = "" }: LineFieldProps) {
  const data = TABLES[variant];
  if (!data) return null;

  return (
    <svg
      aria-hidden="true"
      className={`pointer-events-none absolute inset-0 ${className}`}
      viewBox="0 0 1440 900"
      preserveAspectRatio="xMidYMid slice"
      fill="none"
    >
      <g>
        {data.lines.map((l, i) => (
          <line
            key={i}
            x1={l.x1}
            y1={l.y1}
            x2={l.x2}
            y2={l.y2}
            stroke={l.accent ? "oklch(0.92 0.18 130 / 0.35)" : "rgba(255,255,255,0.07)"}
            strokeWidth={l.accent ? 1.5 : 1}
          />
        ))}
      </g>
      {data.markers?.map((m, i) => (
        <text
          key={i}
          x={m.x}
          y={m.y}
          fill="rgba(255,255,255,0.28)"
          fontSize="11"
          fontFamily="Poppins, system-ui, sans-serif"
          letterSpacing="3"
        >
          {m.label}
        </text>
      ))}
    </svg>
  );
}
