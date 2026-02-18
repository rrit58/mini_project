import React from 'react'
import { testimonals , user_icon} from '../assets/testimonals';
import TestimonalCard from './TestimonalCard';

const Testimonals = () => {
  
  return (
    <div className="flex flex-nowrap overflow-x-auto gap-5 p-5 w-[90%] shadow rounded-3xl m-l-5 no-scrollbar">
    {testimonals.map((item,index) => (
        <TestimonalCard 
            key={item.id || index} 
            item={item} 
            icon={user_icon}
        />
    ))}
</div>
  );
}

export default Testimonals