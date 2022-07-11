import React from "react";
import PropTypes from 'prop-types';

const SearchStatus = ({users}) => {
    let classes = 'badge bg-'
    if (users.length === 0) {
        classes += 'danger'
        return <h2><span className={classes}>Никто не тусанет с тобой сегодня</span></h2>
    }
    classes += 'primary'
    return <h2><span className={classes}>{users.length} человек тусанет с тобой сегодня</span></h2>  
}

SearchStatus.propTypes = {
    users: PropTypes.array.isRequired
}

export default SearchStatus;