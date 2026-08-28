type VisualName =
  | "home-enquiry-process"
  | "leak-repair-visual"
  | "blocked-vs-flush-visual"
  | "toilet-cistern-states"
  | "ceiling-water-safety"
  | "tap-repair-visual"
  | "shower-repair-visual";

type VisualAssetProps = {
  alt: string;
  className?: string;
  name: VisualName;
  sizes?: string;
};

const dimensions = { width: 1448, height: 1086 } as const;

export default function VisualAsset({
  alt,
  className = "",
  name,
  sizes = "(max-width: 760px) calc(100vw - 28px), (max-width: 1100px) min(86vw, 724px), 724px",
}: VisualAssetProps) {
  const source = `/visuals/${name}`;

  return (
    <picture className={`content-visual ${className}`.trim()}>
      <source
        sizes={sizes}
        srcSet={`${source}-724.avif 724w, ${source}-1448.avif 1448w`}
        type="image/avif"
      />
      <source
        sizes={sizes}
        srcSet={`${source}-724.webp 724w, ${source}-1448.webp 1448w`}
        type="image/webp"
      />
      <img
        alt={alt}
        decoding="async"
        height={dimensions.height}
        loading="lazy"
        src={`${source}-724.webp`}
        width={dimensions.width}
      />
    </picture>
  );
}
