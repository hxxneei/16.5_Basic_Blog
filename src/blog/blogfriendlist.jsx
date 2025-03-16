import React from "react";
import "../assets/blogfriendlist.css";
import Login from "../components/Login";
import { Link } from "react-router-dom";

function Blogfriendlist () {
    return (
        <div className="blogMainfriendlist">

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
                    <h5 className="text">친구 목록</h5>
                    <Link to={"/Blogpostlist"}>
                    <h5 className="text">둘러보기</h5>
                    </Link>
                    <h5 className="text">글 작성</h5>
                </div>
   
                <div className="bottom">
                    <div className="profile">
                        <div className="circle"></div>
                        <div className="name">홍길동</div>
                    </div>
                    <div className="profile">
                        <div className="circle"></div>
                        <div className="name">홍길녀</div>
                    </div>
                    <div className="profile">
                        <div className="circle"></div>
                        <div className="name">홍길남</div>
                    </div>
                    
                    
                </div>
            </div>
        </div>
    );
}
export default Blogfriendlist;