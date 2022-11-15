import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { auth, onAuthStateChanged } from "./firebase.config";
import { login, logout,selectUser } from "./store/auth-slice";
import { fetchNotes } from "./store/note-slice";
import Kanban from "./components/kanban/index";
import Auth from "./components/auth/index";
function App() {
  const dispatch = useDispatch();
  const userInfo = useSelector(selectUser);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        const userInfo = {
          uid: user.uid,
          displayName: user.displayName,
          email: user.email,
        };

        dispatch(login(userInfo));
        // dispatch(fetchNotes(userInfo.uid));
      } else {
        dispatch(logout());
      }
    });
  }, []);
  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 1000);
    return () => clearTimeout(timer);
  }, []);
  return (
    <div className="app">
        {!loading && (userInfo ? <Kanban /> : <Auth />)}
    </div>
  );
}

export default App;
