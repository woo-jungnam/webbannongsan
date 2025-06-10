const products = [
    { id: 33, name: "Me Thái", price: 32000, image: "/image/methai.jpg", category: "Trái cây" },
    { id: 34, name: "Dưa Lưới Đồng Nai", price: 45000, image: "/image/dualuoi.jpg", category: "Trái cây" },
    { id: 35, name: "Chanh Dây", price: 27000, image: "/image/chanhday.jpg", category: "Trái cây" },
    { id: 36, name: "Dừa Xiêm Bến Tre", price: 30000, image: "/image/duaxiem.jpg", category: "Trái cây" },
    { id: 37, name: "Nhãn Lồng Hưng Yên", price: 55000, image: "/image/nhanlong.jpg", category: "Trái cây" },
    { id: 38, name: "Mận Tam Hoa Bắc Hà", price: 48000, image: "/image/mantamhoa.jpg", category: "Trái cây" },

    { id: 39, name: "Rau Má Quảng Ngãi", price: 15000, image: "/image/rauma.jpg", category: "Rau củ" },
    { id: 40, name: "Bầu Hồ Lô", price: 17000, image: "/image/bau.jpg", category: "Rau củ" },
    { id: 41, name: "Cà Tím Trứng", price: 16000, image: "/image/catim.jpg", category: "Rau củ" },
    { id: 42, name: "Đậu Bắp", price: 14000, image: "/image/daubap.jpg", category: "Rau củ" },
    { id: 43, name: "Mướp Hương", price: 15000, image: "/image/muop.jpg", category: "Rau củ" },
    { id: 44, name: "Củ Đậu Hải Dương", price: 13000, image: "/image/cudau.jpg", category: "Rau củ" }
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