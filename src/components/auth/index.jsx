import { useState } from "react";
import { useDispatch } from "react-redux";
import Register from "./register";
import Login from "./login";
import "react-toastify/dist/ReactToastify.css";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  updateProfile,
  auth,
} from "../../firebase.config";
import { login } from "../../store/auth-slice";
import { toast, ToastContainer } from "react-toastify";

export default function Auth() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
  const [displayLogin, setDisplayLogin] = useState(true);

  const dispatch = useDispatch();

  const notify = (err) => toast(err);

  function handleEmail(e) {
    setEmail(e.target.value);
  }
  function handlePassword(e) {
    setPassword(e.target.value);
  }
  function handleName(e) {
    setName(e.target.value);
  }

  async function loginToApp(e) {
    e.preventDefault();
    try {
      let userAuth = await signInWithEmailAndPassword(auth, email, password);
      let loginInfo = {
        email: userAuth.user.email,
        uid: userAuth.user.uid,
        displayName: userAuth.user.displayName,
      };
      dispatch(login(loginInfo));
    } catch (err) {
      console.log(err);
      if (err.status === 400) {
        notify("Create an account to login");
      } else {
        notify("Check your Email or password");
      }
    }
  }

  async function signUpToApp(e) {
    e.preventDefault();
    if (!name) {
      return notify("Please enter a full name");
    }
    try {
      const userAuth = await createUserWithEmailAndPassword(
        auth,
        email,
        password
      );
      await updateProfile(userAuth.user, {
        displayName: name,
      });

      let loginInfo = {
        email: userAuth.user.email,
        uid: userAuth.user.uid,
        displayName: name,
      };
      dispatch(login(loginInfo));
    } catch (err) {
      notify("Something went wrong, please try again");
      setDisplayLogin(true);
    }
  }

  return (
    <>
      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      />
      <div className="w-full lg:grid grid-cols-2 h-full relative">
        <div className="flex items-center justify-center lg:relative w-full absolute pointer-events-none">
          <img
            src="/auth.png"
            className="mx-auto lg:opacity-100 opacity-25 -z-10"
          />
        </div>
        <div className=" flex align-middle justify-center">
          <div className="lg:my-4 border lg:rounded-[65px] rounded-2xl border-[#1A3B583D] overflow-hidden lg:p-0 p-8 my-24">
            <div className="lg:mt-12 mt-4 lg:px-[60px] lg:mb-8">
              {displayLogin ? (
                <div className="lg:text-[26px] text-xl font-medium mr-3 outline-none">
                  Login
                </div>
              ) : (
                <div className="lg:text-[26px] text-xl font-medium ml-3 outline-none">
                  Sign up
                </div>
              )}
            </div>
            <div as="div" className="lg:mx-[112px]">
              <div className="border-t lg:pt-[37px] pt-4 lg:mt-0 mt-1 lg:pb-12">
                {displayLogin ? (
                  <Login
                    handleEmail={handleEmail}
                    handlePassword={handlePassword}
                    loginToApp={loginToApp}
                  />
                ) : (
                  <Register
                    handleName={handleName}
                    handleEmail={handleEmail}
                    handlePassword={handlePassword}
                    signUpToApp={signUpToApp}
                  />
                )}
              </div>
            </div>

            {displayLogin ? (
              <div className="pb-8 text-center w-full">
                Don't have an account?{" "}
                <span
                  className="text-green-600 hover:text-green-900 cursor-pointer"
                  onClick={() => setDisplayLogin(!displayLogin)}
                >
                  Register.
                </span>{" "}
              </div>
            ) : (
              <div className="pb-8 text-center w-full">
                {" "}
                Already have an account?{" "}
                <span
                  className="text-green-600 hover:text-green-900 cursor-pointer"
                  onClick={() => setDisplayLogin(!displayLogin)}
                >
                  Login.
                </span>
              </div>
            )}
          </div>
        </div>
      </div>
    </>
  );
}
