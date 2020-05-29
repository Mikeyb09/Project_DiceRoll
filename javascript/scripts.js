// draw();

function draw() {
  var paths = ["img/dice-1.png", "img/dice-2.png", "img/dice-3.png", "img/dice-4.png", "img/dice-5.png", "img/dice-6.png", ];
  var firstNum, secondNum, winner = "";

  firstNum = Math.random();
  firstNum *= 5;
  firstNum = Math.round(firstNum);

  secondNum = Math.random();
  secondNum *= 5;
  secondNum = Math.round(secondNum);

  if (firstNum > secondNum) {
    winner = "<img class=\"winner-flag\" src=\"img/flag.png\"> First Player Wins";
    document.getElementById("heading").innerHTML = winner;
  } else if (firstNum < secondNum) {
    winner = "Second Player Wins <img class=\"winner-flag\" src=\"img/flag.png\">";
    document.getElementById("heading").innerHTML = winner;
  } else {
    winner = "<img class=\"winner-flag\" src=\"img/flag.png\"> DRAW <img class=\"winner-flag\" src=\"img/flag.png\">";
    document.getElementById("heading").innerHTML = winner;
  }

  document.getElementById("imgOne").setAttribute("src", paths[firstNum]);

  document.getElementById("imgTwo").setAttribute("src", paths[secondNum]);
}