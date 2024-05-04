import React, { useState } from "react";
import emailjs from "@emailjs/browser";
import { useNavigate } from "react-router-dom";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "../firebase";


export default function SignUpForm() {
  const navigate = useNavigate();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [phone, setPhone] = useState("");

  //Sending Email

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await createUserWithEmailAndPassword(auth, email, password);
      navigate("/SignInForm");
      console.log("Account Successfully Created");
    } catch {
      console.log("Sorry, something went wrong. Please try again.");
    }

    const serviceId = "service_er49brg";
    const templateId = "template_wqmjn78";
    const publicKey = "gpoRMpYBn1tyNN7kH";

    const templateParams = {
      from_name: name,
      from_email: email,
      to_name: name,
      user_password: password,
      phone: phone,
    };

    emailjs
      .send(serviceId, templateId, templateParams, publicKey)
      .then((response) => {
        console.log("Email Sent Successfully", response);
        navigate("/SignInForm");
        setName("");
        setEmail("");
        setPassword("");
        setPhone("");
      })
      .catch((error) => {
        console.error("Error Sending email : ", error);
      });
  };
  return (
    <div>
      <form className="signupfom  d-flex flex-column" >
        <div>
        <label>Name : </label>
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          style={{height:"30px", width:"200px"}}
        />
        </div>
        <br />
        <div>
        <label>Email : </label>
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          style={{height:"30px", width:"200px"}}
        />
        </div>
        <br />
        <div>
        <label>Password :  </label>
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          style={{height:"30px", width:"200px"}}
        />
        </div>
        <br />
        <div className="d-flex justify-content-center">
        <label>Phone : </label>
        <input
          type="phone"
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
          style={{height:"30px", width:"200px"}}
        />
        </div>
        <br />
        <div>
        <button className="btn border" type="submit" onClick={(e) => handleSubmit(e)}>
          Send Email
        </button>
        </div>
        <br />
      </form>
      
    </div>
  );
}
