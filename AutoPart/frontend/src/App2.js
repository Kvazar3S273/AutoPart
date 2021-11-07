import logo from './logo.svg';
import './App.css';
import React, { Suspense } from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
// import Header from './components/header';
// import RegisterPage from './components/auth/Register';
// import LoginPage from './components/auth/Login';
// import HomePage from './components/home';
// import GetUserList from './components/userlist';
// import DeleteUser from './components/userlist/Delete';
// import EditUser from './components/userlist/Edit';
const DefaultLayout = React.lazy(() => import('./components/containers/DefaultLayout'));

function App2() {

  return (
    <>
      <Suspense fallback={<div>Загрузка...</div>}>
        <Switch>
          <Route path="/" name="Default" render={props => <DefaultLayout {...props} />} />
        </Switch>
      </Suspense>
      {/* <Header />
      <div className="container">
        <Switch>
          <Route exact path="/home"><HomePage /></Route>
          <Route exact path="/user"><GetUserList /></Route>
          <Route exact path="/register"><RegisterPage /></Route>
          <Route exact path="/Login"><LoginPage /></Route>
          <Route exact path="/edit/:id" render={({ match }) => <EditUser match={match} />}></Route>
          <Route exact path="/delete/:id" render={({ match }) => <DeleteUser match={match} />}></Route>
        </Switch>
      </div> */}
    </>

  )
}

export default App2;
