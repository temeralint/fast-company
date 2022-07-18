import React, { useState, useEffect } from "react";
import _ from 'lodash';
import SearchStatus from './searchStatus';
import UserTable from "./userTable";
import API from "../api";
import Pagination from "./pagination";
import { paginate } from "../utils/paginate";
import GroupList from "./groupList";

const User = () => {
    const [users, setUsers] = useState(API.users.fetchAll())
    const [currentPage, setCurrentPage] = useState(1)
    const [professions, setProfessions] = useState({})
    const [selectedProfession, setSelectedProfession] = useState()
    const [sortBy, setSortBy] = useState({iter: 'name', order: 'asc'})
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
    const sortedUsers = _.orderBy(filteredItems, [sortBy.iter], [sortBy.order])

    useEffect(() => {
        setCurrentPage(1)
    }, [filteredItems])

    const userCrop = paginate(sortedUsers, currentPage, pageSize)

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

    const handlePageChange = pageNumber => {
        setCurrentPage(pageNumber)
    }

    const handleProfessionSelect = id => {
        setSelectedProfession(id)
    }

    const handleReset = () => {
        setSelectedProfession()
    }

    const handleSort = sortParameter => {
        if (sortBy.iter === sortParameter) {
            setSortBy((prevState) => (
                {...prevState, order: prevState.order === 'asc' ? 'desc' : 'asc'}
            ))
        } else {
            setSortBy({iter: sortParameter, order: 'asc'})
        }
    }

    return (
        <>
            <div className="m-2">
                <SearchStatus users={filteredItems}/>
            </div>

            <div className="d-flex">
                <div className="d-flex flex-column m-2">
                    <GroupList items={professions} 
                            selectedProfession={selectedProfession} 
                            onItemSelect={handleProfessionSelect}
                            onReset={handleReset}
                    />
                </div>
                <UserTable users={userCrop} 
                    sortState={sortBy}
                    onUserDelete={handleUserDelete} 
                    onBookmarkClick={handleBookmarkClick}
                    onSort={handleSort}
                />
            </div>
            
            <div className="d-flex justify-content-center">
                <Pagination itemsCount={filteredItems.length}
                            pageSize={pageSize} 
                            currentPage={currentPage}
                            onPageChange={handlePageChange}
                />
            </div>
        </>
        
    )
}

export default User;