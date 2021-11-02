import React from 'react';
import {Weather} from './features/project/Weather'
import './App.css';
import { Wrapper, Status} from "@googlemaps/react-wrapper";
import { Spinner } from './features/project/Spiner';
import { ErrorComponent } from './features/project/ErrorComponent';


// const render = (status) => {
//   switch (status) {
//     case status === Status.LOADING:
//       return <Spinner />;
//     case status === Status.FAILURE:
//       return <ErrorComponent />;
//     case status === Status.SUCCESS:
//       return <Weather />;
//   }
// };
const render = (status: Status): ReactElement => {
  if (status === Status.LOADING) return <Spinner />;
  if (status === Status.FAILURE) return <ErrorComponent />;
  return null;
};

function App() {
  return (
    <Wrapper apiKey={"AIzaSyDZaOYq8-wsulwTlpwqfCLX2hp4HcPPx7c"}  render = { render } >
    <div className="App">
      <Weather/>
    </div>
    </Wrapper > 
  );
}
export default App;
