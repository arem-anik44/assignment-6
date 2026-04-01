import React, { useEffect, useState } from 'react';
import GetStarted from '../GetStarted/GetStarted';
import Pricing from '../Pricing/Pricing';
import CardType1 from '../ui/CardType1';

const Card = ({ cardInfoPromise }) => {

    const [Cards, setCards] = useState([]);
    const [isAvilable, setIsAvilable] = useState(false);

    useEffect(() => {
        cardInfoPromise.then(res => {
            setCards(res); 
        });
    }, [cardInfoPromise]);

    return (
        <div className='mt-25'>

            <div className='text-center space-y-3'>
                <h1 className='font-extrabold text-[48px]'>Premium Digital Tools</h1>
                <p className='text-[#627382]'>
                    Choose from our curated collection of premium digital products designed <br />
                    to boost your productivity and creativity.
                </p>

                <div>
                    <button 
                        onClick={() => setIsAvilable(!isAvilable)} 
                        className={`btn ${isAvilable ? "btn-primary":""} rounded-3xl rounded-r-none`}
                    >
                        Products
                    </button>

                    <button 
                        onClick={() => setIsAvilable(!isAvilable)} 
                        className={`btn ${isAvilable ? "":"btn-primary"} rounded-3xl rounded-l-none`}
                    >
                        Cart <span>(0)</span>
                    </button>
                </div>
            </div>

            <div className={` ${isAvilable ? "":"hidden"}`}>
                <div className='grid grid-cols-3 w-300 mx-auto container gap-4 py-20'>
                    {Cards.map((card) => (
                    <CardType1 key={card.id} card={card}/>
                ))}
                </div>
                

                <GetStarted/>
                <Pricing/>
            </div>

            <div className={` ${isAvilable ? "hidden":""}`}>
                Proced to Checkout
            </div>

        </div>
    );
};

export default Card;