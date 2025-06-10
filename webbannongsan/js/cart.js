// Dữ liệu mẫu sản phẩm
const products = [
    { id: 1, name: "Táo Đỏ", price: 20000, image: "/image/taodo.jpg", category: "Trái cây" },
    { id: 2, name: "Cam Vàng", price: 25000, image: "/image/camvang.jpg", category: "Trái cây" },
    { id: 3, name: "Xoài Cát", price: 30000, image: "/image/xoai.jpg", category: "Trái cây" },
    { id: 4, name: "Chuối Tiêu", price: 18000, image: "/image/chuoi.jpg", category: "Trái cây" },
    { id: 5, name: "Dưa Hấu", price: 22000, image: "/image/duahau.jpg", category: "Trái cây" },
    { id: 6, name: "Ổi Xá Lỵ", price: 17000, image: "/image/oi.jpg", category: "Trái cây" },
    { id: 7, name: "Mận Hậu", price: 26000, image: "/image/man.jpg", category: "Trái cây" },
    { id: 8, name: "Vải Thiều", price: 28000, image: "/image/vai.jpg", category: "Trái cây" },

    { id: 9, name: "Cà Rốt", price: 15000, image: "/image/carot.jpg", category: "Rau củ" },
    { id: 10, name: "Cải Thìa", price: 12000, image: "/image/caithia.jpg", category: "Rau củ" },
    { id: 11, name: "Khoai Tây", price: 18000, image: "/image/khoaitay.jpg", category: "Rau củ" },
    { id: 12, name: "Hành Lá", price: 10000, image: "/image/hanhla.jpg", category: "Rau củ" },
    { id: 13, name: "Cà Chua", price: 14000, image: "/image/cachua.jpg", category: "Rau củ" },
    { id: 14, name: "Bí Đỏ", price: 16000, image: "/image/bido.jpg", category: "Rau củ" },
    { id: 15, name: "Rau Muống", price: 9000, image: "/image/raumuong.jpg", category: "Rau củ" },
    { id: 16, name: "Su Hào", price: 13000, image: "/image/suhao.jpg", category: "Rau củ" },

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
    { id: 32, name: "Khoai môn Lệ Thủy", price: 28000, image: "/image/khoaimon.jpg", category: "Rau củ" },

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

const currentUser = JSON.parse(localStorage.getItem("currentUser"));
if (!currentUser || !currentUser.email) {
    alert("Không tìm thấy thông tin người dùng.");
} else {
    const userEmail = currentUser.email;

    // Lấy giỏ hàng từ localStorage
    const cartUser = JSON.parse(localStorage.getItem(userEmail)) || [];

    // Lấy sản phẩm tương ứng
    const userProducts = cartUser.map(item => {
        const product = products.find(p => p.id === item.id);
        return product ? { ...product, quantity: item.quantity } : null;
    }).filter(Boolean); // loại bỏ null

    // Render ra giỏ hàng
    renderCart(userProducts);
}

// Hàm render giỏ hàng
function renderCart(productList) {
    const container = document.getElementById("cartItems");
    const totalContainer = document.getElementById("cartTotal");
    if (!container || !totalContainer) return;

    container.innerHTML = "";
    let total = 0;

    productList.forEach(p => {
        total += p.price * p.quantity;

        const row = document.createElement("div");
        row.className = "card mb-2";
        row.innerHTML = `
            <div class="card-body d-flex justify-content-between align-items-center">
                <div>
                    <h5 class="card-title">${p.name}</h5>
                    <p class="card-text">
                        <input type="number" value="${p.quantity}" min="1" style="width: 60px;" id="qty-${p.id}">
                        x ${p.price.toLocaleString()} VND
                    </p>
                    <button class="btn btn-sm btn-primary me-2" onclick="updateItem(${p.id})">Sửa</button>
                    <button class="btn btn-sm btn-danger" onclick="removeItem(${p.id})">Xóa</button>
                </div>
                <img src="${p.image}" width="80" alt="${p.name}">
            </div>
        `;
        container.appendChild(row);
    });

    // Hiển thị tổng tiền
    totalContainer.textContent = `Tổng cộng: ${total.toLocaleString()} VND`;
}

function removeItem(id) {
    const currentUser = JSON.parse(localStorage.getItem("currentUser"));
    if (!currentUser || !currentUser.email) return;

    const userEmail = currentUser.email;
    let cart = JSON.parse(localStorage.getItem(userEmail)) || [];

    cart = cart.filter(item => item.id !== id);
    localStorage.setItem(userEmail, JSON.stringify(cart));

    // Cập nhật lại giỏ hàng
    const updatedProducts = cart.map(item => {
        const product = products.find(p => p.id === item.id);
        return product ? { ...product, quantity: item.quantity } : null;
    }).filter(Boolean);

    renderCart(updatedProducts);
}
function updateItem(id) {
    const qtyInput = document.getElementById(`qty-${id}`);
    const newQty = parseInt(qtyInput.value);
    if (isNaN(newQty) || newQty < 1) {
        alert("Số lượng phải lớn hơn 0");
        return;
    }

    const currentUser = JSON.parse(localStorage.getItem("currentUser"));
    if (!currentUser || !currentUser.email) return;

    const userEmail = currentUser.email;
    let cart = JSON.parse(localStorage.getItem(userEmail)) || [];

    const item = cart.find(item => item.id === id);
    if (item) {
        item.quantity = newQty;
        localStorage.setItem(userEmail, JSON.stringify(cart));

        // Cập nhật lại giỏ hàng
        const updatedProducts = cart.map(item => {
            const product = products.find(p => p.id === item.id);
            return product ? { ...product, quantity: item.quantity } : null;
        }).filter(Boolean);

        renderCart(updatedProducts);
    }
}

document.addEventListener("DOMContentLoaded", () => {
    const currentUser = JSON.parse(localStorage.getItem("currentUser"));
    if (!currentUser || !currentUser.email) return;

    const userEmail = currentUser.email;
    const cartUser = JSON.parse(localStorage.getItem(userEmail)) || [];

    const userProducts = cartUser.map(item => {
        const product = products.find(p => p.id === item.id);
        return product ? { ...product, quantity: item.quantity } : null;
    }).filter(Boolean);

    renderCart(userProducts);
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
