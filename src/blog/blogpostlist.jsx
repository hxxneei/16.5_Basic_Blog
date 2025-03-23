import React, { useState, useEffect } from "react";
import { fetchPost, fetchPostList, fetchUsers } from "../api"; // API 호출 함수 import
import { Link, useNavigate } from "react-router-dom";
import "../assets/blogpostlist.css";
import TopMenu from "../components/TopMenu";

import ViewPost from "./viewpost";

function Blogpostlist() {
  const [posts, setPosts] = useState([]); // 게시글 목록 상태 관리
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true); // 로딩 상태
  const [selectedPost, setSelectedPost] = useState(null); //선택된 게시글 번호
  const navigate = useNavigate();

  const handlemainbtn = () => {
    navigate("/blogmain");
  };

  const handleClickPostTitle = (postId) => {
    setSelectedPost(postId);
  };

  useEffect(() => {
    const loadPosts = async () => {
      try {
        const data = await fetchPostList(); // API 호출

        const postsWithName = await Promise.all(
          data.map(async (post) => {
            try {
              const detailedPost = await fetchPost(post.postId); // ✅ 변수 이름 수정
              return { ...post, name: detailedPost.name };
            } catch (error) {
              console.error("이름 불러오기 실패~", error);
              return post;
            }
          })
        );

        setPosts(postsWithName);
      } catch (error) {
        console.error("게시글 불러오기 실패:", error);
      } finally {
        setLoading(false); // 로딩 상태 해제
      }
    };

    loadPosts();

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
    <div className="blogpostlist">
      {/* 왼쪽바 */}
      <div className="listleft">
        <div className="listtop">
          <div className="friendslist">
            Friends
            <br /> List
          </div>
          <div className="friends-container">
            {users.map((user, index) => {
              return (
                <div key={index} className="profile">
                  <div className="circle"></div>
                  <div className="name">{user.name}</div>
                </div>
              );
            })}
          </div>
          <button
            onClick={handlemainbtn}
            style={{
              display: "block",
              marginBottom: "20px",
            }}
          >
            메인화면
          </button>
        </div>
      </div>

      {/* 오른쪽 바 */}
      <div className="listright">
        <div className="TopMenuWrapper">
          <TopMenu />
        </div>

        {/* 게시글 목록 */}
        <div className="listbottom">
          {selectedPost ? (
            <ViewPost postId={selectedPost} setSelectedPost={setSelectedPost} />
          ) : (
            <>
              {loading ? (
                <p>게시글을 불러오는 중...</p>
              ) : posts.length === 0 ? (
                <p>게시글이 없습니다.</p>
              ) : (
                posts
                  .slice()
                  .reverse()
                  .map((post) => (
                    <div key={post.postId} className="profile">
                      <div className="profileheader">
                        <div className="left-info">
                          <div
                            className="postname"
                            onClick={() => {
                              handleClickPostTitle(post.postId);
                            }}
                          >
                            {post.title}
                          </div>
                          <div className="author">by {post.name || "익명"}</div>
                        </div>
                        <div className="date">
                          {new Date(post.postTime).toLocaleDateString("ko-KR", {
                            year: "numeric",
                            month: "long",
                            day: "numeric",
                          })}
                        </div>
                      </div>
                      <div className="post">
                        {post.content.substring(0, 50)}...
                      </div>
                    </div>
                  ))
              )}
            </>
          )}
        </div>
      </div>
    </div>
  );
}

export default Blogpostlist;
