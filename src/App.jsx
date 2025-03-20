import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Login from "./components/Login";
import Signup from "./components/signup";
import SignupComplete from "./components/signupComplete";
import ViewPost from "./blog/viewpost";
import Blogmainnotpost from "./blog/blogmain";
import Blogfriendlist from "./blog/blogfriendlist";
import Blogpostlist from "./blog/blogpostlist";
import BlogpostOlist from "./blog/blogpostOlist";
import BlogpostXlist from "./blog/blogpostXlist";
import Blogpostwrite from "./blog/blogpostwrite";
import Profileedit from "./blog/profileedit";
import "./App.css";
import Blogmain from "./blog/blogmain";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/signupcomplete" element={<SignupComplete />} />
        <Route path="/blogmain" element={<Blogmain />} />
        <Route path="/blogmainnotpost" element={<Blogmainnotpost />} />
        <Route path="/blogfriendlist" element={<Blogfriendlist />} />
        <Route path="/blogpostlist" element={<Blogpostlist />} />
        <Route path="/blogpostOlist" element={<BlogpostOlist />} />
        <Route path="/blogpostXlist" element={<BlogpostXlist />} />
        <Route path="/blogpostwrite" element={<Blogpostwrite />} />
        <Route path="/profileedit" element={<Profileedit />} />
      </Routes>
    </Router>
  );
}

export default App;
