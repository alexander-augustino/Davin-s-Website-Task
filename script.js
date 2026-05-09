// Menunggu seluruh halaman selesai dimuat
document.addEventListener('DOMContentLoaded', () => {
    console.log("Alexander Augustino Project Website Loaded!");

    // Efek Typing Sederhana di Console
    const welcomeMsg = "Selamat Datang di Alexander Augustino Project!";
    console.log("%c" + welcomeMsg, "color: #1e3c72; font-size: 20px; font-weight: bold;");

    // Contoh: Tambahkan efek klik pada setiap item list di Achievement
    const listItems = document.querySelectorAll('li');
    listItems.forEach(item => {
        item.addEventListener('click', () => {
            console.log("Kamu mengklik milestone: " + item.innerText);
        });
    });
});

// Fungsi untuk mengganti warna navbar saat scroll (Biar makin pro)
window.onscroll = function() {
    const nav = document.querySelector('nav');
    if (window.pageYOffset > 50) {
        nav.style.padding = "10px 0";
        nav.style.backgroundColor = "#162b50";
    } else {
        nav.style.padding = "20px 0";
        nav.style.backgroundColor = "#1e3c72";
    }
};