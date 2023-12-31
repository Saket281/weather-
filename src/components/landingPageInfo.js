import React from 'react';

const LandingPageInfo = ({ checkBtnFunc }) => {
  return (
    <div
      style={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        background: '#6F9CEB',
        padding: '20px',
        flexDirection: 'column',
        boxShadow: '80px 80px 80px 80px #E1DD8F',
      }}
    >
      <div
        style={{
          color: 'white',
          fontSize: '20px',
          lineHeight: '30px',
        }}
      >
        Welcome to My Weather Website Explore the weather by clicking on the map
        and stay updated with the latest forecasts.
        <br /> Feel free to navigate the site to discover more features and
        information about weather conditions worldwide. <br /> Thank you for
        visiting!
      </div>
      <button
        style={{
          marginTop: '30px',
          padding: '5px 40px 5px 40px',
          color: 'white',
          backgroundColor: '#007bff',
          textDecoration: 'none',
          borderRadius: '8px',
          border: 'none',
          cursor: 'pointer',
        }}
        onClick={checkBtnFunc}
      >
        <h3>Try Now!</h3>
      </button>
    </div>
  );
};

export default LandingPageInfo;
