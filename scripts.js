const mainbox = document.getElementById("main");
let canClickBox = false;

const pumpkin_button = document.getElementById("pumpkin");
const witch_sound = new Audio("Assets/witch-laughing.mp3");
witch_sound.volume = 0.3;

const bat_sound = new Audio("Assets/bat-chirping.mp3");
bat_sound.volume = 0.1;

const card = document.getElementById("card")
const card_sound = new Audio("Assets/flipping-page.mp3")
card_sound.volume = 0.2

function createBat() {
    const batElement = document.createElement("img");
    const random_X = Math.random() * 90;
    const random_scale = 0.05 + Math.random() * 0.07;

    batElement.classList.add("batEffect");
    batElement.src = "Assets/bat.webp";
    batElement.style.scale = random_scale;
    batElement.style.left = random_X + "vw";
    document.body.appendChild(batElement);

    batElement.addEventListener("animationend", () => batElement.remove());
}

function openCard() {
    canClickBox = true;
    mainbox.style.backgroundColor = "rgb(0, 0, 0, 0.5)";
    card.style.display = "flex";
    card_sound.play();
}

function closeCard() {
    canClickBox = false;
    mainbox.style.backgroundColor = "rgb(255, 115, 0, 0)";
    card.style.display = "none";
    card_sound.play();
}

let canClick = true;
const sleep = (ms) => new Promise(resolve => setTimeout(resolve, ms));

pumpkin_button.addEventListener("click", async () => {
    if (!canClick) return;
    canClick = false;
    
    witch_sound.currentTime = 0;
    witch_sound.play();
    bat_sound.currentTime = 0;
    bat_sound.play();

    for (let i = 1; i <= 400; i++) {
        createBat();
        await sleep(10);
    }
    
    openCard();
    canClick = true;
});

mainbox.addEventListener("click", () => {
    if (!canClickBox) return;
    closeCard();
});