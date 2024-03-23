let started = false;

let luz1 = document.getElementById("luz1");
let luz2 = document.getElementById("luz2");
let luz3 = document.getElementById("luz3");
let luz4 = document.getElementById("luz4");

let temporizador = document.getElementById("temporizador");

let start_time = 4000 + (Math.random() * 3000)

let timestamp_start = 0;
let timestamp_end = 0;

const off_light = "#000000";
const red_light = "#FF0000";
const green_light = "#00FF00";

function reset() {
    timestamp_start = 0;
    let luzes = document.getElementsByClassName("luz");

    for (let i = 0; i < luzes.length; i++) {
        luzes[i].style.backgroundColor = off_light;
    }

}

function iniciar() {
    if (!started) {
        reset();
        temporizador.style.display = "none";
        started = true;

        setTimeout(() => {luz1.style.backgroundColor = red_light;},    0);
        setTimeout(() => {luz2.style.backgroundColor = red_light;}, 1000);
        setTimeout(() => {luz3.style.backgroundColor = red_light;}, 2000);
        setTimeout(() => {luz4.style.backgroundColor = red_light;}, 3000);

        setTimeout(() => {
            luz1.style.backgroundColor = green_light;
            luz2.style.backgroundColor = green_light;
            luz3.style.backgroundColor = green_light;
            luz4.style.backgroundColor = green_light;
            timestamp_start = Date.now();
        }, start_time);
    } else {
        if (timestamp_start > 0) {
            started = false;
        }
    }
}

function marcar_tempo() {
    if (started) {
        if (timestamp_start > 0) {
            timestamp_end = Date.now();

            temporizador.style.display = "block";
            temporizador.innerHTML = `Você reagiu em ${(timestamp_end - timestamp_start) / 1000} segundos!`;
        }
    }
}

