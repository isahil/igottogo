import './App.css';
//import wrappedMap from './map'
import React from 'react';
import { GoogleMap, useLoadScript, Marker, InfoWindow } from "@react-google-maps/api"
import mapStyles from './mapStyles';
//const { REACT_APP_GOOGLE_MAPS_API_KEY } = process.env

const libraries = ["places"];

const mapContainerStyle = {
  width: "100vw",
  height: "100vh"
};

const center = { 
  lat: 40.743797, 
  lng: -73.959593
};

const options = {
  styles: mapStyles, //imported map styles from snazzys
  disableDefaultUI: true //disables the default google ui elements on the map
}
export default function App() {
  const {isLoaded, loadError} = useLoadScript({
    googleMapsApiKey: "AIzaSyDmdItnLUezNk3Y9D34iN3VMTP3Sdp5xkg", //linux not reading the process.env values?
    libraries
  });

  if(loadError) return 'Error loading maps'
  if(!isLoaded) return 'Map is loading'

  return (
    <div> 
      <h1> Find a spot to go </h1>

      <GoogleMap 
      mapContainerStyle={mapContainerStyle} 
      zoom={12} 
      center={center}
      options={options}
      ></GoogleMap>
    </div>
  );
}
