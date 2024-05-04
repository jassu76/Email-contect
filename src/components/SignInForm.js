import { signInWithEmailAndPassword } from "firebase/auth";
import React, { useState } from "react";
import { auth } from "../firebase";
import { useNavigate } from "react-router-dom";

export default function SignInForm() {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const logInUser = async (e) => {
    e.preventDefault();

    try {
      await signInWithEmailAndPassword(auth, email, password);
      navigate("/Profile");
      console.log("User Logged In Successfully");
    } catch {
      console.log("You entered a wrong username or password.");
    }
  };
  return (
    <div>
      <form onSubmit={logInUser} className="signinform d-flex flex-column">
        <div>
        <label>Email : </label>
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          
        />
        </div>
        <br />
        <div>
        <label>Password : </label>
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        </div>
        <br />
        <div>
        <button  className="btn border" type="submit">Send Email</button>
        </div>
        <br />
      </form>
    </div>
  );
}
