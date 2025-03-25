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
import Blogmain from "./blog/blogmain";
import PrivateRoute from "./components/PrivateRoute";
import "./App.css";

function App() {
  return (
    <Router>
      <Routes>
        {/* 공개 경로 (로그인 전) */}
        <Route path="/" element={<Login />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/signupcomplete" element={<SignupComplete />} />

        {/* 로그인 이후 접근 가능한 보호 경로 */}
        <Route
          path="/blogmain"
          element={
            <PrivateRoute>
              <Blogmain />
            </PrivateRoute>
          }
        />
        <Route
          path="/blogmainnotpost"
          element={
            <PrivateRoute>
              <Blogmainnotpost />
            </PrivateRoute>
          }
        />
        <Route
          path="/blogfriendlist"
          element={
            <PrivateRoute>
              <Blogfriendlist />
            </PrivateRoute>
          }
        />
        <Route
          path="/blogpostlist"
          element={
            <PrivateRoute>
              <Blogpostlist />
            </PrivateRoute>
          }
        />
        <Route
          path="/blogpostOlist"
          element={
            <PrivateRoute>
              <BlogpostOlist />
            </PrivateRoute>
          }
        />
        <Route
          path="/blogpostXlist"
          element={
            <PrivateRoute>
              <BlogpostXlist />
            </PrivateRoute>
          }
        />
        <Route
          path="/blogpostwrite"
          element={
            <PrivateRoute>
              <Blogpostwrite />
            </PrivateRoute>
          }
        />
        <Route
          path="/profileedit"
          element={
            <PrivateRoute>
              <Profileedit />
            </PrivateRoute>
          }
        />
        <Route
          path="/viewpost/:postId"
          element={
            <PrivateRoute>
              <ViewPost />
            </PrivateRoute>
          }
        />
      </Routes>
    </Router>
  );
}

export default App;
