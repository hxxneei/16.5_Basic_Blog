import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { loginUser } from "../api"; //  API 파일에서 loginUser 가져오기
import "../assets/Login.css"; 
import { FaUser, FaLock } from "react-icons/fa"; 

function Login() {
  const [loginId, setLoginId] = useState(""); //  loginId 상태값
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  //  로그인 API 요청
  const handleLogin = async (e) => {
    e.preventDefault(); 
    try {
      const response = await loginUser(loginId, password); //  API 호출
      console.log("로그인 성공:", response);

      alert(`로그인 성공! 환영합니다, ${response.name}님!`);
      navigate("/Blogmainnotpost"); //  로그인 성공 시 이동
    } catch (error) {
      console.error("로그인 실패:", error.response?.data?.message || "서버 오류");
      alert("로그인 실패: " + (error.response?.data?.message || "잘못된 ID 또는 비밀번호"));
    }
  };

  return (
    <div className="LoginComponent">
      <h1 className="title">오늘도</h1>
      <h1 className="title2">기록해볼까요?</h1>

      <form onSubmit={handleLogin}>
        <div className="input-box">
          <FaUser />
          <input 
            type="text" 
            placeholder="ID" 
            value={loginId} 
            onChange={(e) => setLoginId(e.target.value)} 
            required 
          />
        </div>

        <div className="password-box">
          <FaLock />
          <input 
            type="password" 
            placeholder="Password" 
            value={password} 
            onChange={(e) => setPassword(e.target.value)} 
            required 
          />
        </div>
        
        <button type="submit">LOGIN</button> {/* 🔥 API 요청 실행 */}
      </form>

      <div className="signup-text">
        <p>계정이 없으신가요?</p>
        <Link to="/signup">회원 가입하기</Link>
      </div>
    </div>
  );
}

export default Login;
