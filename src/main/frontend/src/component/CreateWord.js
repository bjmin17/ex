import {useNavigate} from "react-router";
import UseFetch from "../hooks/useFetch";
import {useRef} from "react";
import {useState} from "react";

export default function CreateWord() {
    const days = UseFetch("http://localhost:3001/days");
    const navigate = useNavigate();
    const [isLoading, setIsLoading] = useState(false);

    function onSubmit(e) {
        e.preventDefault();

        if(!isLoading) {
            // const url = `http://localhost:3001/words/`;
            const url = `http://localhost:8080/words/save/`;
            setIsLoading(true);
            fetch(url, {
                method: 'POST',
                headers: {
                    'Content-Type' : 'application.json',
                },
                body: JSON.stringify({
                    day : dayRef.current.value,
                    eng : engRef.current.value,
                    kor : korRef.current.value,
                    isDone: false
                })
            }).then(res => {
                console.log(res.json());
                if(res.ok) {
                    alert("생성이 완료되었습니다.");
                    navigate(`/day/${dayRef.current.value}`)
                }
                setIsLoading(false);
            }).catch(err => {
                alert("생성 불가");
                setIsLoading(false);
            })
        }
    }

    const engRef = useRef(null);
    const korRef = useRef(null);
    const dayRef = useRef(null);

    return <form onSubmit={onSubmit}>
        <div className="input_area">
            <label>Eng</label>
            <input type="text" placeholder="computer" ref={engRef}/>
        </div>
        <div className="input_area">
            <label>Kor</label>
            <input type="text" placeholder="컴퓨터" ref={korRef}/>
        </div>
        <div className="input_area">
            <label>Day</label>
            <select ref={dayRef}>
                <option value="1">1</option>
                <option value="2">2</option>
                <option value="3">3</option>
                <option value="4">4</option>
                {days.map(day => {
                    <option key={day.id} value={day.day}>{day.day}</option>
                })}
            </select>
        </div>
        <button
            style={{oppacity: isLoading ? 0.3 : 1}}
        >{isLoading ? "Saving..." : "저장"}</button>
    </form>
}