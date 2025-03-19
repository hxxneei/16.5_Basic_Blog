import React, { useState } from "react";
import "../assets/global.css";
import "../assets/profileedit.css";

function ProfileEdit() {
  // 사용자 정보 상태
  const [nickName, setNickName] = useState("닉네임");
  const [name, setName] = useState("홍길동");
  const [address, setAddress] = useState("인천광역시 연수구 연수동");
  const [birthDate, setBirthDate] = useState("2001년 04월 20일");
  const [phoneNumber, setPhoneNumber] = useState("010-1234-5678");
  const [introduction, setIntroduction] = useState("");

  // 데이터 저장
  const handleSubmit = () => {
    const profileData = { nickName, name, address, birthDate, phoneNumber, introduction };
    console.log("저장할 데이터:", profileData);
  };

  return (
    <div className="profileedit">
        <div className="profile-header">
            <div className="profile-circle"></div>
            <p className="nickname">{nickName}</p>
        </div>
        <div className="image-edit">프로필 사진 수정하기</div>

        {/* 좌우 프로필  */}
        <div className="all-profile">
            {/* 왼쪽 */}
            <div className="left-profile">
                <div className="profile-info">
                    <div className="info-item">
                        <label>이름</label>
                        <span className="separator">|</span>
                        <div className="info-value">{name}</div>
                    </div>
                    <div className="info-item">
                        <label>거주지</label>
                        <span className="separator">|</span>
                        <div className="info-value">{address}</div>
                    </div>
                    <div className="info-item">
                        <label>생년월일</label>
                        <span className="separator">|</span>
                        <div className="info-value">{birthDate}</div>
                    </div>
                    <div className="info-item">
                        <label>전화번호</label>
                        <span className="separator">|</span>
                        <div className="info-value">{phoneNumber}</div>
                    </div>
                </div>
            </div>

            {/* 오른쪽 */}
            <div className="right-profile">
                <div className="intro-box">
                    <label>자기소개</label>
                    <textarea
                    value={introduction}
                    onChange={(e) => setIntroduction(e.target.value)}
                    placeholder="자기소개를 입력해 주세요..."
                    />
                </div>
            </div>
        </div>

        {/* 버튼 */}
        <div className="buttons">
            <button onClick={handleSubmit}>적용</button>
            <button>취소</button>
        </div>
    </div>
  );
}

export default ProfileEdit;
