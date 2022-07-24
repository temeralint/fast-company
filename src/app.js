import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Users from './layouts/users';
import User from './components/user';
import Navigation from './components/navigation';
import Login from './layouts/login';
import MainPage from './layouts/mainPage';

const App = () => {
    return (
        <BrowserRouter>
            <Navigation/>

            <Routes>
                <Route path='login' element={<Login/>}/>
                <Route path='users' element={<Users/>}/>
                <Route path='users/:id' element={<User/>}/>
                <Route path='/' element={<MainPage/>}/>
            </Routes>
        </BrowserRouter>
    )
}

export default App;