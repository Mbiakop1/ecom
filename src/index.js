import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { Provider } from 'react-redux';
import { BrowserRouter } from "react-router-dom";
import {store, persistor} from './redux/store';
import { persistGate } from 'redux-persist/integration/react';


ReactDOM.render(
<Provider store={store}>
<BrowserRouter>
 <persistGate persistor={persistor}>
    <App />
 </persistGate>
</BrowserRouter>
</Provider>,
document.getElementById('root')
);
