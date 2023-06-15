import React, { useState } from 'react';
import { GoogleMap, LoadScript, Marker, InfoWindow } from '@react-google-maps/api';

const containerStyle = {
  width: '560px',
  height: '250px'
};

const center = {
  lat: 20.5937,
  lng: 78.9629
};

const dotIcon = {
  path: 'M5 0A5 5 0 1 0 5 10A5 5 0 1 0 5 0',
  fillColor: 'rgb(95, 166, 188)',
  fillOpacity: 0.8,
  strokeWeight: 0.2
};

const locations = [
  { lat: 20.5937, lng: 78.9629, name: 'India' },
  { lat: -1.286389, lng: 36.817223, name: 'Kenya' },
  { lat: -30.5595, lng: 22.9375, name: 'South Africa' }
];

const Map = () => {
  const [selectedMarker, setSelectedMarker] = useState(null);

  const handleMarkerClick = (location) => {
    setSelectedMarker(location);
  };

  const handleCloseInfoWindow = () => {
    setSelectedMarker(null);
  };

  return (
    <LoadScript googleMapsApiKey="AIzaSyCpfUBH2Xvf8OecKwDeI8WBMSpkwMz4-X4">
      <GoogleMap
        mapContainerStyle={containerStyle}
        center={center}
        zoom={2}
      >
        {locations.map((location, index) => (
          <Marker
            key={index}
            position={{ lat: location.lat, lng: location.lng }}
            title={location.name}
            icon={dotIcon} // Use the dot icon for the marker
            onClick={() => handleMarkerClick(location)}
          >
            {selectedMarker === location && (
              <InfoWindow onCloseClick={handleCloseInfoWindow}>
                <div>{location.name}</div>
              </InfoWindow>
            )}
          </Marker>
        ))}
      </GoogleMap>
    </LoadScript>
  );
};

export default Map;
