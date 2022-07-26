import { useEffect } from 'react'
import './App.css'
import Auth from './components/auth'
import Kanban from './components/kanban'
import { useSelector, useDispatch } from 'react-redux'
import { login, logout } from './store/auth-slice'
import { auth,onAuthStateChanged } from './firebase.config'

function App() {
  const user = useSelector(state => state.auth.user)
  const dispatch = useDispatch();
  useEffect(() => {
    onAuthStateChanged(auth, (userAuth) => {
      if (userAuth) {
        dispatch(
          login({
            email: userAuth.email,
            uid: userAuth.uid,
            displayName: userAuth.displayName,
          })
        );
      } else {
        dispatch(logout());
      }
    });
  }, []);
  return (
    <div className="app">
      {!user ? <Auth /> : <Kanban />}
    </div>
  )
}

export default App
