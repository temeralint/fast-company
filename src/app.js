import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Users from './layouts/users';
import User from './components/user';
import Navigation from './components/navigation';
import Login from './layouts/login';
import MainPage from './layouts/mainPage';

const App = () => {
    return (
        <BrowserRouter>
            <Navigation/>

            <Switch>
                <Route path='/login' component={Login}/>
                <Route path='/users' exact component={Users}/>
                <Route path='/users/:id?' component={User}/>
                <Route path='/' component={MainPage}/>
            </Switch>
        </BrowserRouter>
    )
}

export default App;