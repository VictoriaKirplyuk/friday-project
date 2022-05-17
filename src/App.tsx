import React from 'react';
import './App.module.css';
import {Header} from "./components/Header/Header";
import {Pages} from "./components/Pages/Pages";
import s from './App.module.css'

export const App = () => {
    return (
        <div className={s.app}>
            <Header/>
            <Pages/>
        </div>
    )
}
