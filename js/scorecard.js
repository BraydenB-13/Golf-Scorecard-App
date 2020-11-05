//get variables
var course = sessionStorage.getItem("course");
var tee = sessionStorage.getItem("tee");
var players = sessionStorage.getItem("players");
console.log(course + ", " + tee + ", " + players + ".");

//tee
var teeType = document.getElementById('tee');
var t1 = document.getElementById('t1');
var t2 = document.getElementById('t2');
var t3 = document.getElementById('t3');
var t4 = document.getElementById('t4');
var t5 = document.getElementById('t5');
var t6 = document.getElementById('t6');
var t7 = document.getElementById('t7');
var t8 = document.getElementById('t8');
var t9 = document.getElementById('t9');
var to = document.getElementById('to');
var t10 = document.getElementById('t10');
var t11 = document.getElementById('t11');
var t12 = document.getElementById('t12');
var t13 = document.getElementById('t13');
var t14 = document.getElementById('t14');
var t15 = document.getElementById('t15');
var t16 = document.getElementById('t16');
var t17 = document.getElementById('t17');
var t18 = document.getElementById('t18');
var ti = document.getElementById('ti');
var tt = document.getElementById('tt');
var th = document.getElementById('th');
var tn = document.getElementById('tn');

//pars
var pa1 = document.getElementById('pa1');
var pa2 = document.getElementById('pa2');
var pa3 = document.getElementById('pa3');
var pa4 = document.getElementById('pa4');
var pa5 = document.getElementById('pa5');
var pa6 = document.getElementById('pa6');
var pa7 = document.getElementById('pa7');
var pa8 = document.getElementById('pa8');
var pa9 = document.getElementById('pa9');
var pao = document.getElementById('pao');
var pa10 = document.getElementById('pa10');
var pa11 = document.getElementById('pa11');
var pa12 = document.getElementById('pa12');
var pa13 = document.getElementById('pa13');
var pa14 = document.getElementById('pa14');
var pa15 = document.getElementById('pa15');
var pa16 = document.getElementById('pa16');
var pa17 = document.getElementById('pa17');
var pa18 = document.getElementById('pa18');
var pai = document.getElementById('pai');
var pat = document.getElementById('pay');
var pah = document.getElementById('pah');
var pan = document.getElementById('pan');

//p1
var p11 = document.getElementById('p11');
var p12 = document.getElementById('p12');
var p13 = document.getElementById('p13');
var p14 = document.getElementById('p14');
var p15 = document.getElementById('p15');
var p16 = document.getElementById('p16');
var p17 = document.getElementById('p17');
var p18 = document.getElementById('p18');
var p19 = document.getElementById('p19');
var p1o = document.getElementById('p1o');
var p110 = document.getElementById('p110');
var p111 = document.getElementById('p111');
var p112 = document.getElementById('p112');
var p113 = document.getElementById('p113');
var p114 = document.getElementById('p114');
var p115 = document.getElementById('p115');
var p116 = document.getElementById('p116');
var p117 = document.getElementById('p117');
var p118 = document.getElementById('p118');
var p1i = document.getElementById('p1i');
var p1t = document.getElementById('p1t');
var p1h = document.getElementById('p1h');
var p1n = document.getElementById('p1n');

//p2
var p21 = document.getElementById('p21');
var p22 = document.getElementById('p22');
var p23 = document.getElementById('p23');
var p24 = document.getElementById('p24');
var p25 = document.getElementById('p25');
var p26 = document.getElementById('p26');
var p27 = document.getElementById('p27');
var p28 = document.getElementById('p28');
var p29 = document.getElementById('p29');
var p2o = document.getElementById('p2o');
var p210 = document.getElementById('p210');
var p211 = document.getElementById('p211');
var p212 = document.getElementById('p212');
var p213 = document.getElementById('p213');
var p214 = document.getElementById('p214');
var p215 = document.getElementById('p215');
var p216 = document.getElementById('p216');
var p217 = document.getElementById('p217');
var p218 = document.getElementById('p218');
var p2i = document.getElementById('p2i');
var p2t = document.getElementById('p2t');
var p2h = document.getElementById('p2h');
var p2n = document.getElementById('p2n');

//p3
var p31 = document.getElementById('p31');
var p32 = document.getElementById('p32');
var p33 = document.getElementById('p33');
var p34 = document.getElementById('p34');
var p35 = document.getElementById('p35');
var p36 = document.getElementById('p36');
var p37 = document.getElementById('p37');
var p38 = document.getElementById('p38');
var p39 = document.getElementById('p39');
var p3o = document.getElementById('p3o');
var p310 = document.getElementById('p310');
var p311 = document.getElementById('p311');
var p312 = document.getElementById('p312');
var p313 = document.getElementById('p313');
var p314 = document.getElementById('p314');
var p315 = document.getElementById('p315');
var p316 = document.getElementById('p316');
var p317 = document.getElementById('p317');
var p318 = document.getElementById('p318');
var p3i = document.getElementById('p3i');
var p3t = document.getElementById('p3t');
var p3h = document.getElementById('p3h');
var p3n = document.getElementById('p3n');

//p4
var p41 = document.getElementById('p41');
var p42 = document.getElementById('p42');
var p43 = document.getElementById('p43');
var p44 = document.getElementById('p44');
var p45 = document.getElementById('p45');
var p46 = document.getElementById('p46');
var p47 = document.getElementById('p47');
var p48 = document.getElementById('p48');
var p49 = document.getElementById('p49');
var p4o = document.getElementById('p4o');
var p410 = document.getElementById('p410');
var p411 = document.getElementById('p411');
var p412 = document.getElementById('p412');
var p413 = document.getElementById('p413');
var p414 = document.getElementById('p414');
var p415 = document.getElementById('p415');
var p416 = document.getElementById('p416');
var p417 = document.getElementById('p417');
var p418 = document.getElementById('p418');
var p4i = document.getElementById('p4i');
var p4t = document.getElementById('p4t');
var p4h = document.getElementById('p4h');
var p4n = document.getElementById('p4n');

//handicap
var h1 = document.getElementById('h1');
var h2 = document.getElementById('h2');
var h3 = document.getElementById('h3');
var h4 = document.getElementById('h4');
var h5 = document.getElementById('h5');
var h6 = document.getElementById('h6');
var h7 = document.getElementById('h7');
var h8 = document.getElementById('h8');
var h9 = document.getElementById('h9');
var ho = document.getElementById('ho');
var h10 = document.getElementById('h10');
var h11 = document.getElementById('h11');
var h12 = document.getElementById('h12');
var h13 = document.getElementById('h13');
var h14 = document.getElementById('h14');
var h15 = document.getElementById('h15');
var h16 = document.getElementById('h16');
var h17 = document.getElementById('h17');
var h18 = document.getElementById('h18');
var hi = document.getElementById('hi');
var ht = document.getElementById('ht');
var hh = document.getElementById('hh');
var hn = document.getElementById('hn');

//api

//function calls
setTee();
setPlayers();
setPar();

//functions
function setTee() {
    if (tee == "Mens") {
        teeType.innerHTML = "Mens<br>Tee";
    } else if (tee == "Womens") {
        teeType.innerHTML = "Womens<br>Tee";
    } else if (tee == "Pro") {
        teeType.innerHTML = "Pro<br>Tee";
    } else if (tee == "Champion") {
        teeType.innerHTML = "Champion<br>Tee";
    }
}

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

    } else if (course == "Fox Hollow") {

    } else if (course == "Spanish Oaks") {

    }
}