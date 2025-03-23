import React, { useEffect, useState, useCallback } from "react";
import { useNavigate } from "react-router-dom";
import "../assets/blogmainnotpost.css";

import Blogpostwrite from "./blogpostwrite";
import TopMenu from "../components/TopMenu";
import MyInfo from "../components/MyInfo";
import { fetchPostList } from "../api";
import ViewPost from "./viewpost";

function Blogmain() {
  const [isWrite, setIsWrite] = useState(false);
  const [myPosts, setMyPosts] = useState([]);
  const [selectedPost, setSelectedPost] = useState(null);
  const navigate = useNavigate();
  const userId = parseInt(localStorage.getItem("userId"), 10);

  const loadMyPosts = useCallback(async () => {
    try {
      const allPosts = await fetchPostList();
      const filtered = allPosts.filter(
        (post) => parseInt(post.userId) === userId
      );
      console.log(" 내 게시글만:", filtered);
      setMyPosts(filtered);
    } catch (error) {
      console.error("내 게시물 불러오기 실패", error);
      setMyPosts([]);
    }
  }, [userId]);

  useEffect(() => {
    if (!userId || isNaN(userId)) {
      console.error(" 유효하지 않은 userId, 로그인 필요");
      alert("로그인이 만료되었습니다. 다시 로그인 해주세요.");
      navigate("/login");
      return;
    }
    loadMyPosts();
  }, [loadMyPosts, navigate, userId]);

  const handleClickPost = (postId) => {
    setSelectedPost(postId);
  };

  return (
    <div className="blogMainnotpost">
      <div className="left">
        <MyInfo />
        <div className="bottom">
          <h1 className="myPost">내 게시물</h1>
          <div className="myPosts">
            {myPosts.length === 0 ? (
              <div className="leftnotpost">불러올 글이 없습니다!</div>
            ) : (
              myPosts
                .slice()
                .reverse()
                .map((post) => (
                  <div
                    key={post.postId}
                    className="postItem"
                    onClick={() => handleClickPost(post.postId)}
                  >
                    {post.title}
                  </div>
                ))
            )}
          </div>
        </div>
      </div>

      <div className="right">
        <TopMenu />
        <div className="bottom">
          {selectedPost ? (
            <ViewPost
              postId={selectedPost}
              setSelectedPost={setSelectedPost}
              setMyPosts={setMyPosts}
              refreshPosts={loadMyPosts}
            />
          ) : !isWrite ? (
            <>
              <div className="notpost">불러올 글이 없습니다!</div>
              <button className="newpost" onClick={() => setIsWrite(true)}>
                새로운 글 작성하기
              </button>
            </>
          ) : (
            <Blogpostwrite
              onComplete={() => {
                setIsWrite(false);
                loadMyPosts();
              }}
            />
          )}
        </div>
      </div>
    </div>
  );
}

export default Blogmain;
