import React, { useState, useEffect } from "react";
import "../assets/blogmain.css";
import { fetchPost, deletePost } from "../api";
import Blogpostwrite from "./blogpostwrite";

function ViewPost({ postId, setSelectedPost, refreshPosts }) {
  const [post, setPost] = useState(null);
  const [editMode, setEditMode] = useState(false);

  useEffect(() => {
    const loadPost = async () => {
      try {
        const data = await fetchPost(postId);
        setPost(data);
      } catch (error) {
        console.error("게시글 불러오기 실패:", error);
      }
    };
    loadPost();
  }, [postId]);

  const handleExitBtn = () => {
    setSelectedPost(null);
  };

  const handleEdit = () => {
    setEditMode(true);
  };

  const handleDelete = async () => {
    const userId = parseInt(localStorage.getItem("userId"), 10);
    try {
      await deletePost(postId, userId);
      alert("삭제되었습니다.");
      refreshPosts();
      setSelectedPost(null);
    } catch (error) {
      console.error("삭제 실패:", error);
      alert("삭제 실패");
    }
  };

  if (!post) return null;

  if (editMode) {
    return (
      <Blogpostwrite
        isEdit={true}
        originalPost={post}
        onComplete={() => {
          setEditMode(false);
          setSelectedPost(null);
          refreshPosts(); // 수정 완료 후 목록 갱신
        }}
      />
    );
  }

  const formatPostTime = (postTime) => {
    const date = new Date(postTime);
    return date.toLocaleDateString("ko-KR", {
      year: "numeric",
      month: "2-digit",
      day: "2-digit",
      weekday: "short",
    });
  };

  return (
    <div className="viewpostwrapper">
      <div className="bottom">
        <h1 className="posts">{post.title}</h1>
        <h4 className="content-ifo">
          작성자 : {post.name || "익명"} | 작성 시간 :{" "}
          {formatPostTime(post.postTime)}
        </h4>

        <div className="row">
          <div className="postEdit" onClick={handleEdit}>
            수정
          </div>
          <div className="postremove" onClick={handleDelete}>
            삭제
          </div>
        </div>

        <p className="content">{post.content}</p>
      </div>
      <button className="exitbtn" onClick={handleExitBtn}>
        나가기
      </button>
    </div>
  );
}

export default ViewPost;
