// src/main/frontend/src/App.js

import React, {useEffect, useState} from 'react';
import axios from 'axios';
import './App.css';

function App() {

    let post = '강남 우동 맛집';
    let [title, b] = useState(['남자 코트 추천','여자 코트 추천','코트 추천']);

    return (
        <div className="App">
            <div className="black-nav">
                <h4>{post}</h4>
            </div>
            <div className="list">
                <h4>{title[0]}</h4>
                <p>10월 19일 발행</p>
            </div>
            <div className="list">
                <h4>{title[1]}</h4>
                <p>10월 19일 발행</p>
            </div>
            <div className="list">
                <h4>{title[2]}</h4>
                <p>10월 19일 발행</p>
            </div>
        </div>
    );
}

export default App;