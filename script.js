function unlockPage() {

    let password = document.getElementById("password").value;

    if (password === "love") {
        document.getElementById("login-box").style.display = "none";
        document.getElementById("main-content").style.display = "block";
    } else {
        alert("Wrong secret word ❤️");
    }
}

function openLetter() {
    document.getElementById("letter").classList.toggle("hidden");
}

function playMusic() {
    document.getElementById("music").play();
}

function createHeart() {

    let heart = document.createElement("div");

    heart.classList.add("heart");
    heart.innerHTML = "❤️";

    heart.style.left = Math.random() * 100 + "vw";

    document.body.appendChild(heart);

    setTimeout(() => {
        heart.remove();
    }, 5000);
}

setInterval(createHeart, 400);