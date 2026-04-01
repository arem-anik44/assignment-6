import React from 'react';

const CardType1 = ({ card }) => {
    

    return (
        
     <div>
        <div className="card w-full bg-base-100 shadow-sm flex flex-col ">
            <div className="card-body ">
                <span className="badge badge-xs badge-warning">{card.tag}</span>
                <div className='space-y-3'>
                <h2 className="text-3xl font-bold">{card.name}</h2>
                <p>{card.description}</p>
                </div>
                <span className="text-xl">${card.price}/{card.billing}</span>
                <ul className="mt-6 flex flex-col gap-2 text-xs">
                    {
                        card.features.map((feature)=>{

                            return(
                                <li>
                                    <svg xmlns="http://www.w3.org/2000/svg" className="size-4 me-2 inline-block text-success" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" /></svg>
                                    <span>{feature}</span>
                            </li>
                            );
                            
                            
                        })
                    }
                
                </ul>
                <div className="mt-6">
                <button className="btn bg-linear-to-r from-[#4f39f6] to-[#9514fa] rounded-3xl font-semibold text-white btn-block">{card.buttonText}</button>
                </div>
            </div>
        </div>
     </div>
    


    );
};

export default CardType1;