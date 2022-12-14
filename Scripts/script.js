let vidBrunno = document.getElementById("vidBrunno");
let playPause = document.getElementById("playPause");
let controle = document.getElementsByClassName("controle");

// //mudar botão play/pause
vidBrunno.addEventListener('playing', function(){
    playPause.src ='./'
})

// video.addEventListener('playing', function(){
//     playPause.src = "./Assets/icons/pause.png"
//   })
  
//   video.addEventListener('pause', function(){
//     playPause.src = "./Assets/icons/play.png"
//   })
  
//   video.addEventListener('click', playP)

// playPause.addEventListener('click', playP)

// function playP(){
//   if(video.paused) {
//     video.play()
//     playPause.src = "./Assets/icons/pause.png"
//   } else {
//     video.pause()
//     playPause.src = "./Assets/icons/play.png"
//   }
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


