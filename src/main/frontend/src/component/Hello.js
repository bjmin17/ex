import World from "./World";
import styles from "./Hello.module.css";
import {useState} from "react";
import UserName from "./UserName";

const Hello = ({ age }) => {
    const [name, setName] = useState('Mike');
    const msg = age > 19 ? '성인입니다.' : '미성년자입니다.';

    return (
        <div>
            <p>Hello</p>
            <p>{name}({age}세) : {msg}</p>
            <UserName name={name}/>
            <button onClick={() => {
                setName(name === "Mike" ? "Jane" : "Mike");
            }}>Change</button>
        </div>
    )
}

export default Hello;