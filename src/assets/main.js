let answer = document.getElementById('answer');
let attempt = document.getElementById('attempt');

function guess() {
    let input = document.getElementById('user-guess');
    //add functionality to guess function here

    //initialization
    if (answer == '' || attemp == '') {
        setHiddenFields();
    }

    //input validation
    if (!validateInput(input.value)) {
        return false;
    } else {
        attempt++;
    }

    if(getResults(input.value)){
        setMessage('You Win! :)');
    }else if(attempt.value >= 10){
        setMessage('You Lose! :(');
    }else{
        setMessage('Incorrect, try again');
    }
}

//implement new functions here
function setHiddenFields() {
    attempt = 0;

    answer = Math.floor(Math.random() * 10000);
    answer.toString();
    while (answer.length < 4) {
        answer = '0' + answer;
    }
    //console.log(answer);
}

function setMessage(message) {
    document.getElementById('message').innerHTML = message;
}

function validateInput(input) {
    if (input.length == 4) {
        return true;
    } else {
        setMessage('Guesses must be exactly 4 characters long.');
        return false;
    }
}

function getResults(input) {
    let results = document.getElementById('results');
    let div = '<div class="row"><span class="col-md-6">' + input + '</span><div class="col-md-6">';
    let count = 0;

    for (let i = 0; i < input.length; i++) {
        if (input[i] == answer[i]) {
            count++;
            div += '<span class="glyphicon glyphicon-ok"></span>'
        } else if (input[i] == answer[i]) {
            div += '<span class="glyphicon glyphicon"></span>'
        } else {
            div += '<span class="glyphicon glyphicon-remove"></span>'
        }
    }
    
    div += '</span></div>'; 
    results.innerHTML = div;

    if(count == 4){return true;}
    else{return false;}
}