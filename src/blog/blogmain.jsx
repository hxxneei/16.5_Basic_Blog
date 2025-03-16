import React from "react";
import "../assets/blogmain.css";
import Login from "../components/Login";
import { Link } from "react-router-dom";

function Blogmain () {
    return (
        <div className="blogMain">

            {/* 왼쪽바 */}
            <div className="left">
                <div className="top">
                    <div className="circle"></div>
                    <div className="nameContainer">
                        <h2 className="intro">$[nickName]님,</h2>
                        <h2 className="intro2">환영합니다.</h2>
                    </div>
                    
                    <div className="edit">
                        <Link to="/Login">
                        <div className="logout">로그아웃</div>
                        </Link>
                        <Link to="/profileedit">
                        <div className="editInformation">정보수정하기</div>
                        </Link>
                    </div>
                </div>
                <div className="bottom">
                        <h1 className="myPost">내 게시물</h1>
                        <div className="myPosts">
                            <div className="post1">게시글1</div>
                            <div>게시글2</div>
                            <div>게시글3</div>
                            <div>게시글4</div>
                            <div>게시글5</div>
                            <div>게시글6</div>
                        </div>
                </div>
                </div>

                {/* 오른쪽 바 */}
            <div className="right">
                   
                <div className="top">
                    <Link to="/Blogfriendlist">
                    <h5 className="text">친구 목록</h5>
                    </Link>
                    <h5 className="text">둘러보기</h5>
                    <Link to="/Blogpostwrite">
                    <h5 className="text">글 작성</h5>
                    </Link>
                </div>
   
                <div className="bottom">
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
    );
}

export default Blogmain;