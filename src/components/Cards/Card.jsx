import React, { use, useState } from 'react';
import GetStarted from '../GetStarted/GetStarted';
import Pricing from '../Pricing/Pricing';

// const cardInfoPromise = async () =>{
//     const res = await fetch("/data.json");
//     return res.json()
// };


const Card = () => {
    // const cardInfo = use(cardInfoPromise);
    const [isAvilable,setIsAvilable] = useState(false);
    return (
        <div className='mt-25'>

        <div className='text-center space-y-3'>
            <h1 className='font-extrabold text-[48px]'>Premium Digital Tools</h1>
            <p className='text-[#627382]'>Choose from our curated collection of premium digital products designed <br />to boost your productivity and creativity.</p>
            <div>
                <button onClick={()=>setIsAvilable(!isAvilable)} className={`btn ${isAvilable ? "btn-primary":""} rounded-3xl rounded-r-none`}>Products</button>
                <button onClick={()=>setIsAvilable(!isAvilable)} className={`btn ${isAvilable ? "":"btn-primary"}  rounded-3xl rounded-l-none`}>Cart <span>(0)</span></button>
            </div>


           
        
            
        </div>


        <GetStarted/>
        <Pricing/>
        </div>

    );
};

export default Card;