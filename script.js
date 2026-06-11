const music = document.getElementById("music");

function showMenu(){

    document
    .getElementById("welcome")
    .classList.remove("active");

    document
    .getElementById("menu")
    .classList.add("active");
}

function openGallery(){

    document
    .getElementById("menu")
    .classList.remove("active");

    document
    .getElementById("gallery")
    .classList.add("active");

    music.play();
}

function openNote(){

    document
    .getElementById("menu")
    .classList.remove("active");

    document
    .getElementById("note")
    .classList.add("active");

    music.play();
}

/* BUNGA JATUH */

function createFlower(){

    const flower =
    document.createElement("div");

    flower.classList.add("flower");

    const flowers = [
        "🌹",
        "🌺",
        "🌸",
        "💖"
    ];

    flower.innerHTML =
    flowers[
        Math.floor(
            Math.random() * flowers.length
        )
    ];

    flower.style.left =
    Math.random()*100 + "vw";

    flower.style.fontSize =
    (20 + Math.random()*20) + "px";

    flower.style.animationDuration =
    (5 + Math.random()*5) + "s";

    document.body.appendChild(flower);

    setTimeout(()=>{
        flower.remove();
    },10000);
}

setInterval(createFlower,300);
