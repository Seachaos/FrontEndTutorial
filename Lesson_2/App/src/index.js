import React from 'react';
import ReactDOM from "react-dom";

import Home from './Views/Home';
import { Provider } from 'react-redux';
import store from './Redux';

const wrapper = document.createElement('div');
document.body.append(wrapper);
ReactDOM.render(<Provider store={store}><Home /></Provider>, wrapper);