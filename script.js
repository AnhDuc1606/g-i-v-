
/**
 * ============================================================================
 * PHẦN 1: CẤU HÌNH NỘI DUNG LỜI CHÚC CHO 5 NGƯỜI BẠN
 * ----------------------------------------------------------------------------
 * ============================================================================
 */
const wishesData = {
    // Link truy cập: ?id=1
    "1": {
        name: "Từ Thanh Bình", // <-- Thay tên người bạn thứ 1 tại đây
        envelopeTitle: "Gửi Từ Thanh Bình chút ngọt ngào 🌸",
        greeting: "Gửi Từ Thanh Bình xinh đẹp,",
        message: `Nhân ngày Phụ nữ Việt Nam 20/10, chúc cậu luôn giữ được nụ cười rạng rỡ như ánh nắng mùa thu nhé!

Dù tụi mình mới quen nhau chưa lâu dưới mái trường Đại học, nhưng mình thật sự cảm thấy rất may mắn khi được học chung lớp với một người bạn dễ thương và đáng yêu như bạn. Chúc bạn luôn xinh đẹp, rạng rỡ như những đóa hoa tỏa nắng, học tập thật tốt và luôn là cô gái hạnh phúc nhất theo cách riêng của mình nhé! ✨🌸`,
        signature: "Người bạn của cậu 🌷"
    },

    // Link truy cập: ?id=2
    "2": {
        name: "Trần Khánh Châu", // <-- Thay tên người bạn thứ 2 tại đây
        envelopeTitle: "Có một bức thư dành riêng cho Châu 💌",
        greeting: "Chào cô gái tháng 10 - Khánh Châu,",
        message: `Chúc mừng ngày 20/10 nhé Châu ơi! Chúc cậu hôm nay không chỉ nhận được thật nhiều hoa và quà, mà cả 364 ngày còn lại trong năm đều ngập tràn niềm vui.

Người ta nói môi trường Đại học rất rộng lớn, nhưng điều tuyệt vời nhất là mình đã có duyên được gặp và làm bạn với bạn. Nhân ngày 20/10, chúc "bông hoa" tươi thắm của lớp mình luôn giữ trọn nụ cười rạng rỡ trên môi. Mong rằng quãng thời gian sinh viên sắp tới của bạn sẽ trải đầy những kỉ niệm đẹp, luôn gặp được những điều dịu dàng nhất và lúc nào cũng tỏa sáng rực rỡ nhé! 🌷💫`,
        signature: "Best wishes for you ✨"
    },

    // Link truy cập: ?id=3
    "3": {
        name: "Nguyễn Bảo Ngọc", // <-- Thay tên người bạn thứ 3 tại đây
        envelopeTitle: "Món quà tinh thần gửi tới Ngọc 🌷",
        greeting: "Gửi Bảo Ngọc đáng mến,",
        message: `Happy Vietnamese Women's Day 20/10! 

Chúc mừng ngày Phụ nữ Việt Nam 20/10! Chúc bạn nữ mới quen của tớ ngày nào cũng nhận được thật nhiều hoa, nhiều quà và sự nuông chiều. Mong là bước vào chặng đường Đại học này, bạn sẽ luôn xinh đẹp nghiêng nước nghiêng thành, deadline chạy đâu hết đó, thi môn nào qua môn đó với điểm A+ và lúc nào cũng tràn đầy năng lượng tích cực nha! 👑💖`,
        signature: "Thân gửi cậu 💖"
    },

    // Link truy cập: ?id=4
    "4": {
        name: "Đặng Thuỳ Trang", // <-- Thay tên người bạn thứ 4 tại đây
        envelopeTitle: "Gửi Thuỳ Trang ngàn lời chúc tốt đẹp ✨",
        greeting: "Gửi Thuỳ Trang,",
        message: `Nhân dịp 20/10, chúc cô bạn của tớ luôn tươi trẻ, yêu đời và gặp thật nhiều may mắn trong cuộc sống.

Gửi bạn, một mảnh ghép rất dễ thương mới của lớp mình! Ngày 20/10 chúc bạn luôn tươi trẻ, tràn đầy sức sống và luôn cảm thấy ấm áp mỗi khi đến lớp. Dù tụi mình mới bắt đầu hành trình sinh viên cùng nhau, nhưng mong là sắp tới tụi mình sẽ có thêm thật nhiều kỉ niệm đẹp và cùng nhau vượt qua mọi kỳ thi một cách thật rực rỡ. Chúc bạn có một ngày 20/10 thật trọn vẹn và ngọt ngào! 🌿✨`,
        signature: "Chúc mừng 20/10 🌸"
    },

    // Link truy cập: ?id=5
    "5": {
        name: "Vũ Phạm Tường Vi", // <-- Thay tên người bạn thứ 5 tại đây
        envelopeTitle: "Thư mật ngày 20/10 gửi Tường Vi 🎁",
        greeting: "Gửi Tường Vi dịu dàng,",
        message: `Chúc mừng ngày Phụ nữ Việt Nam 20/10! 

Có thể tụi mình chỉ mới biết tên nhau vài ngày qua những buổi lên lớp, nhưng mình vẫn muốn gửi đến bạn những lời chúc ấm áp nhất trong ngày 20/10 này. Chúc bạn luôn là một cô gái rạng ngời, tự tin và tràn đầy hạnh phúc. Cảm ơn sự xuất hiện của bạn đã làm cho không khí lớp mình trở nên ngọt ngào và dễ chịu hơn rất nhiều. Chúc bạn một ngày 20/10 thật tuyệt vời nhé! 💐`,
        signature: "Luôn ủng hộ cậu 💐"
    },

    // NỘI DUNG MẶC ĐỊNH: Hiển thị khi link không có ?id= hoặc id nằm ngoài khoảng 1-5
    "default": {
        name: "Bạn",
        envelopeTitle: "Gửi một nửa thế giới xinh đẹp 🌸",
        greeting: "Chúc mừng ngày Phụ nữ Việt Nam 20/10!",
        message: `Nhân ngày đặc biệt tôn vinh một nửa dịu dàng của thế giới, xin gửi tới bạn những lời chúc tốt đẹp và chân thành nhất!

Có thể tụi mình đã không còn học cùng nhau, nhưng mình vẫn muốn gửi đến bạn những lời chúc ấm áp nhất trong ngày 20/10 này. Chúc bạn luôn là một cô gái rạng ngời, tự tin và tràn đầy hạnh phúc, có những ngày tháng sinh viên thành công. Chúc bạn một ngày 20/10 thật tuyệt vời nhé! 💐 `,
        signature: "Happy Women's Day 20/10 💖"
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