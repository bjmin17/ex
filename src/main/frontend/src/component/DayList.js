import dummy from '../db/data.json';
import {Link} from "react-router-dom";
import {useEffect, useState} from "react";
import UseFetch from "../hooks/useFetch";
import {useAsync} from "react-async";

// async function getDays() {
//     const response = await UseFetch('http://localhost:8080/days/list');
//     return response.json();
// }

export default function DayList() {
    // const { data: days, error, isLoading } = useAsync({
    //     promiseFn: getDays,
    // });
    // console.log(days);
    // const days = useFetch('http://localhost:3001/days');
    const days = UseFetch('http://localhost:8080/days/list');
    // const [days, setDays] = useState([]);
    //
    // const fetchDays = async () => {
    //     const response = await useFetch('http://localhost:8080/days/list');
    //     setDays(response.json());
    // }

    // useEffect(() => {
    //
    //     // const fetchUsers = async () => {
    //     //     try {
    //     //         // 요청이 시작 할 때에는 error 와 users 를 초기화하고
    //     //         setError(null);
    //     //         setUsers(null);
    //     //         // loading 상태를 true 로 바꿉니다.
    //     //         setLoading(true);
    //     //         const response = await axios.get(
    //     //             'https://jsonplaceholder.typicode.com/users'
    //     //         );
    //     //         setUsers(response.data); // 데이터는 response.data 안에 들어있습니다.
    //     //     } catch (e) {
    //     //         setError(e);
    //     //     }
    //     //     setLoading(false);
    //     // };
    //
    //     fetchDays();
    // }, []);
    console.log(days);
    return (
        <>
            <ul className="list_day">
                {days.map(day => (
                    <li key={day.id}>
                        <Link to={`/day/${day.day}`}>Day {day.day}</Link>
                    </li>
                ))}
            </ul>
        </>
    );
}
