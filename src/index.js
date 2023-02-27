import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import coaArray from './components/dataStuff/coaData';

export {default as Header} from './components/Header.js';
export {default as SearchBox} from './components/SearchBox.js';
export {default as CoatsOfArmsGallery} from './components/CoatsOfArmsGallery.js';
export {default as SortCoatsOfArms} from './components/SortCOA.js';
export {default as Footer} from './components/Footer.js';
export {default as namesData} from "./components/dataStuff/nameData.json";


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
