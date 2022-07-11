import React, { useState } from "react";
import SearchStatus from "./components/searchStatus";
import User from "./components/user";
import API from "./api";
import Pagination from "./components/pagination";
import { paginate } from "./utils/paginate";

const App = () => {
    const [users, setUsers] = useState(API.users.fetchAll())
    const [currentPage, setCurrentPage] = useState(1)
    const pageSize = 4

    const userCrop = paginate(users, currentPage, pageSize)

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

    const handlePageChange = (pageNumber) => {
        setCurrentPage(pageNumber)
    }

    return (
        <>
            <SearchStatus users={users}/>
            <User users={userCrop} 
                    handleUserDelete={handleUserDelete} 
                    handleBookmarkClick={handleBookmarkClick}
            />
            <Pagination itemsCount={users.length}
                        pageSize={pageSize} 
                        currentPage={currentPage}
                        onPageChange={handlePageChange}
            />
        </>
    )
}

export default App;