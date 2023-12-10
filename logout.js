document.addEventListener('DOMContentLoaded', function () {
    const savedUsername = localStorage.getItem('username');
    const usernameElement = document.getElementById('username');

    if (savedUsername) {
        usernameElement.textContent = savedUsername;
    }

    document.getElementById('logoutBtn').addEventListener('click', function () {
        const isConfirmed = confirm('Bạn có chắc chắn muốn đăng xuất?');

        if (isConfirmed) {
            // Thực hiện các bước đăng xuất ở đây (ví dụ: xóa token, đưa người dùng về trang đăng nhập, vv.)
            alert('Bạn đã đăng xuất thành công!');

            // Xóa tên đăng nhập khỏi localStorage khi đăng xuất
            localStorage.removeItem('username');

            // Chuyển hướng về trang đăng nhập (hoặc trang khác tùy ý)
            window.location.href = 'login.html';
        }
    });
});
