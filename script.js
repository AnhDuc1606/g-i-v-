
/**
 * ============================================================================
 * PHẦN 1: CẤU HÌNH NỘI DUNG LỜI CHÚC CHO 5 NGƯỜI cậu
 * ----------------------------------------------------------------------------
 * ============================================================================
 */
const wishesData = {
    // Link truy cập: ?id=1
    "1": {
        name: "Từ Thanh Bình", // <-- Thay tên người cậu thứ 1 tại đây
        envelopeTitle: "Gửi Từ Thanh Bình chút ngọt ngào 🌸",
        greeting: "Gửi Từ Thanh Bình xinh đẹp,",
        message: `Nhân ngày Phụ nữ Việt Nam 20/10, chúc cậu luôn giữ được nụ cười rạng rỡ như ánh nắng mùa thu nhé!

Dù tụi mình mới quen nhau chưa lâu dưới mái trường Đại học, nhưng mình thật sự cảm thấy rất may mắn khi được học chung lớp với một người cậu dễ thương và đáng yêu như cậu. Chúc cậu luôn xinh đẹp, rạng rỡ như những đóa hoa tỏa nắng, học tập thật tốt và luôn là cô gái hạnh phúc nhất theo cách riêng của mình nhé! ✨🌸`,
        signature: "Người cậu của cậu 🌷"
    },

    // NỘI DUNG MẶC ĐỊNH: Hiển thị khi link không có ?id= hoặc id nằm ngoài khoảng 1-5
    "default": {
        name: "Trịnh Khắc Phương Chi",
        envelopeTitle: "Gửi thế giới xinh đẹp của mình chút ngọt ngào 🌸",
        greeting: "Gửi Phương Chi đáng yêu,",
        message: `Nhân ngày Phụ nữ Việt Nam 20/10, chúc cậu luôn giữ được nụ cười rạng rỡ như ánh nắng mùa thu nhé!

Có thể tụi mình chỉ mới biết đến nhau vài ngày qua mạng, nhưng mình vẫn muốn gửi đến cậu những lời chúc ấm áp nhất trong ngày 20/10 này. Chúc cậu luôn tự tin và tràn đầy hạnh phúc, luôn rạng rỡ xinh đẹp như những đóa hoa và có nhiều thành công cũng như thành tích học tập tốt nhé, cố thi đỗ NEU để mình được ở bên cạnh cậu. Cảm ơn sự xuất hiện của cậu đã làm cho mình có thêm động lực để cố gắng mỗi ngày. Chúc cậu một ngày 20/10 thật tuyệt vời nhé! 💐 `,
        signature: "Luôn yêu cậu 💖"
    }
};

// ============================================================================
// LOGIC ĐỌC THAM SỐ URL VÀ XỬ LÝ GIAO DIỆN
// ============================================================================

document.addEventListener("DOMContentLoaded", () => {
    // 1. Đọc tham số ?id= từ thanh địa chỉ URL
    const urlParams = new URLSearchParams(window.location.search);
    const idParam = urlParams.get("id");

    // 2. Kiểm tra ID có hợp lệ (từ 1 đến 5) hay không, nếu không thì lấy 'default'
    const validIds = ["1", "2", "3", "4", "5"];
    const selectedData = validIds.includes(idParam) ? wishesData[idParam] : wishesData["default"];

    // 3. Lấy các phần tử DOM
    const envelopeGreeting = document.getElementById("envelopeGreeting");
    const letterRecipient = document.getElementById("letterRecipient");
    const letterBody = document.getElementById("letterBody");
    const letterSignature = document.getElementById("letterSignature");

    const envelopeWrapper = document.getElementById("envelopeWrapper");
    const envelope = document.getElementById("envelope");
    const letterModal = document.getElementById("letterModal");
    const btnCloseLetter = document.getElementById("btnCloseLetter");

    // 4. Đổ dữ liệu cá nhân hóa vào giao diện
    envelopeGreeting.textContent = selectedData.envelopeTitle;
    letterRecipient.textContent = selectedData.greeting;
    letterBody.textContent = selectedData.message;
    letterSignature.textContent = selectedData.signature;

    // Cập nhật tiêu đề tab trình duyệt theo tên người nhận
    if (validIds.includes(idParam)) {
        document.title = `Chúc mừng 20/10 - ${selectedData.name} 🌸`;
    }

    // 5. Khởi tạo hiệu ứng cánh hoa rơi nhẹ nhàng trên nền
    createFallingPetals(18);

    // 6. Xử lý sự kiện khi người dùng chạm vào phong thư
    let isOpening = false;
    envelopeWrapper.addEventListener("click", () => {
        if (isOpening) return;
        isOpening = true;

        // Mở nắp phong thư và đẩy thư lên
        envelope.classList.add("open");

        // Bắn hiệu ứng pháo hoa giấy màu hồng/đỏ lãng mạn
        fireConfetti();

        // Sau 950ms (khi phong thư đã mở xong), hiển thị toàn bộ bức thư lên màn hình
        setTimeout(() => {
            letterModal.classList.add("active");
        }, 950);
    });

    // 7. Sự kiện đóng thư để xem lại hiệu ứng mở phong thư
    btnCloseLetter.addEventListener("click", () => {
        letterModal.classList.remove("active");
        setTimeout(() => {
            envelope.classList.remove("open");
            isOpening = false;
        }, 400);
    });
});

/**
 * Hàm bắn pháo hoa giấy bằng thư viện canvas-confetti
 */
function fireConfetti() {
    if (typeof confetti !== "function") return;

    const colors = ["#ff6b95", "#ffc2d4", "#d81b60", "#ffb3c6", "#ffffff"];

    // Đợt bắn chính ở giữa màn hình
    confetti({
        particleCount: 80,
        spread: 75,
        origin: { y: 0.6 },
        colors: colors
    });

    // Hai đợt bắn phụ từ 2 bên góc màn hình sau 300ms
    setTimeout(() => {
        confetti({
            particleCount: 40,
            angle: 60,
            spread: 55,
            origin: { x: 0, y: 0.65 },
            colors: colors
        });
        confetti({
            particleCount: 40,
            angle: 120,
            spread: 55,
            origin: { x: 1, y: 0.65 },
            colors: colors
        });
    }, 300);
}

/**
 * Hàm tạo các cánh hoa đào rơi ngẫu nhiên trên nền
 */
function createFallingPetals(count) {
    const container = document.getElementById("petals-container");
    for (let i = 0; i < count; i++) {
        const petal = document.createElement("div");
        petal.classList.add("petal");

        // Kích thước ngẫu nhiên từ 10px đến 20px
        const size = Math.random() * 10 + 10;
        petal.style.width = `${size}px`;
        petal.style.height = `${size}px`;

        // Vị trí ngang ngẫu nhiên
        petal.style.left = `${Math.random() * 100}vw`;

        // Thời gian rơi và độ trễ ngẫu nhiên để tự nhiên hơn
        const duration = Math.random() * 5 + 6; // 6s - 11s
        const delay = Math.random() * 5;
        petal.style.animationDuration = `${duration}s`;
        petal.style.animationDelay = `${delay}s`;

        container.appendChild(petal);
    }
}