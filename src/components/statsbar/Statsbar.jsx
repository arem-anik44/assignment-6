import React from 'react';

const Statsbar = () => {
    return (
        <div className="flex justify-around shadow   bg-linear-to-r from-[#4f39f6] to-[#9514fa]  w-full text-white divide-y md:divide-x divide-gray-300 flex-wrap md:flex-nowrap">
  <div className="stat place-items-center py-8 md:py-10">
    
    <div className="stat-value text-[60px] font-extrabold">50K+</div>
    <div className="stat-desc text-white font-medium text-[24px]">Active Users</div>
  </div>
  

  <div className="stat place-items-center py-8 md:py-10">
    
    <div className="stat-value text-[60px] font-extrabold">200+</div>
    <div className="stat-desc text-white font-medium text-[24px]">Premium Tools</div>
  </div>

  <div className="stat place-items-center py-8 md:py-10">
    
    <div className="stat-value text-[60px] font-extrabold">4.9</div>
    <div className="stat-desc text-white font-medium text-[24px]">Rating</div>
  </div>
</div>
    );
};

export default Statsbar;