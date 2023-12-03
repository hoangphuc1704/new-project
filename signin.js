document.getElementById('login-form').addEventListener('submit',function(event){
    event.preventDefault();
    var username= document.getElementById('username').value;
    var password=document.getElementById('password').value;
    if (username == "Tao tên là Đạt" && password=="Nguyễn Thanh Tiến Đạt"){
        //chuyển qua trang chính
        window.location.href="Trang_chinh.html"

    }else{
        alert("Sai tên đăng nhập hoặc sai mật khẩu");
    }
});