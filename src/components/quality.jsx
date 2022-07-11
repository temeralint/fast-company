import React from "react";

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

export default Quality;