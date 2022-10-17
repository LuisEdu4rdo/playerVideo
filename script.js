let vidBrunno = document.getElementById("vidBrunno");
let playPause = document.getElementById("playPause");

// //mudar botão play/pause

// function playPause () {
//     if(vidBrunno.paused){
//         vidBrunno.play();
//         playPause.src = "/assets/button/pause.svg"
//     }else{
//         vidBrunno.pause();
//         playPause.src = "/assets/button/play.svg"
//     }
// }

function recarregar() {
    vidBrunno.load();

}

function retroceder() {
    vidBrunno.currentTime -= 15;
}

function play() {
    vidBrunno.play();
}

function pause() {
    vidBrunno.pause();
}

function avancar() {
    vidBrunno.currentTime += 15;
}

function mutar() {
   vidBrunno.muted = true;    
}

function aumentarTela() {

}


