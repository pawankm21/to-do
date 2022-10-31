import React from "react";
import Input from "./Input";
function Login({handleEmail,loginToApp}) {
  return (
    <div as="div" className="grid lg:min-w-[314px]">
      <h1 className="lg:text-[21px] font-medium text-lg">To Continue</h1>
      <p className="text-[#999999] text-[10px]">We need you name and email</p>
      <Input type="email" placeholder="Email" handler={handleEmail} />
      <Input type="password" placeholder="Password" handler={handleEmail} />
      <button
        className=" rounded-xl bg-[#329C89] w-full mt-[30px] py-[14px] font-bold text-white"
        onClick={loginToApp}
      >
        Login
      </button>
    </div>
  );
}

export default Login;
