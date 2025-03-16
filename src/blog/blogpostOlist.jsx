import React from "react";
import "../assets/blogpostOlist.css";

function BlogpostOlist () {
    return (
        <div className="blogpostOlist">

            {/* 왼쪽바 */}
            <div className="listleft">
                <div className="listtop">
                    <div className="friendslist">
                        Friends
                        <br/> List
                    </div>
                    <div className="friends-container">
                        <div className="profile">
                            <div className="circle"></div>
                            <div className="name">정석환</div>
                        </div>
                        <div className="profile">
                            <div className="circle"></div>
                            <div className="name">성민준</div>
                        </div>
                        <div className="profile">
                            <div className="circle"></div>
                            <div className="name">박다인</div>
                        </div>
                        <div className="profile">
                            <div className="circle"></div>
                            <div className="name">나현지</div>
                        </div>
                    </div>
                    <button className="mainbutton">
                        메인화면
                    </button>

                </div>

                    
            </div>

                {/* 오른쪽 바 */}
            <div className="listright">
                
                <div className="listtop">
                    <h5 className="text">친구 목록</h5>
                    <h5 className="text">둘러보기</h5>
                    <h5 className="text">글 작성</h5>
                </div>

                <div className="listbottom">
                    <h1 className="posts">게시글1</h1>
                    <h4 className="content-ifo">작성자 : 닉네임| 작성 시간 : 2025-02-10 (월)</h4>
                    
                    <div className="row">
                        <div className="postEdit">수정</div>
                        <div className="postremove">삭제</div>
                    </div>
                    
                    <p className="content">나는 성근 눈 속에서 그들이 남긴 발자국을 발견했다<br />
                        그것은 나를 과거로 이끌었고, 나는 그곳에서 잃어버린 시간과 마주했다.
                        <br />
                        <br />
                        - 작별하지 않는다, 한강 -
                    </p>
                    
                        
                    
                    
                </div>
            </div>
        </div>
        
    )
}
export default BlogpostOlist;