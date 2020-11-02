const start = document.getElementById('start');

start.addEventListener('click', e => {
    var course = document.getElementById('course').value;
    var players = document.getElementById('players').value;
    sessionStorage.setItem("course", course);
    sessionStorage.setItem("players", players);
    console.log(course + ", " + players);
    window.location.href = "./scorecard.html";
})