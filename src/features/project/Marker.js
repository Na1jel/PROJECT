import  {useState, useEffect} from "react"; 
import { selectWeather} from './weatherSlice';
import { useSelector } from 'react-redux';
// import Loader from "react-js-loader";


export function Marker ( {position, options, map}){
    const [marker, setMarker] = useState()
    const weather = useSelector(selectWeather)
    // console.log("pos",position)
    
    useEffect(() => {
      // console.log('weather:', weather)

      console.log('POS:', position)
      if (!marker) {
        setMarker(new window.google.maps.Marker({
          position, 
          map,  
          title: ``, 
        }))}
    
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
        }, [marker, options, ]);
  return null;
} 
