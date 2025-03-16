import React from "react";
import "../assets/blogpostwrite.css";

function Blogpostwrite () {
    return (
        <div className="Blogpostwrite">
            <div className="writecontainer">
                
                {/* 제목 입력 */}
                <input
                    type="text"
                    placeholder="Title"
                    className="write-title"
                />

                {/* 본문 입력 */}
                <textarea
                    placeholder="Enter your context. . ."
                    className="write-content"
                />

                {/* 체크박스 + 버튼 묶는 공간 */}
                <div className="write-bottom">

                    {/* 대표 글로 설정 체크 */}
                    <div className="write-checkbox">
                        <input type="checkbox" id="mainPost" />
                        <label htmlFor="mainPost">대표 글로 설정하기</label>
                    </div>

                    {/* 게시 & 취소 버튼 */}
                    <div className="write-buttons">
                        <button className="btn-post">게시</button>
                        <button className="btn-cancel">취소</button>
                    </div>

                </div>

            </div>
        </div>
    )
}

export default Blogpostwrite;
