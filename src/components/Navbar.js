import React from 'react';

const Navbar = ({ checkBtn, checkBtnFunc }) => {
  return (
    <div className='navbar'>
      <h1 className='heading'>Weather Station</h1>
      {!checkBtn && (
        <button className='checkBtn' onClick={checkBtnFunc}>
          check
        </button>
      )}
      {checkBtn && (
        <button className='checkBtn' onClick={checkBtnFunc}>
          close
        </button>
      )}
    </div>
  );
};

export default Navbar;
