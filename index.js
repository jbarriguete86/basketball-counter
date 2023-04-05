let team1Count = 0;
let team2Count = 0;
let period = 0;
let counter = 0;

let team1Score= document.getElementById("team1-score");
let team2Score= document.getElementById("team2-score");
let periodSelect = document.getElementById("period-text");
let periodBotton = document.getElementById ("period-btn");
let clearBotton = document.getElementById ("clear-btn");
team1Score.textContent= team1Count;
team2Score.textContent= team2Count;



function team1Add1() {
    if (counter==0){
    counter += 1;
    team1Count += 1;
    team1Score.textContent= team1Count;
    clearBotton.classList.remove("inactive");
    clearBotton.classList.add("active"); 
    } else {
    team1Count += 1;
    team1Score.textContent= team1Count;
    }
}

function team1Add2() {
    if (counter==0){
    counter += 1;
    team1Count += 2;
    team1Score.textContent= team1Count;
    clearBotton.classList.remove("inactive");
    clearBotton.classList.add("active"); 
    } else {
    team1Count += 2;
    team1Score.textContent= team1Count;
    }
}


function team1Add3() {
    if (counter==0){
    counter += 1;
    team1Count += 3;
    team1Score.textContent= team1Count;
    clearBotton.classList.remove("inactive");
    clearBotton.classList.add("active"); 
    } else {
    team1Count += 3;
    team1Score.textContent= team1Count;
    }
}


function team2Add1() {
    if (counter==0){
    counter += 1;
    team2Count += 1;
    team2Score.textContent= team2Count;
    clearBotton.classList.remove("inactive");
    clearBotton.classList.add("active"); 
    } else {
    team2Count += 1;
    team2Score.textContent= team2Count;
    }
}


function team2Add2() {
    if (counter==0){
    counter += 1;
    team2Count += 2;
    team2Score.textContent= team2Count;
    clearBotton.classList.remove("inactive");
    clearBotton.classList.add("active"); 
    } else {
    team2Count += 2;
    team2Score.textContent= team2Count;
    }
}


function team2Add3() {
    if (counter==0){
    counter += 1;
    team2Count += 3;
    team2Score.textContent= team2Count;
    clearBotton.classList.remove("inactive");
    clearBotton.classList.add("active"); 
    } else {
    team2Count += 3;
    team2Score.textContent= team2Count;
    }
}

function addPeriod(){
    counter += 1;
    clearBotton.classList.remove("inactive");
    clearBotton.classList.add("active");
    if (period==3){
    periodSelect.textContent = "This is the last period"; 
    periodBotton.classList.add ("inactive");
      
    } else {
    period += 1;
    periodSelect.textContent = "We are in period " + period; 
    }
}

function clearOut() {
    if (counter!== 0){
    team1Count = 0;
    team2Count = 0;
    period = 0; 
    counter = 0;
    team1Score.textContent= team1Count;
    team2Score.textContent= team2Count;
    periodSelect.textContent = "THE GAME HAS NOT START YET.";
    clearBotton.classList.remove("active");
    clearBotton.classList.add("inactive");
    }
}