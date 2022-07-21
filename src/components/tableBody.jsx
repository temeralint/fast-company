import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import Quality from "./quality";
import Bookmark from "./bookmark";

const TableBody = ({users, onUserDelete, onBookmarkClick}) => {
    return (
        <tbody>
                {
                    users.map(user => {
                        return (
                            <tr key={user.name}>
                                <td scope="row"><Link to={`/users/${user._id}`}>{user.name}</Link></td>
                                <td>{<Quality user={user}/>}</td>
                                <td>{user.profession.name}</td>
                                <td>{user.completedMeetings}</td>
                                <td>{user.rate}/5</td>
                                <td>
                                    {<Bookmark id={user._id} 
                                               bookmark={user.bookmark} 
                                               onBookmarkClick={onBookmarkClick}/>
                                    }
                                </td>
                                <td>
                                    <button 
                                        className="btn btn-danger"
                                        onClick={() => onUserDelete(user._id)}
                                    >
                                        delete
                                    </button>
                                </td>
                            </tr>
                        )
                    })
                }
            </tbody>
    )
}

TableBody.propTypes = {
    users: PropTypes.array.isRequired,
    onUserDelete: PropTypes.func.isRequired,
    onBookmarkClick: PropTypes.func.isRequired
}

export default TableBody;