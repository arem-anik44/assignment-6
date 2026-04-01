import React, { useEffect, useState } from 'react';
import GetStarted from '../GetStarted/GetStarted';
import Pricing from '../Pricing/Pricing';
import CardType1 from '../ui/CardType1';

const Card = ({
  cardInfoPromise,
  isAvilable,
  setIsAvilable,
  cart,
  handleAddToCart,
  handleRemoveCart,
  handleClearCart
}) => {
  const [Cards, setCards] = useState([]);

  useEffect(() => {
    cardInfoPromise.then((res) => {
      setCards(res);
    });
  }, [cardInfoPromise]);

  const totalPrice = cart.reduce((total, item) => total + item.price, 0);

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
            onClick={() => setIsAvilable(true)}
            className={`btn ${isAvilable ? "btn-primary" : ""} rounded-3xl rounded-r-none`}
          >
            Products
          </button>

          <button
            onClick={() => setIsAvilable(false)}
            className={`btn ${!isAvilable ? "btn-primary" : ""} rounded-3xl rounded-l-none`}
          >
            Cart ({cart.length})
          </button>
        </div>
      </div>

      {/* Products Section */}
      <div className={`${isAvilable ? "" : "hidden"}`}>
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 w-full max-w-7xl mx-auto container gap-4 py-20'>
          {Cards.map((card) => (
            <CardType1
              key={card.id}
              card={card}
              handleAddToCart={handleAddToCart}
            />
          ))}
        </div>

        <GetStarted />
        <Pricing />
      </div>

      {/* Cart Section */}
      <div className={`${isAvilable ? "hidden" : ""} py-20`}>
        <div className='w-full max-w-5xl mx-auto border border-gray-200 rounded-2xl p-8 shadow-sm'>
          <h2 className='text-2xl font-bold mb-8'>Your Cart</h2>

          {
            cart.length === 0 ? (
              <p className='text-gray-500'>No product added yet.</p>
            ) : (
              <>
                <div className='space-y-4'>
                  {
                    cart.map((item) => (
                      <div
                        key={item.id}
                        className='flex items-center justify-between bg-[#f9fafc] p-4 rounded-xl'
                      >
                        <div>
                          <h3 className='font-semibold'>{item.name}</h3>
                          <p className='text-sm text-gray-500'>${item.price}</p>
                        </div>

                        <button
                          onClick={() => handleRemoveCart(item.id)}
                          className='text-pink-500 font-semibold cursor-pointer'
                        >
                          Remove
                        </button>
                      </div>
                    ))
                  }
                </div>

                <div className='flex justify-between items-center mt-8 mb-4'>
                  <p className='text-gray-500'>Total</p>
                  <h3 className='text-2xl font-bold'>${totalPrice}</h3>
                </div>

                <button
  onClick={handleClearCart}
  className='btn btn-block bg-linear-to-r from-[#4f39f6] to-[#9514fa] rounded-3xl text-white border-none'
>
  Proceed To Checkout
</button>
              </>
            )
          }
        </div>
      </div>
    </div>
  );
};

export default Card;