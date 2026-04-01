import React from 'react';
import CardType3 from '../ui/CardType3';

const Pricing = () => {
    return (
        <div className='space-y-10 py-20'>
            <div className='text-center'>

            <h1 className='font-extrabold text-[48px]'>Simple, Transparent Pricing</h1>
            <p className='text-[#627382]'>Choose the plan that fits your needs. Upgrade or downgrade anytime.</p>
            </div>
            
            <CardType3/>
        </div>
    );
};

export default Pricing;