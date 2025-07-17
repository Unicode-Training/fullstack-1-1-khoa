const saveToken = (token) => {
  //Lưu vào bộ nhớ trình duyệt
  // - localStorage
  // - sessionStorage
  // - cookie
  localStorage.setItem("accessToken", token.access_token);
  localStorage.setItem("refreshToken", token.refresh_token);
};
const getToken = () => {
  const accessToken = localStorage.getItem("accessToken");
  const refreshToken = localStorage.getItem("refreshToken");
  return {
    accessToken,
    refreshToken,
  };
};
const getRefreshToken = async () => {
  const refreshToken = getToken().refreshToken;
  if (refreshToken) {
    const response = await fetch(
      `https://api.escuelajs.co/api/v1/auth/refresh-token`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          refreshToken,
        }),
      }
    );
    if (!response.ok) {
      return false;
    }
    return response.json();
  }
};
const logout = () => {
  localStorage.removeItem("accessToken");
  localStorage.removeItem("refreshToken");
};
let refreshTokenPromise = null;
const fetchWrapper = async (url, options = {}) => {
  const token = getToken();
  if (token.accessToken) {
    const accessToken = token.accessToken;
    options.headers = {
      ...options.headers,
      Authorization: `Bearer ${accessToken}`,
    };
  }
  const response = await fetch(url, options);
  if (response.status === 401) {
    //Unauthorize
    if (!refreshTokenPromise) {
      refreshTokenPromise = getRefreshToken();
    }
    const newToken = await refreshTokenPromise;
    if (newToken) {
      saveToken(newToken);
      return fetchWrapper(url, options);
    } else {
      if (token.accessToken) {
        logout();
        window.location.reload();
      }
    }
  }
  return response;
};
