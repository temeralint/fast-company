import React from "react";
import PropTypes from 'prop-types';
import Quality from "./quality";
import Bookmark from "./bookmark";

const UserTable = ({users, onUserDelete, onBookmarkClick, onSort}) => {
    return (
        <>
            {
                users.length === 0 ? null :
                    <table className="table">
                        <TableHead onSort={onSort}/>
                        <TableBody users={users} 
                                onUserDelete={onUserDelete} 
                                onBookmarkClick={onBookmarkClick}
                        />
                    </table>
            }
        </>
    )
}

const TableHead = ({onSort}) => {
    const tableHead = [
        {name: 'name', value: 'Имя'},
        {name: 'qualities', value: 'Качества'},
        {name: 'profession.name', value: 'Профессия'},
        {name: 'completedMeetings', value: 'Встретился, раз'},
        {name: 'rate', value: 'Оценка'},
        {name: 'bookmark', value: 'Избранное'},
    ]

    return (
        <thead>
            <tr>
                {
                    tableHead.map(item => {
                        return <th scope="col" 
                                   key={item.name} 
                                   onClick={() => onSort(item.name)}
                                >
                                    {item.value}
                                </th>
                    })
                }
            </tr>
        </thead>
    )
}

const TableBody = ({users, onUserDelete, onBookmarkClick}) => {
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
                                               onBookmarkClick={onBookmarkClick}/>
                                    }
                                </td>
                                <td>
                                    <button 
                                        className="btn btn-danger"
                                        onClick={() => onUserDelete(user._id)}
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

UserTable.propTypes = {
    users: PropTypes.array,
    onUserDelete: PropTypes.func,
    onBookmarkClick: PropTypes.func
}

export default UserTable;