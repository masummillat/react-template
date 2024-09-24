import React from "react";

interface AvaterProps {
  src: string;
  alt?: string;
}
const Avater: React.FC<AvaterProps> = ({ src, alt = "avater" }) => {
  return (
    <img
      src={src}
      alt={alt}
      width="100%"
      height="100%"
      style={{
        objectFit: "cover",
        objectPosition: "center",
      }}
      className="rounded-full"
    />
  );
};

export default Avater;
