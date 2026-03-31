import React from 'react';
import bannerImage from '../../assets/banner.png';
import playImage from '../../assets/Play.png';
import loadingImage from "../../assets/Group 5.png";

const Herobanner = () => {
    return (
        <div className=" bg-white-200 min-h-screen  container mx-auto">
        <div className="flex flex-col lg:flex-row-reverse gap-x-15  items-center lg:ml-35 mt-20 ">
            <div className='flex-1'>
                <img
                src={bannerImage}
                className=" rounded-lg shadow-2xl "
                />
            </div>    
            <div className='flex-1 space-y-2 pt-20 text-center lg:pt-0 lg:text-left'>
                <h4 className='btn rounded-2xl bg-[#e1e7ff] font-medium text-[#469165] text-[16px]'><img src={loadingImage} alt="" />New: AI-Powered Tools Available</h4>
                <h1 className="text-7xl font-bold text-[#101727]">Supercharge Your Digital Workflow</h1>
                <p className="py-6 text-[#627382] text-[20px] ">
                    Access premium AI tools, design assets, templates, and productivity
                    software—all in one place. Start creating faster today.

                    <br />Explore Products

                </p>
                <button className="btn bg-gradient-to-r from-[#4f39f6] to-[#9514fa] rounded-3xl font-[#700] text-white mr-3">Explore Products</button>
                <button class="btn btn-ghost group relative p-[2px] overflow-hidden rounded-3xl font-bold ">
  
                    <span class="absolute inset-0 bg-linear-to-r from-[#4f39f6] to-[#9514fa]"></span>
                    
                    
                    <span class="relative flex items-center justify-center w-full h-full px-6 py-2 transition-all duration-300 bg-base-100 rounded-3xl group-hover:bg-transparent ">
                        <span class="bg-linear-to-r from-[#4f39f6] to-[#9514fa] bg-clip-text text-transparent group-hover:text-white">
                        Watch Demo
                        </span>
                    </span>
                </button>
            </div>
        </div>
</div>
    );
};

export default Herobanner;