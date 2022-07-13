import React, { useState, useEffect } from "react";
import SearchStatus from "./components/searchStatus";
import User from "./components/user";
import API from "./api";
import Pagination from "./components/pagination";
import { paginate } from "./utils/paginate";
import GroupList from "./components/groupList";

const App = () => {
    const [users, setUsers] = useState(API.users.fetchAll())
    const [currentPage, setCurrentPage] = useState(1)
    const [professions, setProfessions] = useState({})
    const [selectedProfession, setSelectedProfession] = useState()
    const pageSize = 4

    useEffect(() => {
        API.professionApi.fetchAll().then(res => setProfessions(res))
    }, [])

    const filterItems = (items) => {
        if (selectedProfession) {
            return items.filter(item => item.profession._id == selectedProfession)
        } 
        return items
    }

    const filteredItems = filterItems(users)

    const userCrop = paginate(filterItems(users), currentPage, pageSize)

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

    const handleProfessionSelect = (id) => {
        setSelectedProfession(id)
    }

    const handleReset = () => {
        setSelectedProfession()
    }

    return (
        <>
            <SearchStatus users={filteredItems}/>
            <GroupList items={professions} 
                       selectedProfession={selectedProfession} 
                       onItemSelect={handleProfessionSelect}
                       onReset={handleReset}
            />
            <User users={userCrop} 
                  handleUserDelete={handleUserDelete} 
                  handleBookmarkClick={handleBookmarkClick}
            />
            <Pagination itemsCount={filteredItems.length}
                        pageSize={pageSize} 
                        currentPage={currentPage}
                        onPageChange={handlePageChange}
            />
        </>
    )
}

export default App;