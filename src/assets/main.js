let answer = document.getElementById('answer');
let attempt = document.getElementById('attempt');

function guess() {
    let input = document.getElementById('user-guess');
    //add functionality to guess function here

    //initialization
    if (answer.value == '' || attempt.value == '') {
        setHiddenFields();
    }

    //input validation
    if (!validateInput(input.value)) {
        return false;
    } else {
        attempt.value++;
    }

    if (getResults(input.value)) {
        setMessage('You Win! :)');
        showAnswer(true);
        showReplay();
    } else if (attempt.value >= 10) {
        setMessage('You Lose! :(');
        showAnswer(flase);
        showReplay();
    } else {
        setMessage('Incorrect, try again');
    }
}

//implement new functions here

//Create setHiddenFields function
function setHiddenFields() {
    attempt.value = 0;

    answer.value = Math.floor(Math.random() * 10000);
    answer.value = answer.value.toString();
    while (answer.length < 4) {
        answer = '0' + answer;
    }
    //console.log(answer);
}

//Create setMessage function
function setMessage(message) {
    document.getElementById('message').innerHTML = message;
}

//Call the validateInput function from the guess function
function validateInput(input) {
    if (input.length == 4) {
        return true;
    } else {
        setMessage('Guesses must be exactly 4 characters long.');
        return false;
    }
}

//Create getResults function
function getResults(input) {

    let results = document.getElementById('results');
    let div = '<div class="row"><span class="col-md-6">' + input.value + '</span><div class="col-md-6">';
    let count = 0;

    for (let i = 0; i < 4; i++) {
        for (let y = 0; y < 4; y++) {
            if (input.value[i] == answer.value[y] && y == i) {
                count++;
                div += '<span class="glyphicon glyphicon-ok"></span>'
            } else if (input[i] == answer.value[y]) {
                div += '<span class="glyphicon glyphicon"></span>'
            } else {
                div += '<span class="glyphicon glyphicon-remove"></span>'
            }
        }
    }

    div += '</span></div>';
    results.innerHTML = div;

    if (count == 4) {
        return true;
    } else {
        return false;
    }
}

//Create a showAnswer function
function showAnswer(success){

    document.getElementById('code').innerHTML = answer.value;
    let code = document.getElementById("code");
    
    if(success){
        code.className += " success";
    } else{
        code.className += " failure";
    }
}

// Create a showReplay function
function showReplay(){
    let guess = document.getElementById('guessing-div');
    let replay = document.getElementById('replay-div');
    guess.style.display = 'none';
    replay.style.display = 'block';
}


