// وقتی روی دکمه کلیک شود، پیام خوش‌آمدگویی نمایش داده می‌شود
function sayHello() {
    alert("سلام! به سایت من خوش آمدی!");
}
document.getElementById("signupForm").addEventListener("submit", function(event) {
    event.preventDefault();
    
    let username = document.getElementById("username").value;
    let email = document.getElementById("email").value;
    let password = document.getElementById("password").value;
    
    if (username && email && password) {
        document.getElementById("message").innerText = "ثبت‌نام موفقیت‌آمیز بود!";
    } else {
        document.getElementById("message").innerText = "لطفاً همه فیلدها را پر کنید.";
    }
});