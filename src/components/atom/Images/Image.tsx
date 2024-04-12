import React from "react";

interface ImageProps {
  src: string; // Path to the image
  alt: string; // Alt text for accessibility
  className?: string;
  width?: number | string; // Width of the image
  height?: number | string; // Height of the image
}

function Image({ src, alt, className, width, height }: ImageProps) {
  return (
    <img
      src={src}
      alt={alt}
      className={`custom-image ${className || ""}`}
      width={width}
      height={height}
    />
  );
}

export default Image;
