// src/main/frontend/src/App.js
'use strict';
import React, {useEffect, useState} from 'react';
import axios from 'axios';
import './App.css';
import NavigationBar from './views/utils/navbar';
import Header from "./component/Header";
import DayList from "./component/DayList";
import Day from "./component/Day";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import EmptyPage from "./component/EmptyPage";
import CreateWord from "./component/CreateWord";
import CreateDay from "./component/CreateDay";


function App() {
    return (
        <BrowserRouter>
            <div className="App">
                <NavigationBar/>
                <Header />
                <Routes>
                    <Route path='*' element={<EmptyPage />} />
                    <Route exact path="/" element={<DayList />}/>
                    <Route path="/day/:day" element={<Day />}/>
                    <Route path="/create_word" element={<CreateWord />}/>
                    <Route path="/create_day" element={<CreateDay />}/>
                </Routes>
            </div>
        </BrowserRouter>
    );
}

export default App;