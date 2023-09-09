import { login_post } from "../authController/authController";
import { useRef, useState } from "react";

function Login() {
  const emailError = useRef(null);
  const passwordError = useRef(null);

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const loginHandler = (email, password) => {
    login_post(email, password);
  };
  return (
    <div className="flex justify-center items-center  bg-black">
      <div
        className="flex flex-col gap-3 w-80 p-5 border rounded-xl border-blue-500 
      max-sm:w-60
      "
      >
        <input
          type="email"
          placeholder="email"
          className="outline-none px-2 py-1 rounded-md"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <div className="text-red-500 text-sm" ref={emailError}></div>
        <input
          type="password"
          placeholder="password"
          className="outline-none px-2 py-1 rounded-md"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <div className="text-red-500 text-sm" ref={passwordError}></div>
        <button
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
          onClick={() => loginHandler(email, password)}
        >
          Login
        </button>
      </div>
    </div>
  );
}

export default Login;
