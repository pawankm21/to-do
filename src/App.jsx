import { useEffect } from "react";
import "./App.css";
import Auth from "./components/auth";
import Kanban from "./components/kanban";
import { useSelector, useDispatch } from "react-redux";
import { login, logout } from "./store/auth-slice";
import { auth, onAuthStateChanged,doc,db,getNotes} from "./firebase.config";

/*
user:{
  notes:[
    {
      id:1,
      title:"title",
      note:"lorem ipsum",
      date:"date",
      status:"TO DO"| "IN PROGRESS" | "COMPLETED"
    }
  ]
  name:"name"
  email:"email"
  photo:"photo"
  password:"password"
}
 */
function App() {
  const user = useSelector((state) => state.auth.user);
  const dispatch = useDispatch();
  useEffect(() => {
    onAuthStateChanged(auth, (userAuth) => {
      if (userAuth) {
        const userData = {
          email: userAuth.email,
          uid: userAuth.uid,
          displayName: userAuth.displayName,
        };
        getNotes(userAuth.uid,dispatch,()=>{});
        dispatch(login(userData));
      } else {
        dispatch(logout());
      }
    });
  }, []);


  return <div className="app">{user ? <Kanban /> : <Auth />}</div>;
}

export default App;
