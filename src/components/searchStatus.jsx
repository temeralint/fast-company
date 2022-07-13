import React from "react";
import PropTypes from 'prop-types';

const SearchStatus = ({users}) => {
    let classes = 'badge bg-'
    const length = users.length
    if (length === 0) {
        classes += 'danger'
        return <h2><span className={classes}>Никто не тусанет с тобой сегодня</span></h2>
    } else {
        classes += 'primary'
        if (length === 4 || length === 3 || length === 2) {
            return <h2><span className={classes}>{length} человека тусанут с тобой сегодня</span></h2>  
        }
        return <h2><span className={classes}>{length} человек тусанет с тобой сегодня</span></h2>  
    }
}

SearchStatus.propTypes = {
    users: PropTypes.array.isRequired
}

export default SearchStatus;