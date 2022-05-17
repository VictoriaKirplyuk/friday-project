import React from 'react';
import './App.css';
import {Header} from "./components/Header/Header";
import {Pages} from "./components/Pages/Pages";

export const App = () => {
    return (
        <div className='App'>
            <Header/>
            <Pages/>
        </div>
    )
}
