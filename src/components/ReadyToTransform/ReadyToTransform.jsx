import React from 'react';

const ReadyToTransform = () => {
  return (
    <div className="bg-gradient-to-r from-[#4f39f6] to-[#b317f6] text-white mt-16">
      <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-16 py-20 sm:py-24 lg:py-28 text-center">
        
        <h1 className="text-3xl sm:text-4xl lg:text-6xl font-bold leading-tight">
          Ready To Transform Your Workflow?
        </h1>

        <p className="mt-6 text-sm sm:text-base lg:text-lg text-white/90 max-w-3xl mx-auto leading-7">
          Join thousands of professionals who are already using Digitools to work smarter.
          <br className="hidden sm:block" />
          Start your free trial today.
        </p>

        <div className="mt-8 flex flex-col sm:flex-row justify-center items-center gap-4">
          <button className="btn bg-white text-[#6d28ff] border-none rounded-full px-8">
            Explore Products
          </button>

          <button className="btn bg-transparent text-white border border-white rounded-full px-8">
            View Pricing
          </button>
        </div>

        <p className="mt-6 text-sm text-white/80">
          14-day free trial • No credit card required • Cancel anytime
        </p>
      </div>
    </div>
  );
};

export default ReadyToTransform;