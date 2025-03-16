import React from "react";
import "../assets/blogmainnotpost.css";
import Login from "../components/Login";
import { Link } from "react-router-dom";

function Blogmain () {
    return (
        <div className="blogMainnotpost">

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
                        <div className="leftnotpost">
                            불러올 글이 없습니다!
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
                    <h5 className="text">글 작성</h5>
                </div>
   
                <div className="bottom">
                    <div className="notpost">
                        불러올 글이 없습니다!
                    </div>
                    <Link to="/Blogmain">
                    <button className="newpost">
                        새로운 글 작성하기
                    </button>
                    </Link>
                </div>
            </div>
        </div>
    );
}

export default Blogmain;