import React, { useState } from "react"; 
import "../assets/signup.css";
import { Link, useNavigate } from "react-router-dom";
import { registerUser } from "../api"; //  회원가입 API 추가

function Signup() { 
    const [loginId, setLoginId] = useState(''); 
    const [password, setPassword] = useState('');
    const [confirm, setConfirm] = useState('');
    const [nickname, setNickname] = useState('');

    const [passwordError, setPasswordError] = useState('');
    const [confirmError, setConfirmError] = useState('');
    const [signupError, setSignupError] = useState(''); //  서버 응답 에러 저장

    const navigate = useNavigate();

    // 비밀번호 정규식
    const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*])[A-Za-z\d!@#$%^&*]{8,16}$/;

    const handlePasswordChange = (e) => {
        const value = e.target.value;
        setPassword(value);
        if(!passwordRegex.test(value)){
            setPasswordError("비밀번호는 8~16자리, 대소문자, 숫자, 특수문자 포함해야 합니다.");
        }else{
            setPasswordError("");

        }
        // setPasswordError(!passwordRegex.test(value) ? "비밀번호는 8~16자리, 대소문자, 숫자, 특수문자 포함해야 합니다." : "");
    };

    const handleConfirmChange = (e) => {
        const value = e.target.value;
        setConfirm(value);
        setConfirmError(value !== password ? "비밀번호가 일치하지 않습니다." : "");
    };

    //  회원가입 API 요청
    const handleSignup = async (e) => {
        e.preventDefault();

        if (password !== confirm) {
            setConfirmError("비밀번호가 일치하지 않습니다.");
            return;
        }
        if(passwordError!=""){
            alert("비밀번호 형식을확인해주세요");
            return;
        }

        try {
            const response = await registerUser(loginId, password, nickname);
            console.log("회원가입 성공:", response);

            alert("회원가입 성공! 로그인 페이지로 이동합니다.");
            navigate("/signupComplete"); //  회원가입 완료 페이지로 이동
        } catch (error) {
            console.error("회원가입 실패:", error.response?.data?.message || "서버 오류");
            setSignupError(error.response?.data?.message || "회원가입 실패! 다시 시도해주세요.");
        }
    };

    return (
        <div className="signupComponents"> 
            <h1 className="submit-title">회원가입</h1> 
            <form onSubmit={handleSignup}>
                {/* 아이디 입력 */}
                <div className="id-box">
                    <input 
                        type="text" 
                        placeholder="아이디를 입력해주세요"
                        value={loginId}
                        onChange={(e) => setLoginId(e.target.value)}
                        required
                    />
                </div>

                {/* 비밀번호 입력 */}
                <div className="password-box2">
                    <input 
                        type="password"
                        placeholder="비밀번호를 입력해주세요"
                        value={password}
                        onChange={handlePasswordChange}
                        required
                    />
                    {passwordError && <p style={{ color: "red" }}>{passwordError}</p>}
                </div>

                {/* 비밀번호 확인 */}
                <div className="password-again-box">
                    <input 
                        type="password"
                        placeholder="비밀번호를 다시 입력해주세요"
                        value={confirm}
                        onChange={handleConfirmChange}
                        required
                    />
                    {confirmError && <p style={{ color: "red" }}>{confirmError}</p>}
                </div>

                {/* 닉네임 입력 */}
                <div className="nickname">
                    <input 
                        type="text" 
                        placeholder="닉네임을 입력해주세요" 
                        value={nickname}
                        onChange={(e) => setNickname(e.target.value)}
                        required
                    />
                </div>

                {/* 에러 메시지 */}
                {signupError && <p style={{ color: "red", textAlign: "center" }}>{signupError}</p>}

                {/* 버튼 */}
                <div className="button-container">
                    <button type="submit" className="submit-button">가입</button>
                    <Link to="/login">
                        <button type="button" className="reset-button">취소</button>
                    </Link>
                </div>
            </form>
        </div>
    );
}

export default Signup;
