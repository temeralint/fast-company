import React from "react";
import PropTypes from 'prop-types';

const Bookmark = ({id, bookmark, onBookmarkClick}) => {
    let classes = 'bi bi-bookmark'
    if (bookmark) {
        classes += '-fill'
    }
    return <i className={classes} onClick={() => onBookmarkClick(id)}></i>
}

Bookmark.propTypes = {
    id: PropTypes.string.isRequired,
    bookmark: PropTypes.bool.isRequired,
    onBookmarkClick: PropTypes.func.isRequired
}

export default Bookmark;