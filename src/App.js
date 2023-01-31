import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import { getRooms, getUsers } from "./actions";
import Project from "./components/pages/Project";
import Chat from "./components/pages/Chat";
import SignIn from "./components/UI/organisms/SignIn";
import SignUp from "./components/UI/organisms/SignUp";
import ResetPassword from "./components/UI/organisms/ResetPassword";
import NewPassword from "./components/UI/organisms/NewPassword";
import Home from "./components/pages/Home";
import CalendarComponent from "./components/UI/organisms/CalendarComponent";

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getUsers());
    dispatch(getRooms());
  }, [dispatch]);

  return (
    <BrowserRouter>
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/project/:projectid" element={<Project />} />
        <Route exact path="/chat/:userid" element={<Chat />} />
        <Route exact path="/signin" element={<SignIn />} />
        <Route exact path="/signup" element={<SignUp />} />
        <Route exact path="/resetpassword" element={<ResetPassword />} />
        <Route exact path="/createpassword" element={<NewPassword />} />
        <Route exact path="/calender" element={<CalendarComponent />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
