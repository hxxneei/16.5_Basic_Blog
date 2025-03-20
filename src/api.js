import axios from "axios";

const API_BASE_URL = "https://dain-blog.inuappcenter.kr";

// 로그인 API 요청
export const loginUser = async (loginId, password) => {
  try {
    const response = await axios.post(`${API_BASE_URL}/api/users/login`, {
      loginId,
      password,
    });

    return response.data; // 로그인 성공 시 응답 데이터 반환
  } catch (error) {
    console.error("로그인 오류:", error.response?.data?.message || "서버 오류");
    throw error; // 에러를 던져서 상위 컴포넌트에서 처리할 수 있도록 함
  }
};

// 회원가입 API 요청
export const registerUser = async (loginId, password, nickname) => {
  try {
    console.log(loginId, password, nickname);
    const response = await axios.post(`${API_BASE_URL}/api/users/signup`, {
      loginId,
      password,
      name: nickname,
    });

    return response.data; // 회원가입 성공 시 응답 데이터 반환
  } catch (error) {
    console.error(
      "회원가입 오류:",
      error.response?.data?.message || "서버 오류"
    );
    throw error;
  }
};

// 글 작성 API
export const writepost = async (postData) => {
  try {
    const response = await axios.post(`${API_BASE_URL}/api/posts`, postData);

    return response.data; // 게시글 작성 성공 시 응답 데이터 반환
  } catch (error) {
    console.error("게시글 작성 실패:", error);
    throw error; // 에러를 던져서 상위 컴포넌트에서 처리할 수 있도록 함
  }
};

export const fetchPostList = async () => {
  try {
    const response = await axios.get(`${API_BASE_URL}/api/posts/list`);
    return response.data; // 서버에서 받아온 게시글 목록 반환
  } catch (error) {
    console.error("게시글 목록 불러오기 실패:", error);
    throw error;
  }
};

export const fetchUsers = async () => {
  try {
    const response = await axios.get(`${API_BASE_URL}/api/users/list`);
    return response.data;
  } catch (error) {
    console.error("친구 목록 불러오기 실패", error);
    throw error;
  }
};

export const fetchPost = async (postId) => {
  try {
    const response = await axios.get(`${API_BASE_URL}/api/posts/${postId}`);
    return response.data; // 서버에서 받아온 게시글 반환
  } catch (error) {
    console.error("게시글 불러오기 실패:", error);
    throw error;
  }
};
