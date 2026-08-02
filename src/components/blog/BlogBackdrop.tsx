import StarField from "../StarField";
import LineField from "../LineField";
import { NOISE } from "../portfolio/variants";

export default function BlogBackdrop() {
  return (
    <div
      aria-hidden="true"
      style={{ position: "fixed", inset: 0, zIndex: -1 }}
    >
      <StarField count={420} />
      <LineField variant="marvels" />
      <div
        className="pointer-events-none absolute inset-0"
        style={{
          backgroundImage: `url("${NOISE}")`,
          backgroundSize: "180px 180px",
          opacity: 0.05,
        }}
      />
    </div>
  );
}
