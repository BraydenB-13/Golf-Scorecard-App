//get variables
var course = sessionStorage.getItem("course");
var tee = sessionStorage.getItem("tee");
var players = sessionStorage.getItem("players");
console.log(course + ", " + tee + ", " + players + ".");
getId();

function getId() {
    if (course == "Thanksgiving Point") {
        var courseId = 11819;
    } else if (course == "Fox Hollow") {
        var courseId = 18300;
    } else if (course == "Spanish Oaks") {
        var courseId = 19002;
    }
    getAPI(courseId);
}

//api
function getAPI(courseId) {
    let golfApi = new XMLHttpRequest();
    golfApi.open('GET', `https://golf-courses-api.herokuapp.com/courses/${courseId}`, true);
    golfApi.send();
    golfApi.onload = function () {
    if (golfApi.status === 200) {
        let golfObj = JSON.parse(golfApi.responseText).data.holes;
        setStartup(golfObj);
    } else {
        return;
    }
}   
}

function setStartup(golfObj) {
    let GolfCourses = {
        hole1: {
            par: golfObj[0].teeBoxes[0].par
        },
        hole2: {
            par: golfObj[1].teeBoxes[0].par
        },
        hole3: {
            par: golfObj[2].teeBoxes[0].par
        },
        hole4: {
            par: golfObj[3].teeBoxes[0].par
        },
        hole5: {
            par: golfObj[4].teeBoxes[0].par
        },
        hole6: {
            par: golfObj[5].teeBoxes[0].par
        },
        hole7: {
            par: golfObj[6].teeBoxes[0].par
        },
        hole8: {
            par: golfObj[7].teeBoxes[0].par
        },
        hole9: {
            par: golfObj[8].teeBoxes[0].par
        },
        hole10: {
            par: golfObj[9].teeBoxes[0].par
        },
        hole11: {
            par: golfObj[10].teeBoxes[0].par
        },
        hole12: {
            par: golfObj[11].teeBoxes[0].par
        },
        hole13: {
            par: golfObj[12].teeBoxes[0].par
        },
        hole14: {
            par: golfObj[13].teeBoxes[0].par
        },
        hole15: {
            par: golfObj[14].teeBoxes[0].par
        },
        hole16: {
            par: golfObj[15].teeBoxes[0].par
        },
        hole17: {
            par: golfObj[16].teeBoxes[0].par
        },
        hole18: {
            par: golfObj[17].teeBoxes[0].par
        },
    };
   console.log(GolfCourses);
   getValues(GolfCourses);
}

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
var p1name = document.getElementById('p1name');
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
var p2name = document.getElementById('p2name');
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
var p3name = document.getElementById('p3name');
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
var p4name = document.getElementById('p4name');
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

//namespots
var goodPop = document.getElementById('goodPop');
var okPop = document.getElementById('okPop');
var badPop = document.getElementById('badPop');
var matchPop = document.getElementById('matchPop');
var goodName = document.getElementById('goodName');
var okName = document.getElementById('okName');
var badName = document.getElementById('badName');

//values
function getValues(GolfCourses) {
    pa1.innerHTML = GolfCourses.hole1.par;
    pa2.innerHTML = GolfCourses.hole2.par;
    pa3.innerHTML = GolfCourses.hole3.par;
    pa4.innerHTML = GolfCourses.hole4.par;
    pa5.innerHTML = GolfCourses.hole5.par;
    pa6.innerHTML = GolfCourses.hole6.par;
    pa7.innerHTML = GolfCourses.hole7.par;
    pa8.innerHTML = GolfCourses.hole8.par;
    pa9.innerHTML = GolfCourses.hole9.par;
    pa10.innerHTML = GolfCourses.hole10.par;
    pa11.innerHTML = GolfCourses.hole11.par;
    pa12.innerHTML = GolfCourses.hole12.par;
    pa13.innerHTML = GolfCourses.hole13.par;
    pa14.innerHTML = GolfCourses.hole14.par;
    pa15.innerHTML = GolfCourses.hole15.par;
    pa16.innerHTML = GolfCourses.hole16.par;
    pa17.innerHTML = GolfCourses.hole17.par;
    pa18.innerHTML = GolfCourses.hole18.par;
}

//test
var tester = document.getElementById('tester');

tester.addEventListener('click', e => {
    $('#goodModal').modal('show');;
})


//event listeners
let names = [p1name, p2name, p3name, p4name]

let p1Out = [p11, p12, p13, p14, p15, p16, p17, p18, p19];
let p1In = [p110, p111, p112, p113, p114, p115, p116, p117, p118];
let P1All = [p1Out, p1In];

let p2Out = [p21, p22, p23, p24, p25, p26, p27, p28, p29];
let p2In = [p210, p211, p212, p213, p214, p215, p216, p217, p218];
let P2All = [p2Out, p2In];

let p3Out = [p31, p32, p33, p34, p35, p36, p37, p38, p39];
let p3In = [p310, p311, p312, p313, p314, p315, p316, p317, p318];
let P3All = [p3Out, p3In];

let p4Out = [p41, p42, p43, p44, p45, p46, p47, p48, p49];
let p4In = [p410, p411, p412, p413, p414, p415, p416, p417, p418];
let P4All = [p4Out, p4In];

P1All.forEach(function(eleme) {
    eleme.forEach(function(elem) {
        elem.addEventListener('change', e => {
            get1Out();
            get1In();
            get1Tot();
            popUp1();
        })
    })
})

P2All.forEach(function(eleme) {
    eleme.forEach(function(elem) {
        elem.addEventListener('change', e => {
            get2Out();
            get2In();
            get2Tot();
            popUp2();
        })
    })
})

P3All.forEach(function(eleme) {
    eleme.forEach(function(elem) {
        elem.addEventListener('change', e => {
            get3Out();
            get3In();
            get3Tot();
            popUp3();
        })
    })
})

P4All.forEach(function(eleme) {
    eleme.forEach(function(elem) {
        elem.addEventListener('change', e => {
            get4Out();
            get4In();
            get4Tot();
            popUp4();
        })
    })
})

names.forEach(function(elem) {
    elem.addEventListener('change', e => {
        checkMatch();
    })
})

//function calls
setTee();
setPlayers();

//functions
function setTee() {
    teeType.innerHTML = `${tee}<br>Tee`;
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

//no matching names
function checkMatch() {
    if (p1name.value == p2name.value && (p1name.value != "" || p2name.value != "")) {
        $('.alert').alert();
        p2name.value = "";
    } else if (p1name.value == p3name.value && (p1name.value != "" || p3name.value != "")) {
        $('#nameModal').modal('show');
        p3name.value = "";
    } else if (p1name.value == p4name.value && (p1name.value != "" || p4name.value != "")) {
        $('#nameModal').modal('show');
        p4name.value = "";
    } else if (p2name.value == p3name.value && (p2name.value != "" || p3name.value != "")) {
        $('#nameModal').modal('show');
        p3name.value = "";
    } else if (p2name.value == p4name.value && (p2name.value != "" || p4name.value != "")) {
        $('#nameModal').modal('show');
        p4name.value = "";
    } else if (p3name.value == p4name.value && (p3name.value != "" || p4name.value != "")) {
        $('#nameModal').modal('show');
        p4name.value = "";
    }
}

//p1 event functions
function get1Out() {
    p1o.innerHTML = (p11.value - pa1.innerHTML) + (p12.value - pa2.innerHTML) + (p13.value - pa3.innerHTML) + (p14.value - pa4.innerHTML) + (p15.value - pa5.innerHTML) + (p16.value - pa6.innerHTML) + (p17.value - pa7.innerHTML) + (p18.value - pa8.innerHTML) + (p19.value - pa9.innerHTML);
}

function get1In() {
    p1i.innerHTML = (p110.value - pa10.innerHTML) + (p111.value - pa11.innerHTML) + (p112.value - pa12.innerHTML) + (p113.value - pa13.innerHTML) + (p114.value - pa14.innerHTML) + (p115.value - pa15.innerHTML) + (p116.value - pa16.innerHTML) + (p117.value - pa17.innerHTML) + (p118.value - pa18.innerHTML);
}

function get1Tot() {
    p1t.innerHTML = Number(p1o.innerHTML) + Number(p1i.innerHTML);
}

//2

function get2Out() {
    p2o.innerHTML = (p21.value - pa2.innerHTML) + (p22.value - pa2.innerHTML) + (p23.value - pa3.innerHTML) + (p24.value - pa4.innerHTML) + (p25.value - pa5.innerHTML) + (p26.value - pa6.innerHTML) + (p27.value - pa7.innerHTML) + (p28.value - pa8.innerHTML) + (p29.value - pa9.innerHTML);
}

function get2In() {
    p2i.innerHTML = (p210.value - pa10.innerHTML) + (p211.value - pa11.innerHTML) + (p212.value - pa12.innerHTML) + (p213.value - pa13.innerHTML) + (p214.value - pa14.innerHTML) + (p215.value - pa15.innerHTML) + (p216.value - pa16.innerHTML) + (p217.value - pa17.innerHTML) + (p218.value - pa18.innerHTML);
}

function get2Tot() {
    p2t.innerHTML = Number(p2o.innerHTML) + Number(p2i.innerHTML);
}

//3

function get3Out() {
    p3o.innerHTML = (p31.value - pa1.innerHTML) + (p32.value - pa2.innerHTML) + (p33.value - pa3.innerHTML) + (p34.value - pa4.innerHTML) + (p35.value - pa5.innerHTML) + (p36.value - pa6.innerHTML) + (p37.value - pa7.innerHTML) + (p38.value - pa8.innerHTML) + (p39.value - pa9.innerHTML);
}

function get3In() {
    p3i.innerHTML = (p310.value - pa10.innerHTML) + (p311.value - pa11.innerHTML) + (p312.value - pa12.innerHTML) + (p313.value - pa13.innerHTML) + (p314.value - pa14.innerHTML) + (p315.value - pa15.innerHTML) + (p316.value - pa16.innerHTML) + (p317.value - pa17.innerHTML) + (p318.value - pa18.innerHTML);
}

function get3Tot() {
    p3t.innerHTML = Number(p3o.innerHTML) + Number(p3i.innerHTML);
}

//4

function get4Out() {
    p4o.innerHTML = (p41.value - pa1.innerHTML) + (p42.value - pa2.innerHTML) + (p43.value - pa3.innerHTML) + (p44.value - pa4.innerHTML) + (p45.value - pa5.innerHTML) + (p46.value - pa6.innerHTML) + (p47.value - pa7.innerHTML) + (p48.value - pa8.innerHTML) + (p49.value - pa9.innerHTML);
}

function get4In() {
    p4i.innerHTML = (p410.value - pa10.innerHTML) + (p411.value - pa11.innerHTML) + (p412.value - pa12.innerHTML) + (p413.value - pa13.innerHTML) + (p414.value - pa14.innerHTML) + (p415.value - pa15.innerHTML) + (p416.value - pa16.innerHTML) + (p417.value - pa17.innerHTML) + (p418.value - pa18.innerHTML);
}

function get4Tot() {
    p4t.innerHTML = Number(p4o.innerHTML) + Number(p4i.innerHTML);
}

//end pop ups
function popUp1() {
    if (p11.value != "" && p12.value != "" && p13.value != "" && p14.value != "" && p15.value != "" && p16.value != "" && p17.value != "" && p18.value != "" && p19.value != "" && p110.value != "" && p111.value != "" && p112.value != "" && p113.value != "" && p114.value != "" && p115.value != "" && p116.value != "" && p117.value != "" && p118.value != "") {
        goodName.innerHTML = p1name.value;
        okName.innerHTML = p1name.value;
        badName.innerHTML = p1name.value;
        if (Number(p1t.innerHTML) < 0) {
            $('#goodModal').modal('show');
        } else if (Number(p1t.innerHTML) == 0) {
            $('#okModal').modal('show');
        } else if (Number(p1t.innerHTML) > 0) {
            $('#badModal').modal('show');
        }
    }
}

function popUp2() {
    if (p21.value != "" && p22.value != "" && p23.value != "" && p24.value != "" && p25.value != "" && p26.value != "" && p27.value != "" && p28.value != "" && p29.value != "" && p210.value != "" && p211.value != "" && p212.value != "" && p213.value != "" && p214.value != "" && p215.value != "" && p216.value != "" && p217.value != "" && p218.value != "") {
        goodName.innerHTML = p2name.value;
        okName.innerHTML = p2name.value;
        badName.innerHTML = p2name.value;
        if (Number(p2t.innerHTML) < 0) {
            $('#goodModal').modal('show');
        } else if (Number(p2t.innerHTML) == 0) {
            $('#okModal').modal('show');
        } else if (Number(p2t.innerHTML) > 0) {
            $('#badModal').modal('show');
        }
    }
}

function popUp3() {
    if (p31.value != "" && p32.value != "" && p33.value != "" && p34.value != "" && p35.value != "" && p36.value != "" && p37.value != "" && p38.value != "" && p39.value != "" && p310.value != "" && p311.value != "" && p312.value != "" && p313.value != "" && p314.value != "" && p315.value != "" && p316.value != "" && p317.value != "" && p318.value != "") {
        goodName.innerHTML = p3name.value;
        okName.innerHTML = p3name.value;
        badName.innerHTML = p3name.value;
        if (Number(p3t.innerHTML) < 0) {
            $('#goodModal').modal('show');
        } else if (Number(p3t.innerHTML) == 0) {
            $('#okModal').modal('show');
        } else if (Number(p3t.innerHTML) > 0) {
            $('#badModal').modal('show');
        }
    }
}

function popUp4() {
    if (p41.value != "" && p42.value != "" && p43.value != "" && p44.value != "" && p45.value != "" && p46.value != "" && p47.value != "" && p48.value != "" && p49.value != "" && p410.value != "" && p411.value != "" && p412.value != "" && p413.value != "" && p414.value != "" && p415.value != "" && p416.value != "" && p417.value != "" && p418.value != "") {
        goodName.innerHTML = p4name.value;
        okName.innerHTML = p4name.value;
        badName.innerHTML = p4name.value;
        if (Number(p4t.innerHTML) < 0) {
            $('#goodModal').modal('show');
        } else if (Number(p4t.innerHTML) == 0) {
            $('#okModal').modal('show');
        } else if (Number(p4t.innerHTML) > 0) {
            $('#badModal').modal('show');
        }
    }
}