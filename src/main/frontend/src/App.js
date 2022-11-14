// src/main/frontend/src/App.js
'use strict';
import React, {useEffect, useState} from 'react';
import axios from 'axios';
import './App.css';
import NavigationBar from './views/utils/navbar';
import Header from "./component/Header";
import DayList from "./component/DayList";
import Day from "./component/Day";


function App() {
    return (
        <div className="App">
            <NavigationBar/>
            <Header />
            <DayList />
            <Day />
        </div>
    );
}

/*function Main() {
    return (
        <>
            <NavigationBar/>
            <HomeDiv/>
            <div className="black-nav" onClick={goHome}>
                <h4>{post}</h4>
            </div>

            <button onClick={() => {
                let copy = [...title];
                copy[0] = '여자코트 추천';
                updTitle(copy);
            }}>글 수정</button>

            <button onClick={() => {
                let copyArr = [...title];
                copyArr.sort();
                updTitle(copyArr);
            }}>가나다순정렬</button>

            <div className="list">
                <h4>{title[0]} <span onClick={() => {updLike(like+1)}}>👍</span> {like} </h4>
                <p>10월 19일 발행</p>
            </div>
            <div className="list">
                <h4>{title[1]} <span>👍</span> 0 </h4>
                <p>10월 19일 발행</p>
            </div>
            <div className="list">
                <h4>{title[2]} <span>👍</span> 0 </h4>
                <p>10월 19일 발행</p>
            </div>
        </>
    )
}*/

const goHome = () => {
    document.location.href="http://localhost:3000/";
}
export default App;