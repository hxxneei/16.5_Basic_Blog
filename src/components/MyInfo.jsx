import { useNavigate } from "react-router-dom";

const MyInfo = () => {
  const nickName = localStorage.getItem("name");
  const navigate = useNavigate();

  const handleLogout = () => {
    sessionStorage.removeItem("name");
    navigate("/login");
  };

  const handleEditBtn = () => {
    navigate("/profileedit");
  };

  return (
    <div className="top">
      <div className="circle"></div>
      <div className="nameContainer">
        <h2 className="intro">{nickName}님,</h2>
        <h2 className="intro2">환영합니다.</h2>
      </div>

      <div className="edit">
        {/* <Link to="/Login"> */}
        <div className="logout" onClick={handleLogout}>
          로그아웃
        </div>
        {/* </Link> */}

        <div className="editInformation" onClick={handleEditBtn}>
          정보수정하기
        </div>
      </div>
    </div>
  );
};

export default MyInfo;
