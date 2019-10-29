import React from 'react';
import ReactDOM from "react-dom";

import Home from './Views/Home';

const wrapper = document.createElement('div');
document.body.append(wrapper);
ReactDOM.render(<Home />, wrapper);