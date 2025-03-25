import React, { useState, useEffect } from "react";
import axios from "axios";
import "../assets/global.css";
import "../assets/profileedit.css";
import { Link } from "react-router-dom";

const API_BASE_URL = "https://dain-blog.inuappcenter.kr";

function ProfileEdit() {
  const [userData, setUserData] = useState({
    name: "",
    address: "",
    birthDate: "",
    phoneNumber: "",
    introduction: "",
  });

  const userId = parseInt(localStorage.getItem("userId"), 10);

  useEffect(() => {
    const fetchUserData = async () => {
      try {
        const response = await axios.get(`${API_BASE_URL}/api/users/${userId}`);
        console.log("불러온 사용자 데이터:", response.data);

        setUserData({
          name: response.data.name,
          address: response.data.location,
          birthDate: response.data.birth,
          phoneNumber: response.data.phone,
          introduction: response.data.introduction,
        });
      } catch (error) {
        console.error("사용자 정보 불러오기 실패:", error);
      }
    };

    if (userId) fetchUserData();
  }, [userId]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUserData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = async () => {
    try {
      const response = await axios.put(`${API_BASE_URL}/api/users/${userId}`, {
        name: userData.name,
        location: userData.address,
        birth: userData.birthDate,
        phone: userData.phoneNumber,
        introduction: userData.introduction,
      });

      console.log("프로필 저장 성공:", response.data);
      alert("프로필이 성공적으로 저장되었습니다!");

      localStorage.setItem("userId", response.data.userId);
      localStorage.setItem("name", response.data.name);
      if (response.data.userId) {
        localStorage.setItem("userId", response.data.userId);
      }

      window.location.href = "/blogmain";
    } catch (error) {
      console.error("프로필 저장 실패:", error);
      alert("프로필 저장 중 오류 발생!");
    }
  };

  return (
    <div className="profileedit">
      <div className="profile-header">
        <div className="profile-circle"></div>
        <p className="nickname">{userData.name || "닉네임 입력"}</p>
      </div>
      <div className="image-edit">프로필 사진 수정하기</div>

      <div className="all-profile">
        <div className="left-profile">
          <div className="profile-info">
            <div className="info-item">
              <label>이름</label>
              <span className="separator">|</span>
              <input
                type="text"
                name="name"
                value={userData.name}
                onChange={handleChange}
                placeholder="이름 입력"
              />
            </div>
            <div className="info-item">
              <label>거주지</label>
              <span className="separator">|</span>
              <input
                type="text"
                name="address"
                value={userData.address}
                onChange={handleChange}
                placeholder="거주지 입력"
              />
            </div>
            <div className="info-item">
              <label>생년월일</label>
              <span className="separator">|</span>
              <input
                type="date"
                name="birthDate"
                value={userData.birthDate}
                onChange={handleChange}
              />
            </div>
            <div className="info-item">
              <label>전화번호</label>
              <span className="separator">|</span>
              <input
                type="tel"
                name="phoneNumber"
                value={userData.phoneNumber}
                onChange={handleChange}
                placeholder="전화번호 입력"
              />
            </div>
          </div>
        </div>

        <div className="right-profile">
          <div className="intro-box">
            <label>자기소개</label>
            <textarea
              name="introduction"
              value={userData.introduction}
              onChange={handleChange}
              placeholder="자기소개를 입력해 주세요..."
            />
          </div>
        </div>
      </div>

      <div className="buttons">
        <Link to="/blogmain">
          <button onClick={handleSubmit}>적용</button>
        </Link>
        <Link to="/blogmain">
          <button onClick={() => window.location.reload()}>취소</button>
        </Link>
      </div>
    </div>
  );
}

export default ProfileEdit;
