import Login from "./Login";
import Signup from "./Signup";
import { useState } from "react";
function Welcome() {
  const [showLogin, setShowLogin] = useState(false);
  const [showSignup, setShowSignup] = useState(false);

  const signupHandler = () => {
    setShowLogin(false);
    setShowSignup(!showSignup);
  };
  const loginHandler = () => {
    setShowSignup(false);
    setShowLogin(!showLogin);
  };

  return (
    <div
      className="w-screen h-screen flex justify-center gap-14 items-center  bg-black
    max-sm:flex-col
    "
    >
      <div className="flex  flex-col justify-center items-center">
        <h1 className="text-4xl font-bold text-blue-500 mb-10">Welcome</h1>
        <div className="flex gap-5">
          <button
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
            onClick={signupHandler}
          >
            Sign up
          </button>
          <button
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
            onClick={loginHandler}
          >
            Login
          </button>
        </div>
      </div>
      <div className=" ">
        {showLogin ? <Login /> : null}
        {showSignup ? <Signup /> : null}
      </div>
    </div>
  );
}

export default Welcome;
