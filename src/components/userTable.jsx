import React from "react";
import PropTypes from 'prop-types';
import TableHeader from "./tableHeader";
import TableBody from "./tableBody";

const UserTable = ({users, sortState, onUserDelete, onBookmarkClick, onSort}) => {
    const tableHeadItems = [
        {iter: 'name', name: 'Имя'},
        {name: 'Качества'},
        {iter: 'profession.name', name: 'Профессия'},
        {iter: 'completedMeetings', name: 'Встретился, раз'},
        {iter: 'rate', name: 'Оценка'},
        {iter: 'bookmark', name: 'Избранное'},
    ]

    return (
        <>
            {
                users.length === 0 ? null :
                    <table className="table">
                        <TableHeader onSort={onSort} 
                                     thItems={tableHeadItems}
                                     sortState={sortState}
                        />
                        <TableBody users={users} 
                                onUserDelete={onUserDelete} 
                                onBookmarkClick={onBookmarkClick}
                        />
                    </table>
            }
        </>
    )
}

UserTable.propTypes = {
    users: PropTypes.array.isRequired,
    onUserDelete: PropTypes.func.isRequired,
    onBookmarkClick: PropTypes.func.isRequired,
    onSort: PropTypes.func.isRequired
}

export default UserTable;