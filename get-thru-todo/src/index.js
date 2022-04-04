import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter} from 'react-router-dom';
import App from './App';
import { TaskProvider } from './Context/taskContext';


ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
    <TaskProvider>
    <App />
    </TaskProvider>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals

