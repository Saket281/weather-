import React, { useEffect, useRef, useState } from 'react';
import mapboxgl from '!mapbox-gl'; // eslint-disable-line import/no-webpack-loader-syntax

mapboxgl.accessToken =
  'pk.eyJ1Ijoic2FoaWx0aGFrYXJlNTIxIiwiYSI6ImNrbjVvMTkzNDA2MXQydnM2OHJ6aHJvbXEifQ.z5aEqRBTtDMWoxVzf3aGsg';

const Map = ({ latitudeFunc, longitudeFunc }) => {
  const mapContainer = useRef(null);
  const map = useRef(null);
  const [lng, setLng] = useState(77.5946);
  const [lat, setLat] = useState(12.9716);
  const [zoom, setZoom] = useState(9);

  useEffect(() => {
    if (map.current) return;
    map.current = new mapboxgl.Map({
      container: mapContainer.current,
      style: 'mapbox://styles/mapbox/streets-v12',
      center: [lng, lat],
      zoom: zoom,
    });

    map.current.on('click', (e) => {
      setLng(e.lngLat.lng.toFixed(4));
      setLat(e.lngLat.lat.toFixed(4));
      setZoom(map.current.getZoom().toFixed(2));
    });
  }, []);

  useEffect(() => {
    if (lat) {
      latitudeFunc(lat, 'Map');
    }
    if (lng) {
      longitudeFunc(lng, 'Map');
    }
  }, [lng, lat]);

  return (
    <div
      style={{
        marginLeft: '6%',
        padding: '10px',
      }}
    >
      <div
        ref={mapContainer}
        style={{
          height: '400px',
        }}
      />
    </div>
  );
};

export default Map;
