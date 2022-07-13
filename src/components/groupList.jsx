import React from 'react';
import PropTypes from 'prop-types';

const GroupList = ({items, selectedProfession, onItemSelect, onReset}) => {
    let professions = Object.values(items)
    let classes = 'list-group-item'
    return (
        <>
            <ul className="list-group">
                {
                    professions.map(profession => {
                        return <li className={profession._id === selectedProfession ? `${classes} active` : classes}
                                key={profession._id}
                                onClick={() => onItemSelect(profession._id)}
                                >
                                    {profession.name}
                                </li>
                    })
                }
            </ul>
            {
                professions.length === 0 ? null : 
                    <button className='btn btn-secondary mt-2' 
                            onClick={onReset}
                    >
                        Очистить
                    </button>
            }
        </>

    )
}

GroupList.propTypes = {
    items: PropTypes.object.isRequired,
    onItemSelect: PropTypes.func.isRequired,
    selectedProfession: PropTypes.string
}

export default GroupList;