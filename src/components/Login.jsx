import React from "react";
import { Link } from "react-router-dom";
import "../assets/Login.css"; 
import { FaUser, FaLock } from "react-icons/fa"; // 아이콘 라이브러리 사용

function Login() { 
  return (

    <div className="LoginComponent">
      <h1 className="title">오늘도</h1>
      <h1 className="title2">기록해볼까요?</h1>

      <div>
        <div className="input-box">
          <FaUser /> 
          <input type="text" placeholder="ID" required />
        </div>

        <div className="password-box">
          <FaLock /> 
          <input type="password" placeholder="Password" required />
        </div>
        
        <Link to="/Blogmainnotpost">
          <button type="submit">LOGIN</button>
        </Link>
      </div>

      <div className="signup-text">
        <p>계정이 없으신가요?</p>
        <Link to="/signup">회원 가입하기</Link>
      </div>
    </div>
  );
}

export default Login;


