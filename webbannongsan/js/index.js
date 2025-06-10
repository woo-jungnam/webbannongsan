document.addEventListener("DOMContentLoaded", () => {
    const currentUser = JSON.parse(localStorage.getItem("currentUser"));
    if (currentUser) {
        alert(`xin chao ${currentUser.fullname}`);
        document.getElementById("navLogin").classList.add("d-none");
        const navUser = document.getElementById("navUser");
        navUser.classList.remove("d-none");
        navUser.textContent = currentUser.fullname;
    }
});