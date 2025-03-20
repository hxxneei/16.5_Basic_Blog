import React, { useState } from "react";
import "../assets/blogmainnotpost.css";
import Login from "../components/Login";
import { Link, useNavigate } from "react-router-dom";

import ViewPost from "./viewpost";
import Blogpostwrite from "./blogpostwrite";
import TopMenu from "../components/TopMenu";
import MyInfo from "../components/MyInfo";

function Blogmain() {
  const [isWrite, setIsWrite] = useState(false);

  return (
    <div className="blogMainnotpost">
      {/* 왼쪽바 */}
      <div className="left">
        <MyInfo />
        <div className="bottom">
          <div className="leftnotpost">불러올 글이 없습니다!</div>
        </div>
      </div>

      {/* 오른쪽 바 */}
      <div className="right">
        <TopMenu />
        <div className="bottom">
          {!isWrite ? (
            <>
              <div className="notpost">불러올 글이 없습니다!</div>
              <Link to="/Blogmain">
                <button className="newpost">새로운 글 작성하기</button>
              </Link>
            </>
          ) : (
            <Blogpostwrite />
          )}
        </div>
      </div>
    </div>
  );
}

export default Blogmain;
