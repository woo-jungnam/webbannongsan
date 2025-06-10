const products = [
    { id: 9, name: "Cà Rốt", price: 15000, image: "/image/carot.jpg", category: "Rau củ" },
    { id: 10, name: "Cải Thìa", price: 12000, image: "/image/caithia.jpg", category: "Rau củ" },
    { id: 11, name: "Khoai Tây", price: 18000, image: "/image/khoaitay.jpg", category: "Rau củ" },
    { id: 12, name: "Hành Lá", price: 10000, image: "/image/hanhla.jpg", category: "Rau củ" },
    { id: 13, name: "Cà Chua", price: 14000, image: "/image/cachua.jpg", category: "Rau củ" },
    { id: 14, name: "Bí Đỏ", price: 16000, image: "/image/bido.jpg", category: "Rau củ" },
    { id: 15, name: "Rau Muống", price: 9000, image: "/image/raumuong.jpg", category: "Rau củ" },
    { id: 16, name: "Su Hào", price: 13000, image: "/image/suhao.jpg", category: "Rau củ" }
];


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
// Giỏ hàng lưu ở localStorage

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