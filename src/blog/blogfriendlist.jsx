import React, { useState, useEffect } from "react";
import "../assets/blogfriendlist.css";
import Login from "../components/Login";
import { Link } from "react-router-dom";
import { fetchPostList, fetchUsers } from "../api"; // API 호출
import axios from "axios";

import TopMenu from "../components/TopMenu";
import MyInfo from "../components/MyInfo";

function Blogfriendlist() {
  const [users, setUsers] = useState([]);
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const loadUsers = async () => {
      try {
        const data = await fetchUsers();
        console.log("유저목록확인", data);
        setUsers(data);
      } catch (error) {
        console.error("유저 목록 불러오기 실패:", error);
      }
    };
    loadUsers();
  }, []);

  useEffect(() => {
    const loadPosts = async () => {
      try {
        const allPosts = await fetchPostList();

        const userId = parseInt(localStorage.getItem("userId"), 10);
        console.log("현재 로그인한 userId:", userId);

        // const allPosts = Array.isArray(response.data) ? response.data : [];

        // 사용자의 게시물만 필터링하는 코드
        const myPosts = allPosts.filter((post) => post.userId === userId);
        setPosts(myPosts);
        // 응답 데이터가 배열인지 확인하고 저장~
        // setPosts(Array.isArray(response.data) ? response.data : []);
      } catch (error) {
        console.log("게시글 불러오기 실패", error);
        setPosts([]); // 실패시 빈 배열로 저장
      }
    };
    loadPosts();
  }, []);

  return (
    <div className="blogMainfriendlist">
      {/* 왼쪽*/}
      <div className="left">
        <MyInfo />
        <div className="bottom">
          <h1 className="myPost">내 게시물</h1>
          <div className="myPosts">
            {posts
              .slice()
              .reverse()
              .map((post) => (
                <div key={post.postId} className="postItem">
                  {post.title}
                </div>
              ))}
          </div>
        </div>
      </div>

      {/* 오른쪽 */}
      <div className="right">
        <TopMenu />
        <div className="friends-container">
          {users
            .slice()
            .reverse()
            .map((user, index) => {
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
