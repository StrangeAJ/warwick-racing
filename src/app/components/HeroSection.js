import React from "react";
import BackImg from "./BackImg";
import GreenButton from "./GreenButton";
import { Bebas_Neue } from "next/font/google";

const bebas_Neue = Bebas_Neue({
  subsets: ["latin"],
  weight: ["400"],
});

const HeroSection = ({
  backgroundUrl,
  title,
  description,
  buttonText,
  buttonStyle,
  contentCentered,
  titleColor,
  socialMedia,
  buttonLink,
  imagePosition,
  desFont,
  desMargin,
  frontPageSub,
  children,
  btnCenter,
}) => {
  return (
    <section
      className={` bg-center py-20 relative mb-1 flex flex-col ${contentCentered
          ? `items-center justify-center text-center`
          : `items-start justify-start text-start`
        } w-full h-screen `}
      style={{ overflow: "hidden" }}
    >
      <BackImg url={backgroundUrl} imagePosition={imagePosition} />
      <div className="relative max-w-4xl mx-6 px-8">
        <h1
          className={`text-8xl m-4 font-bold text-${titleColor} ${bebas_Neue.className}`}
        >
          {title}
        </h1>
        {description && (
          <p className={` text-white mt-4 ${desFont ? 'text-xl':'text-lg'}
          ${frontPageSub?'mx-4':''}
          `}>{description}</p>
        )}
        {socialMedia && (
          <div className="flex justify-center mt-4">
            {socialMedia.map((item, index) => {
              const Icon = item.icon;
              return (
                <a
                  key={index}
                  href={item.url}
                  target="_blank"
                  rel="noreferrer"
                  className={`m-2 hover:scale-125`}
                  style={{ 
                    // scale 1.2 when hover and also change color to #43B02A
                    transition: "transform 0.3s"
                   }}
                >
                  <item.icon
                    color={item.color?item.color:"#43B02A"}                    
                    opacity="1"
                    height="40px"
                    width="40px"
                    style={{ 
                      filter: "drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25))",
                      // cursor: "pointer"
                     }}
                  />
                </a>
              );
            })}
          </div>
        )}
        {buttonText && (
          <div
          className={`${btnCenter ? 'flex justify-center items-end w-screen mt-[40vh]' : ''}`}
          >
          <GreenButton
            style={{ marginTop: "2rem", marginBottom: "2rem", ...buttonStyle }}
          >
            <a href={buttonLink} target="_blank" rel="noreferrer">
            {buttonText}
            </a>
          </GreenButton>
          </div>
        )}
      </div>
      {children}
    </section>
  );
};

export default HeroSection;
