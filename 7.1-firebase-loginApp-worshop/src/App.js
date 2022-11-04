import {useEffect, useState} from 'react';
import './App.css';
import Home from './components/Home';
import Signin from './components/SignIn';
import {auth} from './firebase';

function App() {
  const [user, setUser] = useState(null);
  // fetch data is user wants to unsubscribe
  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((userAuth) => {
      const user = {
        uid: userAuth?.uid,
        email: userAuth?.email,
      };
      // get user id and email in order to unsubscribe
      // if userAuth is true, we will set user and set it to null to unsubscribe
      if (userAuth) {
        console.log(userAuth);
        setUser(user);
      } else {
        setUser(null);
      }
    });
    return unsubscribe;
  }, []);
  return <div className="App">{user ? <Home /> : <Signin />}</div>;
}

export default App;
