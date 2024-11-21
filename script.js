document.getElementById('loginForm').addEventListener('submit', function(event) {  
    event.preventDefault(); // Mencegah pengiriman form  

    const username = document.getElementById('username').value;  
    const password = document.getElementById('password').value;  

    // Validasi sederhana  
    if (username === "admin" && password === "password") {  
        // Jika login berhasil, pindah ke halaman menu  
        window.location.href = "menu.html";  
    } else {  
        alert("Username atau password salah!");  
    }  
});