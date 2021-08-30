import React from 'react'
import { GoogleMap, useLoadScript, Marker, InfoWindow } from '@react-google-maps/api'

function Map(){
  return (
    <GoogleMap 
    defaultZoom={10} 
    defaultCenter={{ lat: 40.743797, lng: -73.959593}}/>
  )
}

export default function wrappedMap () { 
   return withScriptjs(withGoogleMap(Map));
}