import React, { useState, useEffect } from "react";
import "../assets/blogfriendlist.css";
import Login from "../components/Login";
import { Link } from "react-router-dom";
import { fetchUsers } from "../api"; // API 호출 함수 import

import TopMenu from "../components/TopMenu";
import MyInfo from "../components/MyInfo";

function Blogfriendlist() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    const loadUsers = async () => {
      try {
        const data = await fetchUsers();
        console.log(data);
        setUsers(data);
      } catch (error) {
        console.error("유저 목록 불러오기 실패:", error);
      }
    };
    loadUsers();
  }, []);

  return (
    <div className="blogMainfriendlist">
      {/* 왼쪽바 */}
      <div className="left">
        <MyInfo />
        <div className="bottom">
          <h1 className="myPost">내 게시물</h1>
          <div className="myPosts">
            <div className="post1">게시글1</div>
            <div>게시글2</div>
            <div>게시글3</div>
            <div>게시글4</div>
            <div>게시글5</div>
            <div>게시글6</div>
          </div>
        </div>
      </div>

      {/* 오른쪽 바 */}
      <div className="right">
        <TopMenu />
        <div className="friends-container">
          {users.map((user, index) => {
            return (
              <div key={index} className="profile">
                <div className="human">
                  <div className="circle"></div>
                  <div className="name">{user.name}</div>
                </div>
                <div className="line" />
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
export default Blogfriendlist;
