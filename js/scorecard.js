//get variables
var course = sessionStorage.getItem("course");
var tee = sessionStorage.getItem("tee");
var players = sessionStorage.getItem("players");
getId();

function getId() {
    if (course == "Thanksgiving Point") {
        var courseId = 11819;
    } else if (course == "Fox Hollow") {
        var courseId = 18300;
    } else if (course == "Spanish Oaks") {
        var courseId = 19002;
    }
    if (tee == "Mens") {
        var Type = 2;
    } else if (tee == "Womens") {
        var Type = 3;
    } else if (tee == "Pro") {
        var Type = 0;
    } else if (tee == "Champion") {
        var Type = 1;
    }
    if (course == "Spanish Oaks") {
        if (tee == "Mens") {
            var Type = 1;
        } else if (tee == "Womens") {
            var Type = 2;
        } else if (tee == "Champion") {
            var Type = 0;
        }
    }
    getAPI(courseId, Type);
}

//api
function getAPI(courseId, Type) {
    let golfApi = new XMLHttpRequest();
    golfApi.open('GET', `https://golf-courses-api.herokuapp.com/courses/${courseId}`, true);
    golfApi.send();
    golfApi.onload = function () {
    if (golfApi.status === 200) {
        let golfObj = JSON.parse(golfApi.responseText).data.holes;
        setStartup(golfObj, Type);
    } else {
        return;
    }
}   
}

function setStartup(golfObj, Type) {
    let GolfCourses = {
        hole1: {
            par: golfObj[0].teeBoxes[0].par,
            yards: golfObj[0].teeBoxes[Type].yards
        },
        hole2: {
            par: golfObj[1].teeBoxes[0].par,
            yards: golfObj[1].teeBoxes[Type].yards
        },
        hole3: {
            par: golfObj[2].teeBoxes[0].par,
            yards: golfObj[2].teeBoxes[Type].yards
        },
        hole4: {
            par: golfObj[3].teeBoxes[0].par,
            yards: golfObj[3].teeBoxes[Type].yards
        },
        hole5: {
            par: golfObj[4].teeBoxes[0].par,
            yards: golfObj[4].teeBoxes[Type].yards
        },
        hole6: {
            par: golfObj[5].teeBoxes[0].par,
            yards: golfObj[5].teeBoxes[Type].yards
        },
        hole7: {
            par: golfObj[6].teeBoxes[0].par,
            yards: golfObj[6].teeBoxes[Type].yards
        },
        hole8: {
            par: golfObj[7].teeBoxes[0].par,
            yards: golfObj[7].teeBoxes[Type].yards
        },
        hole9: {
            par: golfObj[8].teeBoxes[0].par,
            yards: golfObj[8].teeBoxes[Type].yards
        },
        hole10: {
            par: golfObj[9].teeBoxes[0].par,
            yards: golfObj[9].teeBoxes[Type].yards
        },
        hole11: {
            par: golfObj[10].teeBoxes[0].par,
            yards: golfObj[10].teeBoxes[Type].yards
        },
        hole12: {
            par: golfObj[11].teeBoxes[0].par,
            yards: golfObj[11].teeBoxes[Type].yards
        },
        hole13: {
            par: golfObj[12].teeBoxes[0].par,
            yards: golfObj[12].teeBoxes[Type].yards
        },
        hole14: {
            par: golfObj[13].teeBoxes[0].par,
            yards: golfObj[13].teeBoxes[Type].yards
        },
        hole15: {
            par: golfObj[14].teeBoxes[0].par,
            yards: golfObj[14].teeBoxes[Type].yards
        },
        hole16: {
            par: golfObj[15].teeBoxes[0].par,
            yards: golfObj[15].teeBoxes[Type].yards
        },
        hole17: {
            par: golfObj[16].teeBoxes[0].par,
            yards: golfObj[16].teeBoxes[Type].yards
        },
        hole18: {
            par: golfObj[17].teeBoxes[0].par,
            yards: golfObj[17].teeBoxes[Type].yards
        },
    };
    getValues(GolfCourses);
}

//tee
var teeLength = document.getElementById('tee');
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
var pat = document.getElementById('pat');
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
    t1.innerHTML = GolfCourses.hole1.yards;
    t2.innerHTML = GolfCourses.hole2.yards;
    t3.innerHTML = GolfCourses.hole3.yards;
    t4.innerHTML = GolfCourses.hole4.yards;
    t5.innerHTML = GolfCourses.hole5.yards;
    t6.innerHTML = GolfCourses.hole6.yards;
    t7.innerHTML = GolfCourses.hole7.yards;
    t8.innerHTML = GolfCourses.hole8.yards;
    t9.innerHTML = GolfCourses.hole9.yards;
    t10.innerHTML = GolfCourses.hole10.yards;
    t11.innerHTML = GolfCourses.hole11.yards;
    t12.innerHTML = GolfCourses.hole12.yards;
    t13.innerHTML = GolfCourses.hole13.yards;
    t14.innerHTML = GolfCourses.hole14.yards;
    t15.innerHTML = GolfCourses.hole15.yards;
    t16.innerHTML = GolfCourses.hole16.yards;
    t17.innerHTML = GolfCourses.hole17.yards;
    t18.innerHTML = GolfCourses.hole18.yards;
    pai.innerHTML = 36;
    pao.innerHTML = 36;
    pat.innerHTML = 72;
    getTotals();
}

//event listeners
let names = [p1name, p2name, p3name, p4name];

let paOut = [pa1, pa2, pa3, pa4, pa5, pa6, pa7, pa8, pa9];
let paIn = [pa10, pa11, pa12, pa13, pa14, pa15, pa16, pa17, pa18];

let inTee = [t1, t2, t3, t4, t5, t6, t7, t8, t9];
let outTee = [t10, t11, t12, t13, t14, t15, t16, t17, t18];

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

function getTotals() {
    inNum = 0;
    outNum = 0;
    for (let i = 0; i < inTee.length; i++) {
        inNum += Number(inTee[i].innerHTML);
    }
    to.innerHTML = inNum;
    for (let i = 0; i < outTee.length; i++) {
        outNum += Number(outTee[i].innerHTML);
    }
    ti.innerHTML = outNum;
    tt.innerHTML = (Number(to.innerHTML) + Number(to.innerHTML));
}

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
    teeLength.innerHTML = `${tee}<br>Tee<br>(yards)`;
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
        $('#nameModal').modal('show');
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
    var p1OutValue = 0;
    for (let i = 0; i < p1Out.length; i++) {
        p1OutValue += (p1Out[i].value - paOut[i].innerHTML);
    }
    p1o.innerHTML = p1OutValue;
}

function get1In() {
    var p1InValue = 0;
    for (let i = 0; i < p1In.length; i++) {
        p1InValue += (p1In[i].value - paIn[i].innerHTML);
    }
    p1i.innerHTML = p1InValue;
}

function get1Tot() {
    p1t.innerHTML = Number(p1o.innerHTML) + Number(p1i.innerHTML);
}

//2

function get2Out() {
    var p2OutValue = 0;
    for (let i = 0; i < p2Out.length; i++) {
        p2OutValue += (p2Out[i].value - paOut[i].innerHTML);
    }
    p2o.innerHTML = p2OutValue;
}

function get2In() {
    var p2InValue = 0;
    for (let i = 0; i < p2In.length; i++) {
        p2InValue += (p2In[i].value - paIn[i].innerHTML);
    }
    p2i.innerHTML = p2InValue;
}

function get2Tot() {
    p2t.innerHTML = Number(p2o.innerHTML) + Number(p2i.innerHTML);
}

//3

function get3Out() {
    var p3OutValue = 0;
    for (let i = 0; i < p3Out.length; i++) {
        p3OutValue += (p3Out[i].value - paOut[i].innerHTML);
    }
    p3o.innerHTML = p3OutValue;
}

function get3In() {
    var p3InValue = 0;
    for (let i = 0; i < p3In.length; i++) {
        p3InValue += (p3In[i].value - paIn[i].innerHTML);
    }
    p3i.innerHTML = p3InValue;
}

function get3Tot() {
    p3t.innerHTML = Number(p3o.innerHTML) + Number(p3i.innerHTML);
}

//4

function get4Out() {
    var p4OutValue = 0;
    for (let i = 0; i < p4Out.length; i++) {
        p4OutValue += (p4Out[i].value - paOut[i].innerHTML);
    }
    p4o.innerHTML = p4OutValue;
}

function get4In() {
    var p4InValue = 0;
    for (let i = 0; i < p4In.length; i++) {
        p4InValue += (p4In[i].value - paIn[i].innerHTML);
    }
    p4i.innerHTML = p4InValue;
}

function get4Tot() {
    p4t.innerHTML = Number(p4o.innerHTML) + Number(p4i.innerHTML);
}

//end pop ups
function popUp1() {
    var p1InCount = 0;
    var p1OutCount = 0;
    for (let i = 0; i < p1In.length; i++) {
        if (p1In[i].value != "") {
            p1InCount ++;
        }
    }
    for (let i = 0; i < p1Out.length; i++) {
        if (p1Out[i].value != "") {
            p1OutCount ++;
        }
    }
    if (p1InCount == 9 && p1OutCount == 9) {
        if (p1name.value == "") {
            goodName.innerHTML = "Player 1";
            okName.innerHTML = "Player 1";
            badName.innerHTML = "Player 1";
        } else {
            goodName.innerHTML = p1name.value;
            okName.innerHTML = p1name.value;
            badName.innerHTML = p1name.value;
        }
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
    var p2InCount = 0;
    var p2OutCount = 0;
    for (let i = 0; i < p2In.length; i++) {
        if (p2In[i].value != "") {
            p2InCount ++;
        }
    }
    for (let i = 0; i < p2Out.length; i++) {
        if (p2Out[i].value != "") {
            p2OutCount ++;
        }
    }
    if (p2InCount == 9 && p2OutCount == 9) {
        if (p2name.value == "") {
            goodName.innerHTML = "Player 2";
            okName.innerHTML = "Player 2";
            badName.innerHTML = "Player 2";
        } else {
            goodName.innerHTML = p2name.value;
            okName.innerHTML = p2name.value;
            badName.innerHTML = p2name.value;
        }
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
    var p3InCount = 0;
    var p3OutCount = 0;
    for (let i = 0; i < p3In.length; i++) {
        if (p3In[i].value != "") {
            p3InCount ++;
        }
    }
    for (let i = 0; i < p3Out.length; i++) {
        if (p3Out[i].value != "") {
            p3OutCount ++;
        }
    }
    if (p3InCount == 9 && p3OutCount == 9) {
        if (p3name.value == "") {
            goodName.innerHTML = "Player 3";
            okName.innerHTML = "Player 3";
            badName.innerHTML = "Player 3";
        } else {
            goodName.innerHTML = p3name.value;
            okName.innerHTML = p3name.value;
            badName.innerHTML = p3name.value;
        }
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
    var p4InCount = 0;
    var p4OutCount = 0;
    for (let i = 0; i < p4In.length; i++) {
        if (p4In[i].value != "") {
            p4InCount ++;
        }
    }
    for (let i = 0; i < p4Out.length; i++) {
        if (p4Out[i].value != "") {
            p4OutCount ++;
        }
    }
    if (p4InCount == 9 && p4OutCount == 9) {
        if (p4name.value == "") {
            goodName.innerHTML = "Player 4";
            okName.innerHTML = "Player 4";
            badName.innerHTML = "Player 4";
        } else {
            goodName.innerHTML = p4name.value;
            okName.innerHTML = p4name.value;
            badName.innerHTML = p4name.value;
        }
        if (Number(p4t.innerHTML) < 0) {
            $('#goodModal').modal('show');
        } else if (Number(p4t.innerHTML) == 0) {
            $('#okModal').modal('show');
        } else if (Number(p4t.innerHTML) > 0) {
            $('#badModal').modal('show');
        }
    }
}