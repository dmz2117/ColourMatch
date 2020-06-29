let blueSlider = document.getElementById("customRangeBlue");
let greenSlider = document.getElementById("customRangeGreen");
let redSlider = document.getElementById("customRangeRed");

let currentBlue = 255;
let currentGreen = 255;
let currentRed = 255;

let blueMatch = false;
let greenMatch = false;
let redMatch = false;

let currentChallenge = 0;

let win = false;

let challengeData = [
  {challengeBlue: 0,
    challengeGreen: 255,
    challengeRed: 255,
    challengeTime: 0,
    complete: false},
  {challengeBlue: 255,
    challengeGreen: 0,
    challengeRed: 255,
    challengeTime: 0,
    complete: false},
  {challengeBlue: 255,
    challengeGreen: 255,
    challengeRed: 0,
    challengeTime: 0,
    complete: false},
];

let challengesToBeMade = true;

blueSlider.oninput = function () {
  document.documentElement.style.setProperty("--blueValue", this.value);
  currentBlue = this.value;
  if (currentBlue > (challengeData[currentChallenge].challengeBlue - 20) && currentBlue < (challengeData[currentChallenge].challengeBlue + 20)) {
    blueMatch = true;
  }
  if (currentGreen > (challengeData[currentChallenge].challengeGreen - 20) && currentGreen < (challengeData[currentChallenge].challengeGreen + 20)) {
    greenMatch = true;
  }
  if (currentRed > (challengeData[currentChallenge].challengeRed - 20) && currentRed < (challengeData[currentChallenge].challengeRed + 20)) {
    redMatch = true;
  }
  if (blueMatch && greenMatch && redMatch) {
    blueMatch = false;
    greenMatch = false;
    redMatch = false;
    challengeData[currentChallenge].complete = true;
    if (currentChallenge < 9) {
      currentChallenge ++;
    } else {
      win = true
    }
    refreshCurrentChallenge();
    refreshChallengeList();
    if (win) {
      document.querySelector('#mixedBar').innerHTML = `<div class="row h-100"><div class="col-9 mx-auto my-auto"><div id="winCard" class="card text-white bg-dark"><div class="card-header text-center">You got them all!</div></div></div></div>`
    }
  }
};

greenSlider.oninput = function () {
  document.documentElement.style.setProperty("--greenValue", this.value);
  currentGreen = this.value;
  if (currentBlue > (challengeData[currentChallenge].challengeBlue - 20) && currentBlue < (challengeData[currentChallenge].challengeBlue + 20)) {
    blueMatch = true;
  }
  if (currentGreen > (challengeData[currentChallenge].challengeGreen - 20) && currentGreen < (challengeData[currentChallenge].challengeGreen + 20)) {
    greenMatch = true;
  }
  if (currentRed > (challengeData[currentChallenge].challengeRed - 20) && currentRed < (challengeData[currentChallenge].challengeRed + 20)) {
    redMatch = true;
  }
  if (blueMatch && greenMatch && redMatch) {
    blueMatch = false;
    greenMatch = false;
    redMatch = false;
    challengeData[currentChallenge].complete = true;
    if (currentChallenge < 9) {
      currentChallenge ++;
    } else {
      win = true
    }
    refreshCurrentChallenge();
    refreshChallengeList();
    if (win) {
      document.querySelector('#mixedBar').innerHTML = `<div class="row h-100"><div class="col-9 mx-auto my-auto"><div id="winCard" class="card text-white bg-dark"><div class="card-header text-center">You got them all!</div></div></div></div>`
    }
  }
};

redSlider.oninput = function () {
  document.documentElement.style.setProperty("--redValue", this.value);
  currentRed = this.value;
  if (currentBlue > (challengeData[currentChallenge].challengeBlue - 20) && currentBlue < (challengeData[currentChallenge].challengeBlue + 20)) {
    blueMatch = true;
  }
  if (currentGreen > (challengeData[currentChallenge].challengeGreen - 20) && currentGreen < (challengeData[currentChallenge].challengeGreen + 20)) {
    greenMatch = true;
  }
  if (currentRed > (challengeData[currentChallenge].challengeRed - 20) && currentRed < (challengeData[currentChallenge].challengeRed + 20)) {
    redMatch = true;
  }
  if (blueMatch && greenMatch && redMatch) {
    blueMatch = false;
    greenMatch = false;
    redMatch = false;
    challengeData[currentChallenge].complete = true;
    if (currentChallenge < 9) {
      currentChallenge ++;
    } else {
      win = true
    }
    refreshCurrentChallenge();
    refreshChallengeList();
    if (win) {
      document.querySelector('#mixedBar').innerHTML = `<div class="row h-100"><div class="col-9 mx-auto my-auto"><div id="winCard" class="card text-white bg-dark"><div class="card-header text-center">You got them all!</div></div></div></div>`
    }
  }
};

function makeChallenges () {
  if (challengesToBeMade) {
    for (let i=0; i < 7; i++) {
      let newBlue = Math.floor(Math.random() * 255);
      let newGreen = Math.floor(Math.random() * 255);
      let newRed = Math.floor(Math.random() * 255);
      let newChallenge = {
        challengeBlue: newBlue,
          challengeRed: newRed,
          challengeGreen: newGreen,
          complete: false
        };
        challengeData.push(newChallenge);
    }
    challengesToBeMade = false;
  }
}

function refreshChallengeList () {
  let el = document.querySelector('#challengeList');
  el.innerHTML = ""
  for (let i=0; i < challengeData.length; i++) {
    if (challengeData[i].complete) {
      el.innerHTML += `<li class="list-group-item text-white bg-dark"><div class="row"><div class="col-2"><div class="colourSmall" style="background-color:rgb(${challengeData[i].challengeRed}, ${challengeData[i].challengeGreen}, ${challengeData[i].challengeBlue});"></div></div><div class="col-10">Got it!</div></div></li>`;
    } else {
      el.innerHTML += `<li class="list-group-item text-white bg-dark">...</li>`;
    }
  }
}

function refreshCurrentChallenge () {
  let elCurrent = document.querySelector('#currentColour');
  let elNext = document.querySelector('#nextColour');

  if (currentChallenge < 10) {
    elCurrent.innerHTML = `<div class="colourCurrent mx-auto" style="background-color:rgb(${challengeData[currentChallenge].challengeRed}, ${challengeData[currentChallenge].challengeGreen}, ${challengeData[currentChallenge].challengeBlue});"></div>`;
  } else if (currentChallenge == 10) {
    elCurrent.innerHTML = `<div class="colourCurrent mx-auto" style="background-color:rgb(0, 0, 0);"></div>`;
  }
  if (currentChallenge < 9) {
    elNext.innerHTML = `<div class="col-6 text-right">Next</div><div class="col-6"><div class="colourSmall mr-auto" style="background-color:rgb(${challengeData[currentChallenge + 1].challengeRed}, ${challengeData[currentChallenge + 1].challengeGreen}, ${challengeData[currentChallenge + 1].challengeBlue});"></div></div>`;
  } else {
    elNext.innerHTML = `<div class="col-12 text-middle">All done!</div>`
  }
}


makeChallenges();
refreshCurrentChallenge();
refreshChallengeList();
