import React, { useState } from 'react';
import { InputBox } from '../components/InputBox';
import { useNavigate } from "react-router-dom";


export const Login = () => {
  const [userName, setUserName] = useState();
  const [password, setPassword] = useState();
  const [error, setError] = useState();
  const navigate = useNavigate();

  function loginhandle(e) {
    e.preventDefault();
    if(userName === "AmarLab" && password === "123456"){
      navigate("/home")
    }else{
      setError("Faild to login")
    }

    
  }

  return (
      <div className=" fixed top-0 flex flex-col justify-center items-center left-0 w-full h-full bg-white">
        <form onSubmit={loginhandle} className=" shadow-lg py-8 px-5 border border-slate-100 rounded-lg w-96">
            <InputBox
               labelText="User Name"
               name="userName"
               type="text"
               onChange={(e) => setUserName(e.target.value)}
               placeholder="Enter Username"/>
            <InputBox
               labelText="Password"
               name="password"
               type="text"
               onChange={(e) => setPassword(e.target.value)}
               placeholder="Enter Password"/>
              <button className="border border-blue-400 bg-blue-400 text-white hover:bg-blue-600 hover:border-blue-600 w-full mt-3 py-2 px-2 rounded-lg uppercase font-sm font-bold">
                      Submit
              </button>
              {error && <p className="mt-4 text-center text-red-300">{error}</p> }
              
              <p className=" flex flex-col mt-4 text-center text-green-700">
                Credentials
                <span>Username: AmarLab </span>
                <span>password: 123456</span>
              </p>
              
        </form>
      </div>
  );
};
