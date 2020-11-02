//get variables
var course = sessionStorage.getItem("course");
var players = sessionStorage.getItem("players");
console.log(course + ", " + players);

//mens

//womens

//pro

//champion

//pars
var pa1 = document.getElementById('pa-1');
var pa2 = document.getElementById('pa-2');
var pa3 = document.getElementById('pa-3');
var pa4 = document.getElementById('pa-4');
var pa5 = document.getElementById('pa-5');
var pa6 = document.getElementById('pa-6');
var pa7 = document.getElementById('pa-7');
var pa8 = document.getElementById('pa-8');
var pao = document.getElementById('pa-o');

//p1

//p2

//p3

//p4

//handicap

setPlayers();
setPar();

//functions
function setPlayers() {
    if (players == 1) {
        document.getElementById('2').style.display = "none";
        document.getElementById('3').style.display = "none";
        document.getElementById('4').style.display = "none";
    } else if (players == 2) {
        document.getElementById('3').style.display = "none";
        document.getElementById('4').style.display = "none";
    } else if (players == 3) {
        document.getElementById('4').style.display = "none";
    }
}

function setPar() {
    if (course == "Thanksgiving Point") {
        pa1.innerHTML = 1;
    } else if (course == "Fox Hollow") {
        pa1.innerHTML = 2;
    } else if (course == "Spanish Oaks") {
        pa1.innerHTML = 3;
    }
}