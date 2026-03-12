import React, { useMemo } from 'react';

const TestimonalCard = ({ item, icon }) => {
  // If your item doesn't have a rating, randomly pick from 3.5, 4, 4.5, or 5
  const rating = useMemo(() => {
    return item.rating || [3.5, 4, 4.5, 5][Math.floor(Math.random() * 4)];
  }, [item.rating]);

  // A unique ID is needed for the SVG gradient so multiple cards don't clash
  const uniqueId = useMemo(() => item.id || Math.random().toString(36).substr(2, 9), [item.id]);

  const renderStars = () => {
    const stars = [];
    const svgPath = "M7.524.464a.5.5 0 0 1 .952 0l1.432 4.41a.5.5 0 0 0 .476.345h4.637a.5.5 0 0 1 .294.904L11.563 8.85a.5.5 0 0 0-.181.559l1.433 4.41a.5.5 0 0 1-.77.559L8.294 11.65a.5.5 0 0 0-.588 0l-3.751 2.726a.5.5 0 0 1-.77-.56l1.433-4.41a.5.5 0 0 0-.181-.558L.685 6.123A.5.5 0 0 1 .98 5.22h4.637a.5.5 0 0 0 .476-.346z";

    for (let i = 1; i <= 5; i++) {
      if (rating >= i) {
        // Full Star
        stars.push(
          <svg key={i} width="16" height="15" viewBox="0 0 16 15" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d={svgPath} fill="#FF532E" />
          </svg>
        );
      } else if (rating >= i - 0.5) {
        // Half Star (using linearGradient to color exactly 50%)
        const gradientId = `half-star-${uniqueId}-${i}`;
        stars.push(
          <svg key={i} width="16" height="15" viewBox="0 0 16 15" fill="none" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <linearGradient id={gradientId}>
                <stop offset="50%" stopColor="#FF532E" />
                <stop offset="50%" stopColor="#E5E7EB" /> {/* Gray color for empty half */}
              </linearGradient>
            </defs>
            <path d={svgPath} fill={`url(#${gradientId})`} />
          </svg>
        );
      } else {
        // Empty Star
        stars.push(
          <svg key={i} width="16" height="15" viewBox="0 0 16 15" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d={svgPath} fill="#E5E7EB" /> {/* Gray color for empty star */}
          </svg>
        );
      }
    }
    return stars;
  };

  return (
    <div className="flex md:flex-row flex-col gap-5 justify-center">
      <div className="w-80 h-100 flex flex-col items-center border border-gray-300 p-10 rounded-lg overflow-auto no-scrollbar">
        <img className="h-20 w-20 rounded-full" src={item.image ? item.image : icon} alt="userImage" />
        <h2 className="text-lg text-gray-900 font-medium mt-2">{item.name}</h2>
        <p className="text-sm text-gray-500">{item.condition}</p>
        
        {/* Render dynamic stars here */}
        <div className="flex items-center justify-center mt-3 gap-1">
          {renderStars()}
        </div>
        
        <p className="text-center text-[15px] mt-3 text-gray-500">{item.experience}</p>
      </div>
    </div>
  );
};

export default TestimonalCard;