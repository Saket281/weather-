import React from 'react';

const MethodInfo = ({ setMethod }) => {
  return (
    <div
      style={{
        background: '#6F9CEB',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        padding: '20px',
        borderRadius: '8px',
        marginTop: '20px',
        marginLeft: '6%',
        lineHeight: '30px',
        color: 'white',
      }}
    >
      <div>
        <h3>Choose Your Preferred Method to Check Weather:</h3>
        <h3>
          1. Click on the Map: Explore the weather by clicking on the map.
          <br /> Simply click on the location you're interested in, and get
          instant weather information.
        </h3>
        <h3>
          2. Input Latitude and Longitude: Prefer to enter specific coordinates?
          Enter the latitude and longitude manually, and click 'Try' to get the
          weather for the chosen location.
        </h3>
        <h3>How would you like to check the weather today?</h3>

        <div
          style={{
            display: 'flex',
            gap: '20px',
          }}
        >
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
            onClick={() => {
              setMethod('Map');
            }}
          >
            <h3>Map</h3>
          </button>
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
            onClick={() => {
              setMethod('Input');
            }}
          >
            <h3>Input Method</h3>
          </button>
        </div>
      </div>
    </div>
  );
};

export default MethodInfo;
