import  {useState, useEffect} from "react"; 


export function Marker (options){
    const [marker, setMarker] = useState()
    
    console.log(marker)

    useEffect(() => {
        if (!marker) {
          setMarker(new window.maps.Marker({setPosition: {lat: -34, lng: 151},}));
        }
        return () => {
            if (marker) {
              marker.setMap(null);
            }
          };
        }, [marker]);

    // useEffect(() => {
    //   if (marker) {
    //         marker.setOptions(options);
    //         }
    //   }, [marker, options]);


  return null;
         
} 