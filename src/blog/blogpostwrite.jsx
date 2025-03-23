import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { writepost, updatePost } from "../api";
import "../assets/blogpostwrite.css";

function Blogpostwrite({
  isEdit = false,
  originalPost = {},
  onComplete = () => {},
  refreshPosts = () => {},
}) {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [featured, setFeatured] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    if (isEdit && originalPost) {
      setTitle(originalPost.title || "");
      setContent(originalPost.content || "");
      setFeatured(originalPost.featured || false);
    }
  }, [isEdit, originalPost]);

  const handleSubmit = async () => {
    if (!title || !content) {
      alert("제목과 본문을 입력해주세요.");
      return;
    }

    const rawUserId = localStorage.getItem("userId");
    const userId = parseInt(rawUserId, 10);

    if (!userId || isNaN(userId)) {
      alert("로그인이 필요합니다. userId가 유효하지 않습니다.");
      console.error("userId 확인 실패:", rawUserId);
      return;
    }

    const postData = {
      title,
      content,
      featured,
      postTime: new Date().toISOString(),
    };

    try {
      if (isEdit) {
        const res = await updatePost(originalPost.postId, userId, postData);
        console.log(" 게시글 수정 성공:", res);
        alert("게시글이 수정되었습니다.");
      } else {
        const res = await writepost(userId, postData);
        console.log(" 게시글 작성 성공:", res);
        alert("게시글이 등록되었습니다.");
        navigate("/blogpostlist");
      }

      refreshPosts();
      onComplete();
    } catch (error) {
      console.error(" 게시글 처리 실패");
      console.error("Status:", error.response?.status);
      console.error("Message:", error.response?.data?.message);
      alert("게시글 처리에 실패했습니다.");
    }
  };

  return (
    <div className="Blogpostwrite">
      <div className="writecontainer">
        <input
          type="text"
          placeholder="제목을 입력하세요."
          className="write-title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />

        <textarea
          placeholder="내용을 입력하세요."
          className="write-content"
          value={content}
          onChange={(e) => setContent(e.target.value)}
        />

        <div className="write-bottom">
          <div className="write-checkbox">
            <input
              type="checkbox"
              id="mainPost"
              checked={featured}
              onChange={() => setFeatured(!featured)}
            />
            <label htmlFor="mainPost">대표 글로 설정하기</label>
          </div>

          <div className="write-buttons">
            <button className="btn-post" onClick={handleSubmit}>
              {isEdit ? "수정 완료" : "게시"}
            </button>
            <button className="btn-cancel" onClick={() => onComplete()}>
              취소
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Blogpostwrite;
