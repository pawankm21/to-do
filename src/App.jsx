import { useState, useEffect } from 'react'
import './App.css'
import Auth from './components/auth'
import Kanban from './components/kanban'
import { useSelector, useDispatch } from 'react-redux'
import { login, logout } from './store/auth-slice'
import { auth, onAuthStateChanged } from './firebase.config';
function App() {
  const user = useSelector(state => state.auth.user?.user)
  const dispatch = useDispatch();
  useEffect(() => {
    onAuthStateChanged(auth,user => {
      if (user) {
        dispatch(login(user))
      } else {
        dispatch(logout())
      }
    })
  }, [])
  return (
    <div className="app">
      {!user ? <Auth /> : <Kanban />}
    </div>
  )
}

export default App
