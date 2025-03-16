import React from "react";
import "../assets/signupComplete.css";
import { Link } from "react-router-dom";
import Login from "./Login";

function SignupComplete () {
    return (
        <div className="signupcomplete">
            <h1 className="congratulate">축하합니다!</h1>
            <h1 className="new-signcomplete">신규 회원 가입이 
                <br />
                완료되었습니다.</h1>
            <Link to={"/login"}>
                <button className="login-btn">
                    로그인 하러 가기
                </button>
            </Link>
        </div>
        
    )
}
export default SignupComplete;