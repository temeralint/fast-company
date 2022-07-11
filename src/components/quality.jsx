import React from "react";
import PropTypes from 'prop-types';

const Quality = ({user}) => {
    return (
        <>
            {
                user.qualities.map(item => {
                    return <span key={item._id} 
                                    className={`badge bg-${item.color} m-1`}
                            >
                                {item.name}
                            </span>
                })
            }
        </>
    )
}

Quality.propTypes = {
    user: PropTypes.object
}

export default Quality;