import React from "react";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import Project from "./components/pages/Project";
import Chat from "./components/pages/Chat";
import Home from "./components/pages/Home";
import CalendarComponent from "./components/UI/organisms/CalendarComponent";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/project/:projectid" element={<Project />} />
        <Route exact path="/chat/:userid" element={<Chat />} />
        <Route exact path="/calender" element={<CalendarComponent />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
