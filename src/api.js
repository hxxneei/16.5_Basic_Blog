import axios from "axios";

const API_BASE_URL = "https://dain-blog.inuappcenter.kr";  

// 로그인 API 요청
export const loginUser = async (loginId, password) => {
  try {
    const response = await axios.post(`${API_BASE_URL}/api/users/login`, { 
      loginId, 
      password 
    });

    return response.data;  // 로그인 성공 시 응답 데이터 반환
  } catch (error) {
    console.error("로그인 오류:", error.response?.data?.message || "서버 오류");
    throw error;
  }
};
