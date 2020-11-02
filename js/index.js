const start = document.getElementById('start');

start.addEventListener('click', e => {
    var course = document.getElementById('course');
    var players = document.getElementById('players');
    console.log(course, players);
    window.location.href = "./scorecard.html";
})