import React from "react";
import PropTypes from 'prop-types';

const Bookmark = ({id, bookmark, handleBookmarkClick}) => {
    let classes = 'bi bi-bookmark'
    if (bookmark) {
        classes += '-fill'
    }
    return <i className={classes} onClick={() => handleBookmarkClick(id)}></i>
}

Bookmark.propTypes = {
    id: PropTypes.string.isRequired,
    bookmark: PropTypes.bool.isRequired,
    handleBookmarkClick: PropTypes.func.isRequired
}

export default Bookmark;