window.onload = function init() {
    getdata(false)
}

function getdata(once, ops = null) {

    if (once) {
        for (let i = 0; i < 4; ++i) {
            ops[i].style.background = "turquoise";
        }
    }
    
    var targetURL = "https://opentdb.com/api.php?amount=1&category=9&difficulty=easy&type=multiple"
    var request = new XMLHttpRequest();

    request.open('GET', targetURL)
    request.responseType = 'json';
    request.send();

    request.onload = function () {
        var structure = request.response;
        expand(structure);
    }
}

function expand(structure) {

    var ops = [document.querySelector(".option1"),
    document.querySelector(".option2"),
    document.querySelector(".option3"),
    document.querySelector(".option4")];

    const quest = document.querySelector(".question");

    function shuffle(array) {
        array.sort(() => Math.random() - 0.5);
    }

    shuffle(ops)
    ops[0].textContent = structure['results'][0]['correct_answer'];
    ops[1].textContent = structure['results'][0]['incorrect_answers'][0];
    ops[2].textContent = structure['results'][0]['incorrect_answers'][1];
    ops[3].textContent = structure['results'][0]['incorrect_answers'][2];
    quest.textContent = structure['results'][0]['question'];

    addEventstoButtons(structure, ops)
}

function addEventstoButtons(structure, ops) {

    const restart = document.querySelector(".restart")
    var c = false;
    ops[0].addEventListener("click", () => {
        if (!c) {
            if (ops[0].textContent == structure['results'][0]['correct_answer']) {
                ops[0].style.background = "#ADFF2F";
                c = true;
                showCorrectOnes(structure, ops);
            }
            else {
                c = true;
                showCorrectOnes(structure, ops);
            }
        }
    });
    ops[1].addEventListener("click", () => {

        if (!c) {

            if (ops[1].textContent == structure['results'][0]['correct_answer']) {
                ops[1].style.background = "#ADFF2F";
                c = true;
                showCorrectOnes(structure, ops);
            }
            else {
                c = true;
                showCorrectOnes(structure, ops);
            }
        }
    });
    ops[2].addEventListener("click", () => {

        if (!c) {

            if (ops[2].textContent == structure['results'][0]['correct_answer']) {
                ops[2].style.background = "#ADFF2F";
                c = true;
                showCorrectOnes(structure, ops);
            }
            else {
                c = true;
                showCorrectOnes(structure, ops);
            }
        }
    });
    ops[3].addEventListener("click", () => {

        if (!c) {

            if (ops[3].textContent == structure['results'][0]['correct_answer']) {
                ops[3].style.background = "#ADFF2F";
                c = true;
                showCorrectOnes(structure, ops);
            }
            else {
                c = true;
                showCorrectOnes(structure, ops);
            }
        }
    });
}

function showCorrectOnes(structure, ops) {
    for (var i = 0; i < 4; ++i) {
        if (ops[i].textContent != structure['results'][0]["correct_answer"]) {
            for (var j = 0; j < 4; ++j) {
                if (ops[i].textContent == structure['results'][0]["incorrect_answers"][j]) {
                    ops[i].style.background = "red";

                }
            }
        }
        else {
            ops[i].style.background = "#ADFF2F";
        }
    }
    reset(ops);
}

function reset(ops) {
    const restartbtn = document.querySelector(".restart");
    restartbtn.addEventListener("click", clickFunction);
    function clickFunction(e) {
        restartbtn.removeEventListener("click", clickFunction);
        getdata(true, ops)
    }
}