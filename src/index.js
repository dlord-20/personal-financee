import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import { store } from './app/store';
import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";
import reportWebVitals from './reportWebVitals';
import './index.css';
import TopNav from './components/topNav';

// const container = document.getElementById('root');

export default function App() {

  // This always loads for some reason so we'll need to fix that
  // if(isLoading) {
  //   return <p>Is Loading</p>
  // }

  return (
    <BrowserRouter>
      <Provider store={store}>
        <TopNav/>
        <Routes>
          {/* Routes here with paths */}
          {/* example | <Route path="/coaches/:id" element={<CoachPage/>}/> */}
          <Route path="/" element={<div><h1>I love babe :)</h1></div>}></Route>
          <Route path="/" element={<div><h1>I love babe :)</h1></div>}></Route>
        </Routes>
        {/* Footer */}
      </Provider>
    </BrowserRouter>
  );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
