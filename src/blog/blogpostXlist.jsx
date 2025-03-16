import React from "react";
import "../assets/blogpostXlist.css";

function BlogpostXlist () {
    return (
        <div className="blogpostXlist">

            {/* 왼쪽바 */}
            <div className="listleft">
                <div className="listtop">
                    <div className="friendslist">
                        Friends
                        <br/> List
                    </div>
                    <div className="notfriendslist">
                        아직 친구가 없습니다!
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
                    <div className="notpost">
                        불러올 글이 없습니다!</div>
                    
                        
                    
                    
                </div>
            </div>
        </div>
        
    )
}
export default BlogpostXlist;