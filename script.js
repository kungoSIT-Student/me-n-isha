/* =========================
   LOADING SCREEN
========================= */

window.addEventListener("load", () => {

    setTimeout(() => {

        document.getElementById("loader").style.display = "none";

    }, 2500);

});

/* =========================
   MUSIC BUTTON
========================= */

const music =
document.getElementById("music");

const musicBtn =
document.getElementById("musicBtn");

musicBtn.addEventListener("click", () => {

    if (music.paused) {

        music.play();

        musicBtn.innerHTML = "⏸";

    } else {

        music.pause();

        musicBtn.innerHTML = "🎵";

    }

});

/* =========================
   DAYS TOGETHER COUNTER
========================= */

const startDate =
new Date("2025-06-16");

function updateLoveCounter() {

    const now =
    new Date();

    const difference =
    now - startDate;

    const days =
    Math.floor(
        difference /
        (1000 * 60 * 60 * 24)
    );

    document.getElementById(
        "daysTogether"
    ).innerHTML =
    days + " Days Together ❤️";

}

updateLoveCounter();

/* =========================
   FLOATING HEARTS
========================= */

setInterval(() => {

    const heart =
    document.createElement("div");

    heart.classList.add("heart");

    heart.innerHTML = "❤️";

    heart.style.left =
    Math.random() * 100 + "vw";

    heart.style.top =
    "100vh";

    heart.style.fontSize =
    (20 + Math.random() * 20) + "px";

    document.body.appendChild(
        heart
    );

    setTimeout(() => {

        heart.remove();

    }, 6000);

}, 500);

/* =========================
   FALLING PETALS
========================= */

setInterval(() => {

    const petal =
    document.createElement("div");

    petal.classList.add("petal");

    petal.innerHTML = "🌸";

    petal.style.left =
    Math.random() * 100 + "vw";

    petal.style.top =
    "-50px";

    petal.style.fontSize =
    (15 + Math.random() * 20) + "px";

    document.body.appendChild(
        petal
    );

    setTimeout(() => {

        petal.remove();

    }, 8000);

}, 700);

/* =========================
   SURPRISE MESSAGE
========================= */

function showMessage() {

    document.getElementById(
        "finalMessage"
    ).innerHTML =

    `
    I would choose you
    again and again,
    in every lifetime. ❤️
    `;

}

/* =========================
   SCROLL ANIMATION
========================= */

const observer =
new IntersectionObserver(

(entries) => {

entries.forEach(entry => {

if(entry.isIntersecting){

entry.target.style.opacity = "1";

entry.target.style.transform =
"translateY(0px)";

}

});

},

{
threshold:0.2
}

);

const sections =
document.querySelectorAll(
".glass-section, .timeline-card, .reason-card"
);

sections.forEach(section => {

section.style.opacity = "0";

section.style.transform =
"translateY(40px)";

section.style.transition =
"all .8s ease";

observer.observe(section);

}
);