import { useNavigate } from "react-router-dom";

const MyInfo = () => {
  const nickName = localStorage.getItem("name"); // 이름 꺼내옴
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem("userId");
    localStorage.removeItem("name"); // 상태 초기화(로그아웃 처리함)
    alert("로그아웃 되었습니다.");
    navigate("/login");
  };

  const handleEditBtn = () => {
    navigate("/profileedit");
  };

  return (
    <div className="top">
      <div className="circle"></div>

      <div className="nameContainer">
        {nickName ? (
          <>
            <h2 className="intro">{nickName}님,</h2>
            <h2 className="intro2">환영합니다.</h2>
          </>
        ) : (
          <>
            <h2 className="intro">로그인이 필요합니다.</h2>
            <h2 className="intro2">먼저 로그인해주세요.</h2>
          </>
        )}
      </div>

      <div className="edit">
        {nickName ? (
          <>
            <div className="logout" onClick={handleLogout}>
              로그아웃
            </div>
            <div className="editInformation" onClick={handleEditBtn}>
              정보수정하기
            </div>
          </>
        ) : (
          <div className="editInformation" onClick={() => navigate("/login")}>
            로그인하러 가기
          </div>
        )}
      </div>
    </div>
  );
};

export default MyInfo;
