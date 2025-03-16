import React, {useState} from "react"; 
import "../assets/signup.css";
import { Link } from "react-router-dom";
import SignupComplete from "./signupComplete";
import Login from "./Login";

function Signup() { // 컴포넌트 이름은 꼭 대문자로
    const [id, setId] = useState(''); // 정상 상태의 데이터들을 저장함
    const [password, setPassword] = useState('');
    const [confirm, setConfirm] = useState('');
    const [nickname, setNickname] = useState('');

    const [idError, setIdError] = useState(''); // 잘못입력한 데이터들을 저장함
    const [passwordError, setPasswordError] = useState('');
    const [confirmError, setConfirmError] = useState('');

    const [isIdCheck, setIsIdCheck] = useState(false);
    const [isIdAvailable, setIsIdAvailable] = useState(false);
    
    // 비밀번호 정규식
    const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*])[A-Za-z\d!@#$%^&*]{8,16}$/;

    const handlePasswordChange = (e) => {
        const value = e.target.value;
        setPassword(value);

        if (!passwordRegex.test(value)) {
            setPasswordError("비밀번호는 8~16자리, 대소문자, 숫자, 특수문자 포함하지?");
        } else {
            setPasswordError("");
        }
    };

    // 비밀번호 확인체크
    const handleConfirmChange = (e) => {
        const value = e.target.value;
        setConfirm(value);
        setConfirmError(value !== password ? "비밀번호가 일치하지 않습니다" : "");
    };

    return( // return 꼭
        <div className="signupComponents"> 
            <h1 className="submit-title">회원가입</h1> 
            <div>
                {/* 아이디 입력 */}
            <div className="id-box">
                <input type="text" placeholder="아이디를 입력해주세요"required/>
            </div>
                {/* 비밀번호 입력 */}
            <div className="password-box2">
                <input type="password"
                placeholder="비밀번호를 입력해주세요"
                value={password}
                onChange={handlePasswordChange}
                required/>
                {passwordError && <p style={{ color: "red" }}>{passwordError}</p>}
            </div>
                {/* 비밀번호 확인 */}
            <div className="password-again-box">
                <input type="password"
                placeholder="비밀번호를 다시 입력해주세요"
                value={confirm}
                onChange={handleConfirmChange}
                required/>
            </div>
            <div className="nickname">
                <input type="text" placeholder="닉네임을 입력해주세요" required/>
            </div>

            <div className="button-container">
                <Link to="/signupComplete">
                <button className="submit-button">
                    가입</button>
                </Link>  
                <Link to="/login">
                <button className="reset-button">
                    취소</button>
                </Link>
            </div>
            
                            
            
        </div>
        </div>
    );
}

export default Signup;