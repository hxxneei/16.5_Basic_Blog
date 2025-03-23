import axios from "axios";

const API_BASE_URL = "https://dain-blog.inuappcenter.kr";

// ✅ 로그인
export const loginUser = async (loginId, password) => {
  try {
    const response = await axios.post(`${API_BASE_URL}/api/users/login`, {
      loginId,
      password,
    });
    return response.data;
  } catch (error) {
    console.error("로그인 오류:", error.response?.data?.message || "서버 오류");
    throw error;
  }
};

// ✅ 회원가입
export const registerUser = async (loginId, password, nickname) => {
  try {
    const response = await axios.post(`${API_BASE_URL}/api/users/signup`, {
      loginId,
      password,
      name: nickname,
    });
    return response.data;
  } catch (error) {
    console.error(
      "회원가입 오류:",
      error.response?.data?.message || "서버 오류"
    );
    throw error;
  }
};

// ✅ 게시글 작성
export const writepost = async (userId, postData) => {
  try {
    const response = await axios.post(
      `${API_BASE_URL}/api/posts?userId=${userId}`,
      postData
    );
    return response.data;
  } catch (error) {
    console.error("게시글 작성 실패:", error);
    throw error;
  }
};

// ✅ 게시글 목록 조회
export const fetchPostList = async () => {
  try {
    const response = await axios.get(`${API_BASE_URL}/api/posts/list`);
    return response.data;
  } catch (error) {
    console.error("게시글 목록 불러오기 실패:", error);
    throw error;
  }
};

// ✅ 게시글 상세 조회
export const fetchPost = async (postId) => {
  try {
    const response = await axios.get(`${API_BASE_URL}/api/posts/${postId}`);
    return response.data;
  } catch (error) {
    console.error("게시글 불러오기 실패:", error);
    throw error;
  }
};

// ✅ 게시글 수정
export const updatePost = async (postId, userId, postData) => {
  try {
    const response = await axios.put(
      `${API_BASE_URL}/api/posts/${postId}?userId=${userId}`,
      postData
    );
    return response.data;
  } catch (error) {
    console.error("게시글 수정 실패:", error);
    throw error;
  }
};

// ✅ 게시글 삭제
export const deletePost = async (postId, userId) => {
  try {
    const response = await axios.delete(
      `${API_BASE_URL}/api/posts/${postId}?userId=${userId}`
    );
    return response.data;
  } catch (error) {
    console.error("게시글 삭제 실패:", error);
    throw error;
  }
};

// ✅ 유저 목록 조회
export const fetchUsers = async () => {
  try {
    const response = await axios.get(`${API_BASE_URL}/api/users`);
    return response.data;
  } catch (error) {
    console.error("친구 목록 불러오기 실패", error);
    throw error;
  }
};

// ✅ 유저 단일 조회
export const fetchUserInfo = async (userId) => {
  try {
    const response = await axios.get(`${API_BASE_URL}/api/users/${userId}`);
    return response.data;
  } catch (error) {
    console.error("사용자 정보 조회 실패:", error);
    throw error;
  }
};

// ✅ 유저 정보 수정
export const updateUserInfo = async (userId, userData) => {
  try {
    const response = await axios.put(
      `${API_BASE_URL}/api/users/${userId}`,
      userData
    );
    return response.data;
  } catch (error) {
    console.error("사용자 정보 수정 실패:", error);
    throw error;
  }
};
