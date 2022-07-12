import React from 'react';
import PropTypes from 'prop-types';

const GroupList = ({items}) => {
    let professions = Object.values(items)
    return (
        <ul className="list-group">
            {
                professions.map(profession => {
                    return <li className='list-group-item' 
                               key={profession._id}
                            >
                                {profession.name}
                            </li>
                })
            }
        </ul>
    )
}

GroupList.propTypes = {
    items: PropTypes.object.isRequired
}

export default GroupList;