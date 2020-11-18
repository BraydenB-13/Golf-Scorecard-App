const start = document.getElementById('start');

start.addEventListener('click', e => {
    var course = document.getElementById('course').value;
    var tee = document.getElementById('tee').value;
    var players = document.getElementById('players').value;
    if (course == "Spanish Oaks" && tee == "Pro") {
        $('#proModal').modal('show');
    } else {
    sessionStorage.setItem("course", course);
    sessionStorage.setItem("tee", tee);
    sessionStorage.setItem("players", players);
    window.location.href = "./scorecard.html";
    }
})