import React from 'react';

const Footer = () => {
  return (
    <footer className="fixed bottom-1 right-[42%] text-[#46cdf3]   ">
       <div className='flex flex-row justify-center'>
       <p className="text-sm text-center">
        © {new Date().getFullYear()} Psychebot AI | Designed by Shashi
      </p>
       </div>
     
    </footer>
  );
};

export default Footer;
