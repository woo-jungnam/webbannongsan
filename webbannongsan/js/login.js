const listUsers = JSON.parse(localStorage.getItem("userRegisterList") || "[]");

const loginForm = document.getElementById("loginForm");

loginForm.addEventListener("submit", function (e) {
    e.preventDefault();

    const userMail = document.getElementById("emailLogin");
    const passwordLogin = document.getElementById("passwordLogin");
    const emailError = document.getElementById("emailError");
    const passwordError = document.getElementById("passwordError");

    // Reset lỗi
    emailError.textContent = "";
    passwordError.textContent = "";

    let valid = true;

    // Kiểm tra email có nhập chưa
    if (!userMail.value.trim()) {
        emailError.textContent = "Vui lòng nhập email";
        emailError.style.color = "red";
        valid = false;
    }

    // Kiểm tra password có nhập chưa
    if (!passwordLogin.value.trim()) {
        passwordError.textContent = "Vui lòng nhập mật khẩu";
        passwordError.style.color = "red";
        valid = false;
    }

    if (!valid) return;

    // Kiểm tra thông tin đăng nhập
    const user = listUsers.find(user =>
        user.email === userMail.value.trim() &&
        user.password === passwordLogin.value
    );

    if (user) {
        alert("Đăng nhập thành công!");
        localStorage.setItem("currentUser", JSON.stringify(user));
        // Hiển thị tên user, ẩn nút đăng nhập
        document.getElementById("navLogin").classList.add("d-none");
        document.getElementById("navUser").classList.remove("d-none");
        document.getElementById("navUser").textContent = user.fullName || user.email;
        window.location.href = "index.html"; // Chuyển về trang chủ
    } else {
        passwordError.textContent = "Email hoặc mật khẩu không đúng";
        passwordError.style.color = "red";
    }
});
