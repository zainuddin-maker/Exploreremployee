import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

// import reportWebVitals from './reportWebVitals';
import { BrowserRouter } from "react-router-dom";
// import ReportOtis from '../src/reportelevator/displayDepan'
// import Autentication from '../src/reportelevator/autenticationreport'
import Appadditive from './Appaddive'
import "../src/assets/css/bootstrap.min.css";
import "../src/assets/css/fontawesome.min.css";
import "../src/assets/css/themify-icons.css";
import "../src/assets/css/style.css";
import "../src/assets/css/custom.css";

ReactDOM.render(
  <BrowserRouter>
    <Appadditive/>
    </BrowserRouter>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();
