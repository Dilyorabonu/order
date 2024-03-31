function login() {
    const username = prompt("Username kiriting:");
    const password = prompt("Password kiriting:");

    if (username === "username" && password === "password") {
        window.location.href = "index2.html";
    } else {
        alert("Xatolik yuz berdi. Qaytadan urining");
    }
}

login();