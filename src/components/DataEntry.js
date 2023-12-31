import React from 'react';
import Map from './Map';
import MethodInfo from './methodInfo';

const DataEntry = ({
  latitude,
  latitudeFunc,
  longitude,
  longitudeFunc,
  apiData,
  checkBtn,
  error,
  weatherRecord,
  setError,
  setLatitude,
  setLongitude,
  method,
  setMethod,
}) => {
  const isError =
    (latitude?.length || longitude?.length) &&
    (Number(latitude) === 0 || Number(longitude) === 0);

  return (
    <div classBox='mainEntryBox'>
      {!method?.length && checkBtn && <MethodInfo setMethod={setMethod} />}
      {method === 'Map'
        ? checkBtn && (
            <Map latitudeFunc={latitudeFunc} longitudeFunc={longitudeFunc} />
          )
        : method === 'Input' &&
          checkBtn && (
            <div className='dataEntryBox'>
              <h3 className='dataEntryheading'>
                LATITUDE
                <input
                  type='text'
                  value={latitude}
                  onChange={latitudeFunc}
                  className='inputValueBox1'
                />
              </h3>
              <h3 className='dataEntryheading'>
                LONGITUDE
                <input
                  type='text'
                  value={longitude}
                  onChange={longitudeFunc}
                  className='inputValueBox2'
                />
              </h3>
              {error?.length || isError ? (
                <div>
                  <h3 className='dataEntryheading'>
                    please Enter Correct Value{' '}
                  </h3>
                  <button
                    className='wrongbtn'
                    onClick={() => {
                      if (weatherRecord?.length > 0) {
                        setError(null);
                        setLongitude('');
                        setLatitude('');
                      } else {
                        window.location.reload();
                      }
                    }}
                  >
                    Try again
                  </button>
                </div>
              ) : (
                <button onClick={apiData} className='checkBtn'>
                  Submit
                </button>
              )}
            </div>
          )}
    </div>
  );
};

export default DataEntry;
