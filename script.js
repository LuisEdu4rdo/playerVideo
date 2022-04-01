let vidBrunno = document.getElementById("vidBrunno");

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

}

function aumentarTela() {

}
