function controlNumber(x) {
    let number = parseInt(x);
    let test = Number.isInteger(number);
    while (test === false || number > 3) {
        number = parseInt(prompt("That's not a number or number is to high . Please enter a number under 4"));
        test = Number.isInteger(number);
    }
    return number;
}

let numRandom = 0;
let firstMessage = prompt("Choose the level of difficulty 1 : Easy , 2 : Moderate , 3 : NIGHTMARE ");
let level = "";
let difficult = controlNumber(firstMessage);//contrôle du prompt pour la difficulté du jeu
switch (difficult) {
    case 1:
        alert("level easy");
        numRandom = Math.floor(Math.random() * 100) + 1;
        level = "99";
        break;
    case 2 :
        alert("level moderate");
        numRandom = Math.floor(Math.random() * 150) + 1;
        level = "150";
        break;
    case 3 :
        alert("LEVEL NIGHTMARE");
        numRandom = Math.floor(Math.random() * 300) + 1;
        level = "300";
        break;
}
console.log(numRandom);
let name = "";
let Bestscore = {
    name: name,
    score: 0
}
let tab = [];

if (localStorage.getItem('scoreFile') !== null) {
    tab = JSON.parse(localStorage.getItem('scoreFile'))
    console.log(tab)
}

/*document.getElementById('btn').addEventListener('click',function (){
let message = prompt("What's your name human?")
    while (message.length >= 10 && typeof message === 'string') {
        message = prompt("your name is too long , you must write a peusdo of 10 characters maximum");
    }
    console.log(message)
});*/

function save(obj) {
    tab.push(obj);
    console.log('saved')
    tab.sort((a, b) => {
        return a.score - b.score;
    });
    localStorage.setItem("scoreFile", JSON.stringify(tab));
}

/*
const input = document.querySelector("input");
input.addEventListener("keyup", (event) => {
    if (event.key === "Enter") {
        console.log('Enter key pressed')
    }
});*/

document.getElementById('start').addEventListener('click', function () {
    name = document.getElementById('nameInput').value;
    document.getElementsByClassName('game')[0].innerHTML = '<p>Bonjour ' + name + '</p><p id="result">Choisi un nombre entre 1 et ' + level + '</p>\n' +
        '<div class="input-group mb-3">' + '<div class="input-group-prepend">' +
        '<button class="btn btn-success" type="button"id="submit">Submit</button>' + '</div>' +
        '<input type="number"id="numberInput" class="form-control" placeholder="" aria-label="" aria-describedby="basic-addon1">' + '</div>'

    document.getElementById('submit').addEventListener('click', function () {
        console.log('submit');
        let number = document.getElementById('numberInput').value;
        Bestscore.name = name;
        Bestscore.score += 1;
        console.log(numRandom);
        if (number > numRandom) {
            document.getElementById('result').innerHTML = "Le nombre est plus petit, Choisi un nombre entre 1 et " + level;
            console.log("Le nombre est plus petit, Choisi un nombre entre 1 et " + level);
            Bestscore.score += 1;
        } else if (number < numRandom) {
            console.log("Le nombre est plus grand, Choisi un nombre entre 1 et "+ level);
            document.getElementById('result').innerHTML = "Le nombre est plus grand, Choisi un nombre entre 1 et " + level;
            Bestscore.score += 1;
        } else {
            console.log("Bravo tu as trouvé le nombre mystère");
            document.getElementById('result').innerHTML = '<p>Bravo tu as trouvé le nombre mystère</p>';
            document.getElementById('submit').style.display = 'none';
            document.getElementById('numberInput').style.display = 'none';

            save(Bestscore);


            let data = localStorage.getItem("scoreFile");
            let TabScore = JSON.parse(data);
            console.log(TabScore)
            let txt = "";
            let i = 0;
            TabScore.forEach((e) => {
                txt += '<li class="list-group-item">' + `${e.score} ${e.name} <br>` + '</li>'
            });
            document.getElementById("list").innerHTML = txt;
        }
    });
});


