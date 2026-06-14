// PASSWORD
function checkPassword() {
    let password = document.getElementById("password").value;

    let correctPassword = "7years";

    if (password === correctPassword) {
        window.location.href = "home.html";
    } else {
        document.getElementById("error").innerText =
        "Wrong password ❤️";
    }
}

// PAGE NAVIGATION (smooth)
function goToPage(page) {
    document.body.style.opacity = "0";

    setTimeout(() => {
        window.location.href = page;
    }, 400);
}

// LOVE LETTER TYPING
const text = `Mofiyinfoluwa, ❤️

I can't express how much I love you in words, but I'll try my best to show you through my actions and the way I care for you.
You are more than just a friend to me; you are my best of friends, my sister from another mother, and the love of my life. I cherish every moment we spend together, and I am grateful for your presence in my life.

I love you deeply ❤️`;

let i = 0;

function typeLetter() {
    if (i < text.length) {
        document.getElementById("letter").innerHTML += text.charAt(i);
        i++;
        setTimeout(typeLetter, 40);
    }
}