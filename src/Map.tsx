import { GoogleMap, useJsApiLoader } from "@react-google-maps/api";

const GASTOWN = {
  lat: 49.2832584,
  lng: -123.108316,
};

const AQUARIUM = {
  lat: 49.3004876,
  lng: -123.1334523,
};

const containerStyle = {
  width: "100%",
  height: `${window.innerHeight}px`,
};

const MapLoader = () => {
  const { isLoaded, loadError } = useJsApiLoader({
    id: "google-map-script",
    googleMapsApiKey: "AIzaSyDLuL6nJ3l0kqs_4mlFT7A9kxyPCVA62_k",
  });

  if (loadError) {
    return <div>Map cannot be loaded right now, sorry.</div>;
  }

  if (!isLoaded) {
    return <div>Loading...</div>;
  }

  return (
    <GoogleMap
      mapContainerStyle={containerStyle}
      center={GASTOWN}
      zoom={18}
      options={{
        disableDefaultUI: true,
        streetViewControl: false,
        zoomControl: true,
        clickableIcons: false,
      }}
    ></GoogleMap>
  );
};

export default MapLoader;
