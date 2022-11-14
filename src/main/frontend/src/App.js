// src/main/frontend/src/App.js
'use strict';
import React, {useEffect, useState} from 'react';
import axios from 'axios';
import './App.css';
import NavigationBar from './views/utils/navbar';
import HomeDiv from './views/home/index';
import Hello from "./component/Hello";
import Welcome from "./component/Welcome";
import styles from "./App.module.css";

function App() {

    let post = '내 연습장';
    let [title, updTitle] = useState(['남자 코트 추천','여자 코트 추천','코트 추천']);
    let [like, updLike] = useState(0);


    return (
        <div className="App">
            <NavigationBar/>
            <Hello/>
            <div className={styles.box}>App</div>
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