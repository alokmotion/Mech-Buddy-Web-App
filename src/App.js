import React, { useEffect } from 'react';
import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from './pages';
import Signin from './pages/signin';
import Register from './pages/register';
import Forgetpassword from './components/Forget';
import NewPassword from './components/NewPassword';
import logoutpage from './pages/logoutpage';
import { useDispatch } from 'react-redux';
import { auth } from './firebase';
import { setUser } from './Redux/action';
import { ToastContainer} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    auth.onAuthStateChanged((authUser) => {
      if (authUser) {
        dispatch(setUser(authUser));
      } else {
        dispatch(setUser(null));
      }
    });
  }, [dispatch]);

  return (
    <Router>
      <Switch>
        <Route path="/" component={Home} exact />
        <Route path="/signin" component={Signin} exact />
        <Route path="/signup" component={Register} exact />
        <Route path="/forgetpass" component={Forgetpassword} exact />
        <Route path="/newpassword" component={NewPassword} exact />
        <Route path="/logout" component={logoutpage} exact />
      </Switch>
      <ToastContainer position="top-right" autoClose={2000} />
    </Router>
  );
}

export default App;
