let vidBrunno = document.getElementById("vidBrunno");
let playPause = document.getElementById("playPause");
let mute = document.getElementById("mute");
let unmute = document.getElementById("unmute");

vidBrunno.addEventListener('playing', function () {
    playPause.src = "/assets/button/pause.svg"
})

vidBrunno.addEventListener('pause', function () {
    playPause.src = "/assets/button/play.svg"
})

vidBrunno.addEventListener('click', playPauseBtn)

function playPauseBtn() {
    if (vidBrunno.paused) {
        vidBrunno.play()
        playPause.src = "/assets/button/pause.svg"
    }
    else {
        vidBrunno.pause()
        playPause.src = "/assets/button/play.svg"
    }
}

function recarregar() {
    vidBrunno.load();

}

function retroceder() {
    vidBrunno.currentTime -= 15;
}

function avancar() {
    vidBrunno.currentTime += 15;
}

function aumentarTela() {
   
}

function mutar() {
    vidBrunno.muted = true;
}

function desmutar() {
    vidBrunno.muted = false;
}
