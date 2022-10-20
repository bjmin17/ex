// src/main/frontend/src/App.js

import React, {useEffect, useState} from 'react';
import axios from 'axios';
import './App.css';

function App() {

    let post = '강남 우동 맛집';
    let [title, updTitle] = useState(['남자 코트 추천','여자 코트 추천','코트 추천']);
    let [like, updLike] = useState(0);

    return (
        <div className="App">
            <div className="black-nav">
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

            <Modal/>
        </div>
    );
}

function Modal() {
    return (
        <>
            <div className="modal">
                <h4>제목</h4>
                <p>날짜</p>
                <p>상세내용</p>
            </div>
            <div></div>
        </>
    )
}

export default App;