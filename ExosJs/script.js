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


function save(obj) {
    tab.push(obj);
    console.log('saved')
    tab.sort((a, b) => {
        return a.score - b.score;
    });
    localStorage.setItem("scoreFile", JSON.stringify(tab));
}


document.getElementById('start').addEventListener('click', function () {
    name = document.getElementById('nameInput').value;
    document.getElementsByClassName('game')[0].innerHTML = '<p>Hello ' + name + '</p><p id="result">Choose a number between 1 and ' + level + '</p>\n' +
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
            document.getElementById('result').innerHTML = "The number is smaller, Choose a number between 1 and" + level;
            console.log("The number is smaller, Choose a number between 1 and " + level);
            Bestscore.score += 1;
        } else if (number < numRandom) {
            console.log("The number is bigger, Choose a number between 1 and "+ level);
            document.getElementById('result').innerHTML = "The number is bigger, Choose a number between 1 and " + level;
            Bestscore.score += 1;
        } else {
            console.log("Congratulations you found the mystery number");
            document.getElementById('result').innerHTML = '<p>Congratulations you found the mystery number\n' +
                '\n</p>';
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


