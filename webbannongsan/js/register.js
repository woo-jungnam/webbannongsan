const registerForm = document.getElementById("registerForm");

registerForm.addEventListener("submit", function (e) {
    e.preventDefault();
    // Lấy các phần tử
    const fullnameElement = document.getElementById("fullname");
    const fullnameErrorElement = document.getElementById("fullnameError");

    const emailElement = document.getElementById("emailRegister");
    const emailErrorElement = document.getElementById("emailError");

    const passwordElement = document.getElementById("passwordRegister");
    const passwordErrorElement = document.getElementById("passwordError");

    const rePasswordElement = document.getElementById("rePasswordRegister");
    const rePasswordErrorElement = document.getElementById("rePasswordError");

    let isValid = true;

    // Kiểm tra Họ và tên
    if (!fullnameElement.value.trim()) {
        fullnameErrorElement.style.display = "block";
        isValid = false;
    } else {
        fullnameErrorElement.style.display = "none";
    }

    // Kiểm tra Email
    if (!emailElement.value.trim()) {
        emailErrorElement.style.display = "block";
        isValid = false;
    } else {
        emailErrorElement.style.display = "none";
    }

    // Kiểm tra Mật khẩu
    if (!passwordElement.value.trim()) {
        passwordErrorElement.style.display = "block";
        isValid = false;
    } else {
        passwordErrorElement.style.display = "none";
    }

    // Kiểm tra Nhập lại mật khẩu
    if (!rePasswordElement.value.trim()) {
        rePasswordErrorElement.textContent = "Mật khẩu không được bỏ trống";
        rePasswordErrorElement.style.display = "block";
        isValid = false;
    } else if (passwordElement.value !== rePasswordElement.value) {
        rePasswordErrorElement.textContent = "Mật khẩu nhập không khớp";
        rePasswordErrorElement.style.display = "block";
        isValid = false;
    } else {
        rePasswordErrorElement.style.display = "none";
    }


    if (isValid) {
        const userData = {
            fullname: fullnameElement.value.trim(),
            email: emailElement.value.trim(),
            password: passwordElement.value
        };

        let users = JSON.parse(localStorage.getItem("userRegisterList")) || [];

  
        const isEmailExists = users.some(user => user.email === userData.email);
        if (isEmailExists) {
            alert("Email này đã được đăng ký!");
            return;
        }

        users.push(userData);

        localStorage.setItem("userRegisterList", JSON.stringify(users));

        alert("Đăng ký thành công! Dữ liệu đã lưu vào LocalStorage.");
        window.location.href = "login.html";
    }
});
