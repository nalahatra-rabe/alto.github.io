function openNav() {
    document.getElementById("mySidenav").style.width = "250px";
}

function closeNav() {
    document.getElementById("mySidenav").style.width = "0";
}

const player = document.createElement("audio");
var isPlayed = false;

function play(event) {
    const el = event.currentTarget;
    let url = el.getAttribute("data-url");
    if (isPlayed == false) {
        player.src = url;
        isPlayed = true;
    }
    if (player.played == false || player.paused) {
        el.classList.remove("fa-play");
        el.classList.add("fa-pause");
        player.play().then(() => {
            console.log("Audio played!");
        }).catch((err) => {
            console.log("Error", err);
        });
    } else {
        el.classList.remove("fa-pause");
        el.classList.add("fa-play");
        player.pause();
    }
}