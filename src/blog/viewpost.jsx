import React, { useState, useEffect } from "react";
import "../assets/blogmain.css";
import Login from "../components/Login";
import { Link } from "react-router-dom";
import { fetchPost } from "../api.js";

function ViewPost({ postId, setSelectedPost }) {
  const [post, setPost] = useState([]);

  useEffect(() => {
    const loadPost = async () => {
      try {
        const data = await fetchPost(postId); // API 호출
        setPost(data); // 상태 업데이트
      } catch (error) {
        console.error("게시글 불러오기 실패:", error);
      } finally {
        setLoading(false); // 로딩 상태 해제
      }
    };

    loadPost();
  }, []);

  const handleExitBtn = () => {
    setSelectedPost(null);
  };

  function formatPostTime(postTime) {
    const date = new Date(postTime);
    const options = {
      year: "numeric",
      month: "2-digit",
      day: "2-digit",
      weekday: "short",
    };
    return date
      .toLocaleDateString("ko-KR", options)
      .replace(".", " -")
      .replace(".", " -")
      .replace(".", "");
  }

  return (
    <div className="viewpostwrapper">
      <div className="bottom">
        <h1 className="posts">{post.title}</h1>
        <h4 className="content-ifo">
          작성자 : 닉네임| 작성 시간 : {formatPostTime(post.postTime)}
        </h4>

        <div className="row">
          <div className="postEdit">수정</div>
          <div className="postremove">삭제</div>
        </div>

        <p className="content">{post.content}</p>
      </div>
      <button className="exitbtn" onClick={handleExitBtn}>
        나가기
      </button>
    </div>
    // </div>
  );
}

export default ViewPost;
