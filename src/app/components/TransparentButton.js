import React from 'react';

const TransparentButton = ({ children, style, onClick }) => {
  return (
    <button
      className="px-3 py-3 rounded-md border-2 border-[#43B02A] text-[#43B02A] 
                 transition-all duration-300 ease-in-out
                 hover:bg-[#43B02A] hover:text-white"
      style={style}
    //   onClick={onClick}
    >
      {children}
    </button>
  );
};

export default TransparentButton;
