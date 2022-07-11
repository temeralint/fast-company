import React from "react";

const Bookmark = ({id, bookmark, handleBookmarkClick}) => {
    let classes = 'bi bi-bookmark'
    if (bookmark) {
        classes += '-fill'
    }
    return <i className={classes} onClick={() => handleBookmarkClick(id)}></i>
}

export default Bookmark;