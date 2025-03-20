import React, { useState } from "react";
import { useNavigate } from "react-router-dom"; // 네비게이션을 위한 useNavigate 추가
import { writepost } from "../api"; // API 호출 함수 import
import "../assets/blogpostwrite.css";

function Blogpostwrite() {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [featured, setFeatured] = useState(false);
  const navigate = useNavigate(); // 페이지 이동을 위한 navigate 정의

  // 게시글 작성 함수
  const handleSubmit = async () => {
    if (!title || !content) {
      alert("제목과 본문을 입력해주세요.");
      return;
    }

    const postData = {
      title,
      content,
      featured,
      postTime: new Date().toISOString(), // 현재 시간을 ISO 형식으로 저장
    };

    try {
      await writepost(postData);
      alert("게시글이 성공적으로 등록되었습니다!");
      navigate("/blogpostlist"); // 게시글 목록 페이지로 이동
    } catch (error) {
      alert("게시글 작성에 실패했습니다.");
    }
  };

  return (
    <div className="Blogpostwrite">
      <div className="writecontainer">
        {/* 제목 입력 */}
        <input
          type="text"
          placeholder="Title"
          className="write-title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />

        {/* 본문 입력 */}
        <textarea
          placeholder="Enter your content..."
          className="write-content"
          value={content}
          onChange={(e) => setContent(e.target.value)}
        />

        {/* 체크박스 + 버튼 묶는 공간 */}
        <div className="write-bottom">
          {/* 대표 글로 설정 체크 */}
          <div className="write-checkbox">
            <input
              type="checkbox"
              id="mainPost"
              checked={featured}
              onChange={() => setFeatured(!featured)}
            />
            <label htmlFor="mainPost">대표 글로 설정하기</label>
          </div>

          {/* 게시 & 취소 버튼 */}
          <div className="write-buttons">
            <button className="btn-post" onClick={handleSubmit}>
              게시
            </button>
            <button className="btn-cancel" onClick={() => navigate(-1)}>
              취소
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Blogpostwrite;
