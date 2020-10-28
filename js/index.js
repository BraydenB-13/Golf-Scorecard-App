function takeInfo() {
    let infoArr = [document.getElementById('course'), document.getElementById('tee'), document.getElementById('players')];
    let info = ("Course: " + infoArr[0].value + ", " + "Tee: " + infoArr[1].value + ", " + "Players: "  + infoArr[2].value + ".");
    console.log(info);
    location.href = "./scorecard.html";
    printInfo();
}

function printInfo() {
    document.getElementById('4').style.display = "none";
}