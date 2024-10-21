import * as React from "react";

const BackImg = ({ url }) => {
  return (
    <div
      className="absolute inset-0 w-full h-full "
      style={{
        backgroundImage: `url(${url})`,
        backgroundPosition: "top",
        backgroundSize: "cover", // Stretch the image to cover both width and height
        objectFit: "contain", // Ensures the image fills the container properly
        backgroundRepeat: "no-repeat",
        zIndex: -1,
        maskImage: "linear-gradient(to bottom, rgba(0,0,0,0) 0%, rgba(0,0,0,0.8) 100%)",
      }}
    />
  );
};

export default BackImg;
