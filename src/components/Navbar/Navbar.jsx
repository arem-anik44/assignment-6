import React from 'react';
import cartImage from "../../assets/shopping-cart-01.png";

const Navbar = ({isAvilable, setIsAvilable,cart}) => {
    return (
        <div className="navbar bg-white-100  py-5  container mx-auto lg:px-20 ">
  <div className="navbar-start ">
    <div className="dropdown">
      <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
      </div>
      <ul
        tabIndex="-1"
        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
        <li><a href="">Products</a></li>
      <li><a href="">Features</a></li>
      <li><a href="">Pricing</a></li>
      <li><a href="">Testimonials</a></li>
      <li><a href="">FAQ</a></li>
      </ul>
    </div>
    <a className="text-xl md:text-3xl lg:text-4xl font-semibold bg-linear-to-r from-[#4f39f6] to-[#9514fa] text-transparent bg-clip-text inline-block items-center">DigiTools</a>
  </div>
  <div className="navbar-center hidden lg:flex text-[#101727]">
    <ul className="menu menu-horizontal px-1">
      <li><a href="">Products</a></li>
      <li><a href="">Features</a></li>
      <li><a href="">Pricing</a></li>
      <li><a href="">Testimonials</a></li>
      <li><a href="">FAQ</a></li>
    </ul>
  </div>
  <div className="navbar-end gap:2 md:gap-3 lg:gap-4 ">
    <button onClick={() => setIsAvilable(false)} className='cursor-pointer btn rounded-full'>
  <img src={cartImage} alt="" />
  <span>{cart.length}</span>
</button>
    <a href="" className='hidden md:block'>Login</a>
    <button className="btn bg-linear-to-r from-[#4f39f6] to-[#9514fa] rounded-3xl font-semibold text-white">Get Started</button>
  </div>
</div>
    );
};

export default Navbar;