const products = [
    { id: 1, name: "Táo Đỏ", price: 20000, image: "/image/taodo.jpg", category: "Trái cây" },
    { id: 2, name: "Cam Vàng", price: 25000, image: "/image/camvang.jpg", category: "Trái cây" },
    { id: 3, name: "Xoài Cát", price: 30000, image: "/image/xoai.jpg", category: "Trái cây" },
    { id: 4, name: "Chuối Tiêu", price: 18000, image: "/image/chuoi.jpg", category: "Trái cây" },
    { id: 5, name: "Dưa Hấu", price: 22000, image: "/image/duahau.jpg", category: "Trái cây" },
    { id: 6, name: "Ổi Xá Lỵ", price: 17000, image: "/image/oi.jpg", category: "Trái cây" },
    { id: 7, name: "Mận Hậu", price: 26000, image: "/image/man.jpg", category: "Trái cây" },
    { id: 8, name: "Vải Thiều", price: 28000, image: "/image/vai.jpg", category: "Trái cây" }
];
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
        <a href="product-detail.html?id=${p.id}" class="text-decoration-none">
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



// Giỏ hàng lưu ở localStorage
function addToCart(productId, inputId) {
    const quantityInput = document.getElementById(inputId);
    const quantity = parseInt(quantityInput.value);
    if (isNaN(quantity) || quantity < 1) {
        alert("Vui lòng nhập số lượng hợp lệ.");
        return;
    }

    const currentUser = JSON.parse(localStorage.getItem("currentUser"));
    if (!currentUser || !currentUser.email) {
        alert("Bạn cần đăng nhập để thêm vào giỏ hàng.");
        return;
    }

    let cart = JSON.parse(localStorage.getItem(currentUser.email)) || [];
    const index = cart.findIndex(item => item.id === productId);
    if (index >= 0) {
        cart[index].quantity += quantity;
    } else {
        cart.push({ id: productId, quantity: quantity });
    }

    localStorage.setItem(currentUser.email, JSON.stringify(cart));
    alert("Đã thêm vào giỏ hàng!");
}


window.addEventListener("DOMContentLoaded", () => {
    renderProducts("productList", products);
});

document.addEventListener("DOMContentLoaded", () => {
    const currentUser = JSON.parse(localStorage.getItem("currentUser"));
    if (currentUser) {
        document.getElementById("navLogin").classList.add("d-none");
        const navUser = document.getElementById("navUser");
        navUser.classList.remove("d-none");
        navUser.textContent = currentUser.fullname;
    }
});