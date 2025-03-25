import React from 'react';

const Home = () => {
  return (
    <div className="relative">
      <img
        src="/A_clean_and_futuristic_digital_illustration_repres.png"
        alt="NutriNest Illustration"
        className="w-full h-screen object-cover"
      />
      <img
        src="/nutrinest_logo00.jpg"
        alt="NutriNest Logo"
        className="absolute top-1/3 left-1/2 transform -translate-x-1/2 w-32 h-32"
      />
      <div className="absolute bottom-20 left-1/2 transform -translate-x-1/2 text-white text-4xl font-bold">
        A inovação Nutri está chegando
      </div>
    </div>
  );
};

export default Home;
