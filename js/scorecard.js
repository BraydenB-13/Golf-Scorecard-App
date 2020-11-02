//get variables
var course = sessionStorage.getItem("course");
var players = sessionStorage.getItem("players");
console.log(course + ", " + players);

//mens
var m1 = document.getElementById('m1');
var m2 = document.getElementById('m2');
var m3 = document.getElementById('m3');
var m4 = document.getElementById('m4');
var m5 = document.getElementById('m5');
var m6 = document.getElementById('m6');
var m7 = document.getElementById('m7');
var m8 = document.getElementById('m8');
var mo = document.getElementById('mo');

//womens
var w1 = document.getElementById('w1');
var w2 = document.getElementById('w2');
var w3 = document.getElementById('w3');
var w4 = document.getElementById('w4');
var w5 = document.getElementById('w5');
var w6 = document.getElementById('w6');
var w7 = document.getElementById('w7');
var w8 = document.getElementById('w8');
var wo = document.getElementById('wo');

//pro
var pr1 = document.getElementById('pr1');
var pr2 = document.getElementById('pr2');
var pr3 = document.getElementById('pr3');
var pr4 = document.getElementById('pr4');
var pr5 = document.getElementById('pr5');
var pr6 = document.getElementById('pr6');
var pr7 = document.getElementById('pr7');
var pr8 = document.getElementById('pr8');
var pro = document.getElementById('pro');

//champion
var c1 = document.getElementById('c1');
var c2 = document.getElementById('c2');
var c3 = document.getElementById('c3');
var c4 = document.getElementById('c4');
var c5 = document.getElementById('c5');
var c6 = document.getElementById('c6');
var c7 = document.getElementById('c7');
var c8 = document.getElementById('c8');
var co = document.getElementById('co');

//pars
var pa1 = document.getElementById('pa1');
var pa2 = document.getElementById('pa2');
var pa3 = document.getElementById('pa3');
var pa4 = document.getElementById('pa4');
var pa5 = document.getElementById('pa5');
var pa6 = document.getElementById('pa6');
var pa7 = document.getElementById('pa7');
var pa8 = document.getElementById('pa8');
var pao = document.getElementById('pao');

//p1
var p11 = document.getElementById('p11');
var p12 = document.getElementById('p12');
var p13 = document.getElementById('p13');
var p14 = document.getElementById('p14');
var p15 = document.getElementById('p15');
var p16 = document.getElementById('p16');
var p17 = document.getElementById('p17');
var p18 = document.getElementById('p18');
var p1o = document.getElementById('p1o');

//p2
var p21 = document.getElementById('p21');
var p22 = document.getElementById('p22');
var p23 = document.getElementById('p23');
var p24 = document.getElementById('p24');
var p25 = document.getElementById('p25');
var p26 = document.getElementById('p26');
var p27 = document.getElementById('p27');
var p28 = document.getElementById('p28');
var p2o = document.getElementById('p2o');

//p3
var p31 = document.getElementById('p31');
var p32 = document.getElementById('p32');
var p33 = document.getElementById('p33');
var p34 = document.getElementById('p34');
var p35 = document.getElementById('p35');
var p36 = document.getElementById('p36');
var p37 = document.getElementById('p37');
var p38 = document.getElementById('p38');
var p3o = document.getElementById('p3o');

//p4
var p41 = document.getElementById('p41');
var p42 = document.getElementById('p42');
var p43 = document.getElementById('p43');
var p44 = document.getElementById('p44');
var p45 = document.getElementById('p45');
var p46 = document.getElementById('p46');
var p47 = document.getElementById('p47');
var p48 = document.getElementById('p48');
var p4o = document.getElementById('p4o');

//handicap
var h1 = document.getElementById('h1');
var h2 = document.getElementById('h2');
var h3 = document.getElementById('h3');
var h4 = document.getElementById('h4');
var h5 = document.getElementById('h5');
var h6 = document.getElementById('h6');
var h7 = document.getElementById('h7');
var h8 = document.getElementById('h8');
var ho = document.getElementById('ho');

setPlayers();
setPar();

//functions
function setPlayers() {
    if (players == 1) {
        document.getElementById('2').style.display = "none";
        document.getElementById('3').style.display = "none";
        document.getElementById('4').style.display = "none";
        document.getElementById('6').style.display = "none";
        document.getElementById('7').style.display = "none";
        document.getElementById('8').style.display = "none";
    } else if (players == 2) {
        document.getElementById('3').style.display = "none";
        document.getElementById('4').style.display = "none";
        document.getElementById('7').style.display = "none";
        document.getElementById('8').style.display = "none";
    } else if (players == 3) {
        document.getElementById('4').style.display = "none";
        document.getElementById('8').style.display = "none";
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