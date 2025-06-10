const products = [
    { id: 17, name: "Sầu riêng Ri6", price: 90000, image: "/image/saurieng.jpg", category: "Trái cây" },
    { id: 18, name: "Măng cụt Lái Thiêu", price: 60000, image: "/image/mangcut.jpg", category: "Trái cây" },
    { id: 19, name: "Bưởi Năm Roi", price: 50000, image: "/image/buoi.jpg", category: "Trái cây" },
    { id: 20, name: "Thanh long Bình Thuận", price: 35000, image: "/image/thanhlong.jpg", category: "Trái cây" },
    { id: 21, name: "Chôm chôm Long Khánh", price: 40000, image: "/image/chomchom.jpg", category: "Trái cây" },
    { id: 22, name: "Na Đông Triều", price: 45000, image: "/image/na.jpg", category: "Trái cây" },
    { id: 23, name: "Mít Thái Cái Bè", price: 38000, image: "/image/mit.jpg", category: "Trái cây" },
    { id: 24, name: "Cam Cao Phong", price: 55000, image: "/image/cam.jpg", category: "Trái cây" },

    { id: 25, name: "Rau đắng đất Miền Tây", price: 20000, image: "/image/raudang.jpg", category: "Rau củ" },
    { id: 26, name: "Cải ngồng Hà Giang", price: 18000, image: "/image/caingong.jpg", category: "Rau củ" },
    { id: 27, name: "Rau rừng Tây Nguyên", price: 22000, image: "/image/raurung.jpg", category: "Rau củ" },
    { id: 28, name: "Bắp non Đồng Tháp", price: 25000, image: "/image/bapnon.jpg", category: "Rau củ" },
    { id: 29, name: "Măng tươi Bắc Kạn", price: 30000, image: "/image/mangtuoi.jpg", category: "Rau củ" },
    { id: 30, name: "Su su Tam Đảo", price: 16000, image: "/image/susu.jpg", category: "Rau củ" },
    { id: 31, name: "Rau dền đỏ", price: 12000, image: "/image/rauden.jpg", category: "Rau củ" },
    { id: 32, name: "Khoai môn Lệ Thủy", price: 28000, image: "/image/khoaimon.jpg", category: "Rau củ" }
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