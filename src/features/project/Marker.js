import  {useState, useEffect} from "react"; 


export function Marker ( {latlng, options, map}){
    const [marker, setMarker] = useState()
    
    

    useEffect(() => {
        if (!marker) {
          setMarker(new window.google.maps.Marker({position:  { lat: latlng.lat, lng: latlng.lng }, map }));
          // setMarker(new window.google.maps.Marker({setPosition: {lat: 1, lng: 1}}));

          console.log(map)

        }
        return () => {
            if (marker) {
              marker.setMap(null);
            }
          };
        }, [marker]);

        useEffect(() => {
          if (marker) {
            marker.setOptions(options);
          }
        }, [marker, options]);
  return null;
} 
