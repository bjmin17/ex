import World from "./World";
import styles from "./Hello.module.css";
import {useState} from "react";

const Hello = () => {
    // let name = "Mike";
    const [name, setName] = useState('Mike');

    // 동일한 컴포넌트라도 state는 다르게 사용하기 때문에 서로 영향을 미치지 않음
    function changeName() {
        const newName = name === "Mike" ? "Jane" : "Mike";
        setName(newName);
    }

    return (
        <div>
            <p>Hello</p>
            <p>{name}</p>
            <button onClick={changeName}>Change</button>
        </div>
    )
}

export default Hello;