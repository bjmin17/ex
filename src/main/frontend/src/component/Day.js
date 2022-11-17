import {useParams} from "react-router-dom";
import Word from "./Word";
import {useEffect, useState} from "react";
import UseFetch from "../hooks/useFetch";

export default function Day() {
    const { day } = useParams();
    // const words = useFetch(`http://localhost:3001/words?day=${day}`);
    const words = UseFetch(`http://localhost:8080/words/day?day=${day}`,{"Access-Control-Allow-Origin" : "*"});


    return (
            <>
                <h2>Day {day}</h2>
                <table>
                    <tbody>
                    {words.map(word => (
                        <Word word={word} key={word.id}/>
                    ))}
                    </tbody>
                </table>
            </>
        )
}