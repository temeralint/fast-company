import { Link } from 'react-router-dom';

const Navigation = () => {
    return (
        <nav className="navbar navbar-expand-lg navbar-white bg-white m-2">
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="navbar-nav mr-auto">
                    <li className="nav-item active">
                        <Link to='/' className='nav-link'>Main</Link>
                    </li>
                    <li className="nav-item">
                        <Link to='/login' className='nav-link'>Login</Link>
                    </li>
                    <li className="nav-item">
                        <Link to='/users' className='nav-link'>Users</Link>
                    </li>
                </ul>
            </div>
        </nav>
    )
}

export default Navigation