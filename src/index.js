import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Home from './components/Home';
import RpcStatus from "./components/RpcStatus";
import Seed from "./components/Seed";
import Indexer from "./components/Indexer";
import APIStatus from "./components/APIStatus";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  // <React.StrictMode>
  //   <App />
  // </React.StrictMode>

  <Router>
    <React.Fragment>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/rpc-status" element={<RpcStatus/>} />
        <Route path="/seed-peer-status" element={<Seed/>} />
        <Route path="/self-test" element={<APIStatus/>} />
        <Route path="/indexer-status" element={<Indexer/>} />      
      </Routes>
    </React.Fragment>
  </Router>

);
