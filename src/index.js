import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './component/App';
import { cardlist } from "./compAPI/index";

console.log(cardlist)

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render( <
    React.StrictMode >
    <
    App list = { cardlist }
    /> < /
    React.StrictMode >
);