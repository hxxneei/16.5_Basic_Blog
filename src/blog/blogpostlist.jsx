import React from "react";
import "../assets/blogpostlist.css";
import Login from "../components/Login";
import { Link } from "react-router-dom";

function Blogpostlist () {
    return (
        <div className="blogpostlist">

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
                    <Link to="/BlogpostXlist">
                    <h5 className="text">둘러보기</h5>
                    </Link>
                    <h5 className="text">글 작성</h5>
                </div>
   
                <div className="listbottom">
                    <div className="profile">
                        <div className="profileheader">
                            <div className="left-info">
                                <Link to="/BlogpostOlist">
                                <div className="postname">게시글 1</div>
                                </Link>
                                <div className="author">by.$nickName</div>
                            </div>
                            <div className="date">2024년12월3일</div>
                        </div>
                        <div className="post">텍스트요약텍스트요약텍스트요약텍스트요약텍스트요약텍스트요약텍스트요약
                            <br/>
                            텍스트요약텍스트요약텍스트요약텍스트요약텍스트요약

                        </div>
                    </div>
                    <div className="profile">
                        <div className="profileheader">
                            <div className="left-info">
                                <div className="postname">게시글2</div>
                                <div className="author">by.$nickName</div>
                            </div>
                            <div className="date">2024년12월3일</div>
                        </div>
                        <div className="post">텍스트요약텍스트요약텍스트요약텍스트요약텍스트요약텍스트요약텍스트요약
                            <br/>
                            텍스트요약텍스트요약텍스트요약텍스트요약텍스트요약
                        </div>
                    </div>
                    <div className="profile">
                        <div className="profileheader">
                            <div className="left-info">
                                <div className="postname">게시글3</div>
                                <div className="author">by.$nickName</div>
                            </div>
                            <div className="date">2024년12월3일</div>
                        </div>
                        <div className="post">텍스트요약텍스트요약텍스트요약텍스트요약텍스트요약텍스트요약텍스트요약
                        <br/>텍스트요약텍스트요약텍스트요약텍스트요약텍스트요약

                        </div>
                        
                    </div>
                    
                    
                </div>
            </div>
        </div>
    );
}
export default Blogpostlist;