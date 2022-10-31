import React from "react";
import Input from "./Input";
function Register({ handleName, handleEmail, handlePassword, signUpToApp }) {
  return (
    <div className="grid lg:min-w-[314px]">
    <h1 className="lg:text-[21px] font-medium text-lg">To Continue</h1>
    <p className="text-[#999999] text-[10px]">We need you name and email</p>
      <Input type="text" placeholder="Full Name" handler={handleName} />
      <Input type="email" placeholder="Email" handler={handleEmail} />
      <Input type="password" placeholder="Password" handler={handlePassword} />
      <button
        className=" rounded-xl bg-[#329C89] w-full mt-[30px] py-[14px] font-bold text-white"
        type="submit"
        onClick={signUpToApp}
      >
        Sign up
      </button>
    </div>
  );
}

export default Register;
