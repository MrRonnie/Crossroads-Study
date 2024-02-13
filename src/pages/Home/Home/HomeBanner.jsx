import React from 'react';

const HomeBanner = () => {
  return (
    <div className="hero min-h-screen mb-12" style={{ backgroundImage: 'url(https://daisyui.com/images/stock/photo-1507358522600-9f71e620c44e.jpg)' }}>
      <div className="hero-overlay bg-opacity-60"></div>
      <div className="hero-content text-center text-neutral-content">
        <div className="max-w-md">
          <h1 className="mb-5 text-5xl font-bold text-orange-500">CrossRoads Initiative </h1>
          <p className="mb-5 text-xl text-white">
            We are here to help
            Bangladeshi students
            pursue higher education
            degrees & programs abroad.
          </p>
         
        </div>
      </div>
    </div>
  );
};

export default HomeBanner;