import React, { useState } from "react";
import SearchStatus from "./components/searchStatus";
import User from "./components/user";
import API from "./api";

const App = () => {
    const [users, setUsers] = useState(API.users.fetchAll())
    
    const handleUserDelete = (id) => {
        setUsers(users => users.filter(user => user._id !== id))
    }

    const handleBookmarkClick = (id) => {
        setUsers(users => users.map(user => {
            if (user._id === id) {
                return {...user, bookmark: !user.bookmark}
            } else {
                return user
            }
        }))
    }

    return (
        <>
            <SearchStatus users={users}/>

            {users.length === 0 ? null : 
                <table className="table">
                    <User users={users} 
                          handleUserDelete={handleUserDelete} 
                          handleBookmarkClick={handleBookmarkClick}
                    />
                </table>
            }
        </>
    )
}

export default App;