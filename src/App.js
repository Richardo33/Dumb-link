import Landing from "./pages/landing";
import Home from "./pages/template";
import Profile from "./pages/profile";
import Preview from "./pages/preview";
import CreateLink from "./pages/createLink";
import MyLink from "./pages/myLink";
import { UserContext } from "./context/userContext";
import React, { useContext, useEffect } from "react";
import { API, setAuthToken } from "./config/api";

import { Routes, Route, useNavigate } from "react-router-dom";

import "bootstrap/dist/css/bootstrap.min.css";

if (localStorage.token) {
  setAuthToken(localStorage.token);
}

function App() {
  const navigate = useNavigate();

  const [state, dispacth] = useContext(UserContext);
  // console.log(state);

  useEffect(() => {
    if (!localStorage.token) {
      navigate("/");
    }
    // if (state.isLogin) {
    //   navigate("/");
    // }
  }, [state]);

  const checkUser = async () => {
    try {
      const response = await API.get("/checkAuth");
      // console.log(response.data.data.user);
      if (response.status === 404) {
        return dispacth({
          type: "AUTH_ERROR",
        });
      }

      let payload = response.data.data.user;
      payload.token = localStorage.token;

      dispacth({
        type: "USER_SUCCESS",
        payload,
      });
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    checkUser();
  }, []);

  return (
    <Routes>
      <Route exact path="/" element={<Landing />} />
      <Route exact path="/home" element={<Home />} />
      <Route exact path="/profile" element={<Profile />} />
      <Route exact path="/:id" element={<Preview />} />
      <Route exact path="/createlink" element={<CreateLink />} />
      <Route exact path="/mylink" element={<MyLink />} />
    </Routes>
  );
}

export default App;
