import React from 'react';
import accountImage from "../../assets/user.png";
import rocketImage from "../../assets/rocket.png";
import packageImage from "../../assets/package.png";

const CardType2 = () => {
    return (
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 w-300 mx-auto container gap-4'>
            <div className="card bg-base-100 w-full shadow-sm">
                    <div className="card-actions justify-end pr-4 pt-4">
                    <button className="btn bg-linear-to-r from-[#4f39f6] to-[#9514fa] rounded-full font-semibold text-white">1</button>
                    </div>
                <figure className="px-10 pt-10">
                    <img
                    src={accountImage}
                    className="rounded-2xl bg-[#f0eafe] p-3" />
                </figure>
                <div className="card-body items-center text-center">
                    <h2 className="card-title">Create Account</h2>
                    <p>Sign up for free in seconds. No credit card <br />required to get started.</p>
                </div>
            </div>
            <div className="card bg-base-100 w-full shadow-sm">
                    <div className="card-actions justify-end pr-4 pt-4">
                    <button className="btn bg-linear-to-r from-[#4f39f6] to-[#9514fa] rounded-full font-semibold text-white">2</button>
                    </div>
                <figure className="px-10 pt-10">
                    <img
                    src={packageImage}
                    className="rounded-2xl bg-[#f0eafe] p-3" />
                </figure>
                <div className="card-body items-center text-center">
                    <h2 className="card-title">Choose Products</h2>
                    <p>Browse our catalog and select the tools <br />that fit your needs.</p>
                </div>
            </div>
            <div className="card bg-base-100 w-full shadow-sm">
                    <div className="card-actions justify-end pr-4 pt-4">
                    <button className="btn bg-linear-to-r from-[#4f39f6] to-[#9514fa] rounded-full font-semibold text-white">3</button>
                    </div>
                <figure className="px-10 pt-10">
                    <img
                    src={rocketImage}
                    className="rounded-2xl bg-[#f0eafe] p-3 " />
                </figure>
                <div className="card-body items-center text-center">
                    <h2 className="card-title">Start Creating</h2>
                    <p>Download and start using your premium <br />tools immediately.</p>
                </div>
            </div>
        </div>
    );
};

export default CardType2;