import React from "react";
import Quality from "./quality";
import Bookmark from "./bookmark";

const User = ({users, handleUserDelete, handleBookmarkClick}) => {
    return (
        <>
            <TableHead/>
            <TableBody users={users} 
                       handleUserDelete={handleUserDelete} 
                       handleBookmarkClick={handleBookmarkClick}
            />
        </>
    )
}

const TableHead = () => {
    const tableHeadArray = ['Имя', 'Качества', 'Профессия', 'Встретился, раз', 'Оценка', 'Избранное', '']
    return (
        <thead>
            <tr>
                {
                    tableHeadArray.map((item, index) => {
                        return <th scope="col" key={index}>{item}</th>
                    })
                }
            </tr>
        </thead>
    )
}

const TableBody = ({users, handleUserDelete, handleBookmarkClick}) => {
    return (
        <tbody>
                {
                    users.map(user => {
                        return (
                            <tr key={user._id}>
                                <td scope="row">{user.name}</td>
                                <td>{<Quality user={user}/>}</td>
                                <td>{user.profession.name}</td>
                                <td>{user.completedMeetings}</td>
                                <td>{user.rate}/5</td>
                                <td>
                                    {<Bookmark id={user._id} 
                                               bookmark={user.bookmark} 
                                               handleBookmarkClick={handleBookmarkClick}/>
                                    }
                                </td>
                                <td>
                                    <button 
                                        className="btn btn-danger"
                                        onClick={() => handleUserDelete(user._id)}
                                    >
                                        delete
                                    </button>
                                </td>
                            </tr>
                        )
                    })
                }
            </tbody>
    )
}



export default User;