import React, { useState } from 'react';

// FAQ Component
const FAQ = ({ faqData }) => {
  const [activeIndex, setActiveIndex] = useState(null);

  // Toggles the FAQ to expand/collapse the answer
  const toggleFAQ = (index) => {
    if (activeIndex === index) {
      setActiveIndex(null); // Collapse if it's already open
    } else {
      setActiveIndex(index); // Open the clicked one
    }
  };

  return (
    <div className="max-w-xl mx-auto mt-8 bg-gray-900 text-white p-6 rounded-lg shadow-lg">
      {faqData.map((item, index) => (
        <div key={index} className="border-b border-gray-700 mb-4">
          <div
            className="flex justify-between items-center cursor-pointer py-4"
            onClick={() => toggleFAQ(index)}
          >
            <h2 className="text-lg font-medium">{item.question}</h2>
            {activeIndex === index 
              ? React.createElement(item.icon_active, { className: 'text-3xl', color: 'white' })
              : React.createElement(item.icon_deactive, { className: 'text-3xl', color: '#43B02A' })}
          </div>
          {activeIndex === index && (
            <div className="py-2 text-gray-400">{item.answer}</div>
          )}
        </div>
      ))}
    </div>
  );
};

export default FAQ;
