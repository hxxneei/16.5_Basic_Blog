import { Link, useNavigate } from "react-router-dom";
import "../assets/TopMenu.css";

const TopMenu = () => {
  const navigate = useNavigate();
  const onClickWriteBtn = () => {
    navigate("/blogpostwrite");
  };
  const onClickFriendBtn = () => {
    navigate("/Blogfriendlist");
  };

  const onClickViewBtn = () => {
    navigate("/blogpostlist");
  };

  return (
    <div className="TopMenuWrapper">
      <h5 className="text" onClick={onClickFriendBtn}>
        친구 목록
      </h5>
      <h5 className="text" onClick={onClickViewBtn}>
        둘러보기
      </h5>
      <h5 className="text" onClick={onClickWriteBtn}>
        글 작성
      </h5>
    </div>
  );
};

export default TopMenu;
