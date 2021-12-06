import React, {useState, useEffect} from "react"
import 'bootstrap/dist/css/bootstrap.min.css';
import { useSelector} from 'react-redux';
import { selectWeather} from './weatherSlice'
import "./style/modal.css"

const active ={
    transform: "scale(1)"
  }

const Modal = ({open, close})=> {
    const weather = useSelector(selectWeather)
   

    return (
        <div className="modal" style={active} onClick={close}>
            <div className="container modal__content" style={{'max-height': 'calc(100vh - 210px)', 'overflow-y': 'auto'}} onClick={e=> e.stopPropagation()}>
                <h1 className='ModalH'>
                    city:{weather.location.name}</h1>
                    <dl>
                        <h2>weather for 3 days</h2>
                    {weather.forecast.forecastday.map(d =>
             <div className="listWeather"> <div><dt className="weatherDate" key={d.date}> Date: {d.date} </dt> <dd className="weatherInfo"> ОТ {d.day.mintemp_c} - До {d.day.maxtemp_c}  <img src={d.day.condition.icon}></img></dd></div> </div>
                )}
                    </dl>
                <button className="ModalBtn" onClick={close}>Cancel</button>
            </div>
        </div>
        );
          
}
export default Modal;