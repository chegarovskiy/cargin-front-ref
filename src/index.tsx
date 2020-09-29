import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import * as serviceWorker from './serviceWorker';
import { Provider } from "react-redux";
import { store } from "./context/reduser";
import './index.scss';


ReactDOM.render(<Provider store={store as any}>
                    <App />
                </Provider>, document.getElementById('root'));

serviceWorker.unregister();
