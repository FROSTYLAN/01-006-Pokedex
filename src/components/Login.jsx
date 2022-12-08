import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import pokedex from "../images/pokedex.png";
import footerLogin from "../images/footer-login.png";

const Login = () => {
  const [userName, setUserName] = useState("");
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const submit = (e) => {
    e.preventDefault();
    dispatch({
      type: "GET_USERNAME",
      payload: userName,
    });
    setUserName("");
    navigate("/pokedex");
  };

  return (
    <div className="login grid">
      <section className="flex flex-col justify-end text-center">
        <div>
          <img className="w-2/4 m-auto" src={pokedex} alt="" />
        </div>
        <div>
          <h1 className="mt-8 text-4xl">Hello trainer!</h1>
          <p>GIve me your name name to start</p>
        </div>
      </section>

      <section className="flex justify-center items-center">
        <form action="" onSubmit={submit}>
          <input
            className="w-3/4"
            type="text"
            value={userName}
            onChange={(e) => setUserName(e.target.value)}
            placeholder="Your name..."
          />
          <button className="w-1/4">GO!</button>
        </form>
      </section>

      <section className="flex w-full items-end">
        <img className="w-full" src={footerLogin} alt="" />
      </section>
    </div>
  );
};

export default Login;
