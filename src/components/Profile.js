import { signOut } from "firebase/auth";
import React from "react";
import { auth } from "../firebase";
import { useNavigate } from "react-router-dom";

export default function Profile() {
  const navigate = useNavigate();
  const user = auth.currentUser;
 


  const logoutUser = async (e) => {
    e.preventDefault();

    try {
      await signOut(auth);
      navigate("/SignInForm");
      console.log("User Logged Out Successfully");
    } catch {
      console.log("Sorry, something went wrong. Please try again.");
    }
  };
  return (
    <>
      <div>Profile</div>
      <h1>Welcome {user.email}</h1><br/>
      
      <button className="btn border" onClick={(e) => logoutUser(e)}>LogOut</button>
    </>
  );
}