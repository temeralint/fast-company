import { useParams, Link } from "react-router-dom";
import API from "../api";
import Quality from "./quality";

const User = () => {
    const {id} = useParams()
    const filteredUser = API.users.fetchAll().filter(user => user._id === id)

    return (
        <>
            {
                filteredUser.length === 0 ? 'Такого пользователя нет'
                :
                filteredUser.map(user => {
                    return (
                        <div key={user._id}>
                            <h1>{user.name}</h1>
                            <h2>Профессия: {user.profession.name}</h2>
                            <h3><Quality user={user}/></h3>
                            <h4>completedMeetings: {user.completedMeetings}</h4>
                            <h5>Rate: {user.rate}</h5>
                            <button className="btn btn-primary m-1">
                                <Link 
                                    to='/users' 
                                    style={{color: 'white'}}
                                >
                                    Все пользователи
                                </Link>
                            </button>
                        </div>
                    )
                })
            }
        </>
    );
};

export default User;