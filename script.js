`use strict`;

let homePoints = document.getElementById(`home-pts`);
let homeCount = 0;
let awayPoints = document.getElementById(`away-pts`);
let awayCount = 0;

function homeAddPoint() {
  homeCount += 1;
  homePoints.innerText = homeCount;
}

function homeAddTwoPoints() {
  homeCount += 2;
  homePoints.innerText = homeCount;
}

function homeAddThreePoints() {
  homeCount += 3;
  homePoints.innerText = homeCount;
}

function guestAddPoint() {
  awayCount += 1;
  awayPoints.innerText = awayCount;
}

function guestAddTwoPoints() {
  awayCount += 2;
  awayPoints.innerText = awayCount;
}

function guestAddThreePoints() {
  awayCount += 3;
  awayPoints.innerText = awayCount;
}
