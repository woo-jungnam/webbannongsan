// Dữ liệu mẫu sản phẩm
const products = [
    { id: 1, name: "Táo Đỏ", price: 20000, image: "/image/tao.jpg", category: "Trái cây" },
    { id: 2, name: "Cam Vàng", price: 25000, image: "/image/cam.jpg", category: "Trái cây" },
    { id: 3, name: "Xoài Cát", price: 30000, image: "/image/mango.jpg", category: "Trái cây" },
    { id: 4, name: "Chuối Tiêu", price: 18000, image: "/image/banana.jpg", category: "Trái cây" },
    { id: 5, name: "Dưa Hấu", price: 22000, image: "/image/dua-hau.jpg", category: "Trái cây" },
    { id: 6, name: "Ổi Xá Lỵ", price: 17000, image: "/image/oi.jpeg", category: "Trái cây" },
    { id: 7, name: "Mận Hậu", price: 26000, image: "/image/man.jpg", category: "Trái cây" },
    { id: 8, name: "Vải Thiều", price: 28000, image: "/image/vai.png", category: "Trái cây" },
];

document.getElementById("searchInput").addEventListener("input", e => {
    const keyword = e.target.value;
    const filtered = searchProducts(products, keyword);
    renderProducts("productList", filtered);
});


function normalize(str) {
    return str
        .toLowerCase()
        .normalize("NFD")
        .replace(/[\u0300-\u036f]/g, "")
        .replace(/đ/g, "d")
        .replace(/Đ/g, "D");
}

// Hàm tìm kiếm
function searchProducts(products, keyword) {
    if (!keyword) return products;
    const key = normalize(keyword.trim());
    return products.filter(p => {
        return (
            normalize(p.name).includes(key) ||
            normalize(p.category).includes(key)
        );
    });
}


// Hiển thị danh sách sản phẩm lên trang chủ
function renderProducts(containerId, productList) {
    const container = document.getElementById(containerId);
    if (!container) return;
    container.innerHTML = "";
    productList.forEach(p => {
        const inputId = `quantity-${p.id}`;
        const card = document.createElement("div");
        card.className = "col-md-3";
        card.innerHTML = `
    <div class="card h-100">
        <a href="product-detail.html?id=${p.id}">
            <img src="${p.image}" class="card-img-top product-img" alt="${p.name}">
        </a>
        <div class="card-body d-flex flex-column">
            <h5 class="card-title">
                <a href="product-detail.html?id=${p.id}" class="text-decoration-none text-success">${p.name}</a>
            </h5>
            <p class="card-text text-success">${p.price.toLocaleString()} VND</p>
            <input type="number" id="${inputId}" min="1" value="1" class="form-control mb-2" />
            <button class="btn btn-primary mt-auto" onclick="addToCart(${p.id}, '${inputId}')">
                Thêm vào giỏ <i class='bx bxs-cart'></i>
            </button>
        </div>
    </div>
`;       
        container.appendChild(card);
    });
}

// Tìm kiếm sản phẩm theo tên
document.getElementById("searchInput")?.addEventListener("input", e => {
    const keyword = e.target.value.toLowerCase();
    const filtered = products.filter(p => p.name.toLowerCase().includes(keyword) || p.category.toLowerCase().includes(keyword));
    renderProducts("productList", filtered);
});

// Giỏ hàng đơn giản lưu ở localStorage
function addToCart(productId, inputId) {
    const quantityInput = document.getElementById(inputId);
    const quantity = parseInt(quantityInput.value);
    if (isNaN(quantity) || quantity < 1) {
        alert("Vui lòng nhập số lượng hợp lệ.");
        return;
    }

    // Lấy người dùng hiện tại
    const currentUser = JSON.parse(localStorage.getItem("currentUser"));
    if (!currentUser || !currentUser.email) {
        alert("Vui lòng đăng nhập trước khi thêm vào giỏ hàng.");
        return;
    }

    // Key riêng cho từng người dùng
    const cartKey = `${currentUser.email}`;
    let cart = JSON.parse(localStorage.getItem(cartKey)) || [];

    const index = cart.findIndex(item => item.id === productId);
    if (index >= 0) {
        cart[index].quantity += quantity;
    } else {
        cart.push({ id: productId, quantity: quantity });
    }

    localStorage.setItem(cartKey, JSON.stringify(cart));
    alert("Đã thêm vào giỏ hàng!");
}

const user = localStorage.getItem("currentUser");

const navLogin = document.getElementById("navLogin");
const navUser = document.getElementById("navUser");
const navLogout = document.getElementById("navLogout");

if (user) {
    // Ẩn nút Đăng nhập, hiển thị thông tin người dùng và nút Đăng xuất
    navLogin.classList.add("d-none");
    navUser.classList.remove("d-none");
    navLogout.classList.remove("d-none");
    navUser.textContent = user;
}

// Xử lý nút Đăng xuất
navLogout.addEventListener("click", function (e) {
    e.preventDefault();
    // Xóa dữ liệu người dùng
    localStorage.removeItem("currentUser");

    // Chuyển về trang chủ hoặc reload
    window.location.href = "login.html";
});

window.addEventListener("DOMContentLoaded", () => {
    renderProducts("productList", products);
});
