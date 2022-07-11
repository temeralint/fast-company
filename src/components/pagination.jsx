import React from 'react';
import _ from 'lodash'

const Pagination = ({itemsCount, pageSize, currentPage, onPageChange}) => {
    const pageCount = Math.ceil(itemsCount / pageSize)
    const pages = _.range(1, pageCount + 1)

    return (
        <nav>
            <ul className="pagination">
                {
                    pages.length === 1 ? null :
                    pages.map((page, index) => {
                        let classes = 'page-item'
                        if (page === currentPage) {
                            classes += ' active'
                        }
                        
                        return (
                            <li key={index} 
                                className={classes}
                                onClick={() => onPageChange(page)}
                            >
                                <a className="page-link">{page}</a>
                            </li>
                        )
                    })
                }
            </ul>
        </nav>
    )
};

export default Pagination;