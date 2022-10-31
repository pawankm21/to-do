import { useEffect } from "react";
import "./App.css";
import Auth from "./components/auth";
import Kanban from "./components/kanban";
import { useSelector, useDispatch } from "react-redux";
import { login, logout } from "./store/auth-slice";
import { auth, onAuthStateChanged, getDoc, db, doc } from "./firebase.config";

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
        dispatch(login(userData));
      } else {
        dispatch(logout());
      }
    });
  }, []);
  async function getNotesOnLogin() {
    const docRef = doc(db, "user");
    const docSnap = await getDoc(docRef);
    if (docSnap.exists()) {
      console.log("Document data", docSnap.data());
    } else {
      console.log("No such document!");
    }
  }
  useEffect(() => {
    // getNotesOnLogin();
  }, []);
  return <div className="app">{user ? <Kanban /> : <Auth />}</div>;
}

export default App;
