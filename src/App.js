import { useEffect, useState } from 'react';
import axios from 'axios';
import './App.css';

import Navbar from './components/Navbar';
import DataEntry from './components/DataEntry';
import RecordData from './components/RecordData';
import { Empty } from 'antd';
import DisplayingData from './components/DisplayingData';
import mapboxgl from '!mapbox-gl'; // eslint-disable-line import/no-webpack-loader-syntax
import LandingPageInfo from './components/landingPageInfo';

mapboxgl.accessToken =
  'pk.eyJ1Ijoic2FoaWx0aGFrYXJlNTIxIiwiYSI6ImNrbjVvMTkzNDA2MXQydnM2OHJ6aHJvbXEifQ.z5aEqRBTtDMWoxVzf3aGsg';

function App() {
  const [latitude, setLatitude] = useState();
  const [longitude, setLongitude] = useState();
  const [checkBtn, setCheckBtn] = useState(false);
  const [weatherRecord, setWeatherRecord] = useState([]);
  const [checkIndex, setCheckIndex] = useState(false);
  const [openBtn, setOpenBtn] = useState(true);
  const [displayData, setDisplayData] = useState();
  const [error, setError] = useState(null);
  const [method, setMethod] = useState(null);

  const updateWeatherRecord = (value) => {
    setWeatherRecord((temp) => [...temp, value]);
  };

  const apiData = () => {
    axios
      .get(
        `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=c218046f887a7c643e294a056fb8b486`
      )
      .then((response) => {
        const value = {
          temperature: response?.data?.main.temp,
          pressure: response?.data?.main.pressure,
          humidity: response?.data?.main.humidity,
          name: response.data.name,
          wind: response.data.wind.speed,
          main: response?.data?.weather?.[0]?.main,
          description: response.data.weather[0].description,
        };
        updateWeatherRecord(value);
      })
      .catch((error) => {
        console.log(error);
        setError(error.message);
      });
  };

  useEffect(() => {
    if (method === 'Map') {
      if (latitude && longitude) {
        apiData();
      }
    }
  }, [latitude, longitude, method]);

  const latitudeFunc = (e, type = 'input') => {
    if (type === 'input') {
      setLatitude(e.target.value);
    } else if (type === 'Map') {
      setLatitude(e);
    }
  };

  const longitudeFunc = (e, type = 'input') => {
    if (type === 'input') {
      setLongitude(e.target.value);
    } else if (type === 'Map') {
      setLongitude(e);
    }
  };

  const checkBtnFunc = () => {
    setCheckBtn(!checkBtn);
    if (checkBtn === true) {
      window.location.reload();
    }
  };

  const updateOpenBtn = (item, index) => {
    setCheckIndex(index);
    if (openBtn) {
      setDisplayData(item);
      setOpenBtn(!index);
    } else {
      setDisplayData([]);
      setOpenBtn(index);
      setCheckIndex(false);
    }
  };

  const deleteData = () => {
    let work = weatherRecord.slice(0, Number(weatherRecord.length) - Number(1));
    setWeatherRecord(work);
  };

  return (
    <div className='app'>
      <Navbar checkBtn={checkBtn} checkBtnFunc={checkBtnFunc} />
      {!checkBtn && <LandingPageInfo checkBtnFunc={checkBtnFunc} />}
      <div className='appInsider'>
        <div className='leftSide'>
          <DataEntry
            latitude={latitude}
            latitudeFunc={latitudeFunc}
            longitude={longitude}
            longitudeFunc={longitudeFunc}
            apiData={apiData}
            checkBtn={checkBtn}
            error={error}
            weatherRecord={weatherRecord}
            setError={setError}
            setLatitude={setLatitude}
            setLongitude={setLongitude}
            method={method}
            setMethod={setMethod}
          />
          {checkBtn && method?.length && (
            <div
              style={{
                paddingLeft: '6%',
                color: 'white',
              }}
            >
              <h1>Record List:</h1>
            </div>
          )}
          {checkBtn && method?.length ? (
            weatherRecord?.length > 0 ? (
              <RecordData
                weatherRecord={weatherRecord}
                checkIndex={checkIndex}
                updateOpenBtn={updateOpenBtn}
                openBtn={openBtn}
                deleteData={deleteData}
              />
            ) : (
              <Empty className='EmptyBox' />
            )
          ) : null}
        </div>

        {checkBtn ? (
          displayData &&
          Object.keys(displayData)?.length > 0 &&
          weatherRecord?.length > 0 ? (
            <DisplayingData displayData={displayData} />
          ) : (
            weatherRecord?.length > 0 && <Empty className='EmptyBox2' />
          )
        ) : null}
      </div>
    </div>
  );
}

export default App;
