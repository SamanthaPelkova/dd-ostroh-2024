import React from "react";

interface BlobProps {
  colorClass: string;
  top: number;
  left: number;
  width: number;
  height: number;
}

const Blob: React.FC<BlobProps> = ({
  colorClass,
  top,
  left,
  width,
  height,
}) => {
  return (
    <svg
      className={`absolute ${colorClass}`}
      style={{
        top: `${top}%`,
        left: `${left}%`,
        width: `${width}px`,
        height: `${height}px`,
      }}
      viewBox="0 -2 100 100"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M44.8,-39.8C58.8,-28.7,69.4,-14.4,69.7,1.5C70,17.4,59.9,34.8,45.9,42.6C31.8,50.4,15.9,48.7,1.1,47.1C-13.6,45.5,-27.1,44.1,-39.2,37.1C-51.3,30.2,-62,17.6,-63.4,3.4C-64.8,-10.9,-56.9,-26.8,-45,-37.5C-33.1,-48.1,-16.6,-53.6,-0.8,-52.7C15,-51.7,29.9,-44.8,44.8,-39.8Z"
        transform="translate(50 50)"
      />
    </svg>
  );
};

export default Blob;
