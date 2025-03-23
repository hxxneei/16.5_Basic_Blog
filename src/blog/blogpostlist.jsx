import React, { useState, useEffect } from "react";
import { fetchPost, fetchPostList, fetchUsers } from "../api";
import { useNavigate } from "react-router-dom";
import "../assets/blogpostlist.css";
import TopMenu from "../components/TopMenu";
import ViewPost from "./viewpost";

function Blogpostlist() {
  const [posts, setPosts] = useState([]);
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [selectedPost, setSelectedPost] = useState(null);
  const navigate = useNavigate();

  const handleMainBtn = () => {
    navigate("/blogmain");
  };

  const handleClickPostTitle = (postId) => {
    setSelectedPost(postId);
  };

  useEffect(() => {
    const loadPosts = async () => {
      try {
        const data = await fetchPostList();

        const postsWithName = await Promise.all(
          data.map(async (post) => {
            try {
              const detailedPost = await fetchPost(post.postId);
              return { ...post, name: detailedPost.name };
            } catch (error) {
              console.error("이름 불러오기 실패:", error);
              return post;
            }
          })
        );

        setPosts(postsWithName);
      } catch (error) {
        console.error("게시글 불러오기 실패:", error);
      } finally {
        setLoading(false);
      }
    };

    const loadUsers = async () => {
      try {
        const data = await fetchUsers();
        setUsers(data);
      } catch (error) {
        console.error("유저 목록 불러오기 실패:", error);
      }
    };

    loadPosts();
    loadUsers();
  }, []);

  return (
    <div className="blogpostlist">
      {/* 왼쪽 */}
      <div className="listleft">
        <div className="listtop">
          <div className="friendslist">
            Friends
            <br /> List
          </div>
          <div className="friends-container">
            {users.map((user, index) => (
              <div key={index} className="profile">
                <div className="circle"></div>
                <div className="name">{user.name}</div>
              </div>
            ))}
          </div>
          <button
            onClick={handleMainBtn}
            style={{ display: "block", marginBottom: "20px" }}
          >
            메인화면
          </button>
        </div>
      </div>

      {/* 오른쪽 */}
      <div className="listright">
        <div className="TopMenuWrapper">
          <TopMenu />
        </div>

        <div className="listbottom">
          {selectedPost ? (
            <ViewPost postId={selectedPost} setSelectedPost={setSelectedPost} />
          ) : loading ? (
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
                        onClick={() => handleClickPostTitle(post.postId)}
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
                  <div className="post">{post.content.substring(0, 50)}...</div>
                </div>
              ))
          )}
        </div>
      </div>
    </div>
  );
}

export default Blogpostlist;
