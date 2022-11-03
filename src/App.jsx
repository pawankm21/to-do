import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { auth, onAuthStateChanged } from "./firebase.config";
import { login, logout } from "./store/auth-slice";
import { fetchNotes } from "./store/note-slice";
import Kanban from "./components/kanban/index";
import Auth from "./components/auth/index";

function App() {
  const dispatch = useDispatch();
  const isLoggedIn = useSelector((state) => state.auth.user);
  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        const userInfo = {
          uid: user.uid,
          displayName: user.displayName,
          email: user.email,
        };

        dispatch(login(userInfo));
        dispatch(fetchNotes(userInfo.uid));
      } else {
        dispatch(logout());
      }
    });
  }, []);
  return <div className="app">{isLoggedIn ? <Kanban /> : <Auth />}</div>;
}

export default App;
