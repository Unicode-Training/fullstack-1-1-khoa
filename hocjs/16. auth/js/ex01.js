const root = document.querySelector("#root");

const getProfile = async () => {
  const response = await fetchWrapper(
    "https://api.escuelajs.co/api/v1/auth/profile"
  );
  return response.json();
};

const render = async () => {
  const loginFormHtml = `<form class="login-form">
      <h2>Login</h2>
      <div>
        <label for="email">Email</label>
        <input type="email" name="email" placeholder="Email..." required />
      </div>
      <div>
        <label for="password">Password</label>
        <input
          type="password"
          name="password"
          placeholder="Password..."
          required
        />
      </div>
      <button>Login</button>
    </form>`;
  const welcomeHtml = `<h2>Welcome</h2>
  <h3>Chào bạn: <span class="profile-name"></span></h3>
  <button class="logout-btn">Đăng xuất</button>
  `;
  const accessToken = getToken().accessToken;
  if (accessToken) {
    root.innerHTML = welcomeHtml;
    const user = await getProfile();
    //Trên thực tế trên 1 trang sẽ có rất nhiều api được gọi

    const profileNameEl = document.querySelector(".profile-name");
    profileNameEl.innerText = user.name;
    const logoutBtn = document.querySelector(".logout-btn");
    logoutBtn.addEventListener("click", () => {
      logout();
      render();
    });
  } else {
    root.innerHTML = loginFormHtml;
    const loginForm = document.querySelector(".login-form");
    loginForm.addEventListener("submit", async (e) => {
      e.preventDefault();
      const formData = new FormData(loginForm);
      const email = formData.get("email");
      const password = formData.get("password");
      const button = loginForm.querySelector("button");
      button.innerText = "Loading...";
      button.disabled = true;
      const token = await handleLogin({ email, password });
      button.innerText = "Login";
      button.disabled = false;
      if (token) {
        saveToken(token);
        render();
        return;
      }
      alert("Email hoặc mật khẩu không đúng");
    });
  }
};
render();
getProfile();
getProfile();

const handleLogin = async (data) => {
  const response = await fetch(`https://api.escuelajs.co/api/v1/auth/login`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  });
  if (!response.ok) {
    return false;
  }
  return response.json();
};

//FetchWrapper --> Tạo ra 1 hàm bọc hàm fetch để tự động xử lý Authorization và refresh Token
