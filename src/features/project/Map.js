import React, { useEffect, useRef,useState } from 'react';
import "./style/styleMap.css"




export function Map ({onClick,children,center, zoom}) {
     const [map, setMap] = useState(false);
    const ref = useRef();

    useEffect(() => {
        setMap(new window.google.maps.Map(ref.current, {
          center ,
          zoom,
        }));
      },[ref, zoom]);

  useEffect(() => {
    if (map) {
      ["click"].forEach((eventName) =>
        window.google.maps.event.clearListeners(map, eventName)
      );

      if (onClick) {
        map.addListener("click", onClick);
      }
    }
  }, [map, onClick]);
return (
  <div>
     <div ref={ref} id="map" />
      {React.Children.map(children, (child) => {
        if (React.isValidElement(child)) {
          return React.cloneElement(child, { map });
        }
      })}
  </div>)
};


//https://www.npmjs.com/package/canvas#loadimage
//https://gist.github.com/viktorkelemen/1451945
//https://coderoad.ru/5706129/HTML5-Canvas-%D0%BC%D0%B5%D1%82%D0%BA%D0%B0-%D0%B4%D0%BB%D1%8F-Google-Maps-API-v3