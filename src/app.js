import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Users from './components/users';
import Navigation from './components/navigation';
import Login from './components/login';
import MainPage from './components/mainPage';

const App = () => {
    return (
        <BrowserRouter>
            <Navigation/>

            <Switch>
                <Route path='/login' component={Login}/>
                <Route path='/users' component={Users}/>
                <Route path='/' component={MainPage}/>
            </Switch>
        </BrowserRouter>
    )
}

export default App;