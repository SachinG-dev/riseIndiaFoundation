interface LogoProps {
  src: string; // Path to the logo image
  alt: string; // Alt text for accessibility
  className?: string;
}

function Logo({ src, alt, className }: LogoProps) {
  return (
    <img
      src={src}
      alt={alt}
      className={`logo ${className || ""}`}
      style={{ maxWidth: "100%" }}
    />
  );
}

export default Logo;
