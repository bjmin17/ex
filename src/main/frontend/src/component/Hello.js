import World from "./World";
import styles from "./Hello.module.css";

const Hello = () => {
    return (
        <div>
            <p>Hello</p>
            <World/>
            <World/>
            <div className={styles.box}>Hello</div>
        </div>
    )
}

export default Hello;