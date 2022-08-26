import React from 'react';
import ReactDOM from 'react-dom/client';
import { Outlet } from "react-router-dom";
import './index.css';
import App from './App';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <Outlet />
);

