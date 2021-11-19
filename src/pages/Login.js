import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { login, logout } from "../redux/actions/login";

export default function Login() {
  // state redux
  const loginState = useSelector((state) => state.login);
  const dispatch = useDispatch();

  // TODO : login function
  const handleLogin = () => {
    dispatch(login());
    console.log(loginState);
  };

  //   TODO : Logout function
  /**
   * you can use this function in other components
   */
  const handleLogout = () => {
    dispatch(logout());
  };
  return (
    <div>
      <p>Login</p>
      <p>{JSON.stringify(loginState.login)}</p>
      <button onClick={() => handleLogin()}>Login</button>
      <button onClick={() => handleLogout()}>Logout</button>
    </div>
  );
}
