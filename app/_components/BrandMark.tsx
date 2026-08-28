type BrandMarkProps = {
  size?: number;
  className?: string;
};

export default function BrandMark({
  size = 42,
  className = "brand-mark",
}: BrandMarkProps) {
  return (
    <picture className={className} style={{ width: size, height: size }}>
      <source srcSet="/brand/pk-monogram-transparent.avif" type="image/avif" />
      <source srcSet="/brand/pk-monogram-transparent.webp" type="image/webp" />
      <img alt="" height={size} src="/brand/pk-monogram-transparent.webp" width={size} />
    </picture>
  );
}

export function BrandWordmark() {
  return (
    <picture className="brand-wordmark">
      <source
        sizes="224px"
        srcSet="/brand/plumber-kensington-horizontal-logo-480.avif 480w, /brand/plumber-kensington-horizontal-logo-1086.avif 1086w"
        type="image/avif"
      />
      <source
        sizes="224px"
        srcSet="/brand/plumber-kensington-horizontal-logo-480.webp 480w, /brand/plumber-kensington-horizontal-logo-1086.webp 1086w"
        type="image/webp"
      />
      <img
        alt=""
        height={362}
        sizes="224px"
        src="/brand/plumber-kensington-horizontal-logo-480.webp"
        srcSet="/brand/plumber-kensington-horizontal-logo-480.webp 480w, /brand/plumber-kensington-horizontal-logo-1086.webp 1086w"
        width={1086}
      />
    </picture>
  );
}
