import { Tab } from "@headlessui/react";
import {
    createUserWithEmailAndPassword,
    signInWithEmailAndPassword,
    updateProfile,
    auth
} from "../../firebase.config";
import { login } from "../../store/auth-slice";
import { useDispatch } from "react-redux";
import { useState } from "react";
export default function Auth() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [name, setName] = useState('');
    const [profilePic, setProfilePic] = useState('');
    const dispatch = useDispatch();

    const loginToApp = (e) => {
        e.preventDefault();
        signInWithEmailAndPassword(auth, email, password)
            .then((userAuth) => {
                dispatch(
                    login({
                        email: userAuth.user.email,
                        uid: userAuth.user.uid,
                        displayName: userAuth.user.displayName,
                    }));
            }).catch((err) => {
                alert(err);
            });
    };

    const signUpToApp = () => {
        if (!name) {
            return alert('Please enter a full name');
        }
        createUserWithEmailAndPassword(auth, email, password)
            .then((userAuth) => {
                updateProfile(userAuth.user, {
                    displayName: name,
                }).then(dispatch(
                    login({
                        email: userAuth.user.email,
                        uid: userAuth.user.uid,
                        displayName: name,

                    })))
                    .catch((error) => {
                        console.log('user not updated');
                    });
            })
            .catch((err) => {
                alert(err);
            });
    };
    function handleEmail(e) {
        setEmail(e.target.value);
    }
    function handlePassword(e) {
        setPassword(e.target.value);
    }
    function handleName(e) {
        setName(e.target.value);
    }

    return (
        <div className="w-full grid grid-cols-2 h-full ">
            <div className="flex items-center justify-center">
                <img src="/auth.png" />
            </div>
            <div className=" flex align-middle justify-center">
                <div className="xl:my-32 my-12 border rounded-[65px] border-[#1A3B583D]">
                    <Tab.Group as="div" className="mt-[88px]">
                        <Tab.List as="div" className=" px-[60px] mb-12">
                            <Tab className="text-[26px] font-medium mr-3 outline-none">Login</Tab>
                            <Tab className="text-[26px] font-medium ml-3 outline-none">Sign up</Tab>
                        </Tab.List>
                        <Tab.Panels as="div" className="mx-[112px]">
                            <div className="border-t pt-[37px] pb-[108px]">

                                <Tab.Panel as="div" className="grid min-w-[314px]">

                                    <h1 className="text-[21px] font-medium">To Continue</h1>
                                    <p className="text-[#999999] text-[10px]">We need you name and email</p>
                                    <input type="email" required placeholder="Email" className="mt-8 py-4 px-5 outline-none rounded-xl border border-[#1A3B583D]" onChange={handleEmail} />
                                    <input type="password" required className="mt-8 py-4 px-5 outline-none rounded-xl border border-[#1A3B583D]" placeholder="Password" onChange={handlePassword} />
                                    <button className=" rounded-xl bg-[#329C89] w-full mt-[30px] py-[14px] font-bold text-white" onClick={loginToApp} >Login</button>
                                    <div className="mt-10 px-4">
                                        <input type="checkbox" name="remember" className=" checked:bg-[#329C89]" />
                                        <label htmlFor="remember" className="ml-2 text-[#1A3B589C]">Remember me</label>
                                    </div>
                                </Tab.Panel>
                                <Tab.Panel as="div" className="grid min-w-[314px]">
                                    <input type="text" required className="mt-8 py-4 px-5 outline-none rounded-xl border border-[#1A3B583D]" placeholder="Full Name" onChange={handleName} />
                                    <input required type="email" className="mt-8 py-4 px-5 outline-none rounded-xl border border-[#1A3B583D]" placeholder="Email" onChange={handleEmail} />
                                    <input required type="password" className="mt-8 py-4 px-5 outline-none rounded-xl border border-[#1A3B583D]" placeholder="Password" onChange={handlePassword} />
                                    <button className=" rounded-xl bg-[#329C89] w-full mt-[30px] py-[14px] font-bold text-white" onClick={signUpToApp}>Sign up</button>
                                    <div className="mt-10 px-4">
                                        <input required type="checkbox" name="remember" className=" checked:bg-[#329C89]" />
                                        <label htmlFor="remember" className="ml-2 text-[#1A3B589C]">Remember me</label>
                                    </div>
                                </Tab.Panel>
                            </div>
                        </Tab.Panels>
                    </Tab.Group>
                </div>
            </div>
        </div>
    )
}