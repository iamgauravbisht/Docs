import { signup_post } from "../authController/authController";
import { useRef, useState } from "react";

// function getCookie(name) {
//   const cookies = document.cookie.split(";");

//   for (let i = 0; i < cookies.length; i++) {
//     const cookie = cookies[i].trim();

//     if (cookie.startsWith(name + "=")) {
//       return cookie.substring(name.length + 1);
//     }
//   }

//   return null;
// }

function Signup() {
  const usernameError = useRef();
  const emailError = useRef();
  const passwordError = useRef();
  const confirmPasswordError = useRef();

  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassowrd, setConfirmPassword] = useState("");

  const signupHandler = async (username, email, password) => {
    //clear all error messages
    emailError.current.textContent = "";
    passwordError.current.textContent = "";
    confirmPasswordError.current.textContent = "";

    if (confirmPasswordCheck()) {
      const data = await signup_post(username, email, password);
      if (data.errors) {
        console.log("data.errors", data.errors);
        // if there is an error, display the error message
        if (data.errors.password) {
          passwordError.current.textContent = data.errors.password;
        }
        if (data.errors.email) {
          emailError.current.textContent = data.errors.email;
        }
        if (data.errors.username) {
          usernameError.current.textContent = data.errors.username;
        }
      } else {
        // if the request is successful, display the data
        if (data) {
          console.log(data, "document.cookie", document.cookie);
          // Accessing and storing the authToken cookie
          // const authToken = getCookie("authToken");
          // console.log(authToken);
        }

        // clear the input fields if the user is successfully signed up
        setUsername("");
        setEmail("");
        setPassword("");
        setConfirmPassword("");
      }
    }
  };

  const confirmPasswordCheck = () => {
    if (password !== confirmPassowrd) {
      confirmPasswordError.current.textContent =
        "confirm password does not match";
      return false;
    } else {
      confirmPasswordError.current.textContent = "";
      return true;
    }
  };

  return (
    <div className="flex justify-center items-center bg-black">
      <div className="flex flex-col gap-3 w-80 p-5 border rounded-xl border-blue-500">
        <input
          type="text"
          placeholder="username"
          name="username"
          className="outline-none px-2 py-1 rounded-md"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
        <div className="text-red-500 text-sm" ref={usernameError}></div>
        <input
          type="email"
          placeholder="email"
          name="email"
          className="outline-none px-2 py-1 rounded-md"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <div className="text-red-500 text-sm" ref={emailError}></div>
        <input
          type="password"
          placeholder="password"
          name="password"
          className="outline-none px-2 py-1 rounded-md"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <div className="text-red-500 text-sm" ref={passwordError}></div>
        <input
          type="password"
          placeholder="confirm password"
          name="confirmPassword"
          className="outline-none px-2 py-1 rounded-md"
          value={confirmPassowrd}
          onChange={(e) => setConfirmPassword(e.target.value)}
        />
        <div className="text-red-500 text-sm" ref={confirmPasswordError}></div>
        <button
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
          onClick={() => signupHandler(username, email, password)}
        >
          Sign up
        </button>
      </div>
    </div>
  );
}

export default Signup;
