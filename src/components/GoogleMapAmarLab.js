import React from 'react';
import { GoogleMap, LoadScript, Marker} from "@react-google-maps/api";
import MarkerImg from "../assets/img/location-pin.png";

const mayStyle = {
    width: '100%',
    height:'500px'
}

const center={
    lat: 23.746818,
    lng: 90.4557809
};

export const GoogleMapAmarLab = () => {
    return (
        <LoadScript
        googleMapsApiKey="AIzaSyCAYrqCKQadYvdfJypXdicXp5ILhJ_Go0c"
      >
        <GoogleMap
          mapContainerStyle={mayStyle}
          center={center}
          zoom={17}
        >
        <Marker
        icon={MarkerImg}
        position={center}
        />
        </GoogleMap>
      </LoadScript>
    )
}
