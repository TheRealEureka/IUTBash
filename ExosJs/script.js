//function controlNumber(number){
//    let regex="^[0-9]+$ ";
//    while(!number.match(regex)){
//        let message = prompt("That's not a number. Please enter a number");
//    }
//    return number;
//}

let name = "";
let numRandom = Math.floor(Math.random() * 100) + 1;
let Bestscore = { name : name ,
    score : 0
}
let tab = [];

//document.getElementById('btn').addEventListener('click',function (){
//let message = prompt("What's your name human?")
//    while (message.length >= 10) {
//        message = prompt("your name is too long , you must write a peusdo of 10 characters maximum");
//    }
//    console.log(message)
//});

function save(obj) {
    tab.push(obj);
    tab.sort((a ,b) => {
        return a.score - b.score;
    });
    localStorage.setItem("scoreFile", JSON.stringify(tab));
}



document.getElementById('start').addEventListener('click',function (){
    name = document.getElementById('nameInput').value;
    document.getElementsByClassName('game')[0].innerHTML = '<p>Bonjour '+name+'</p><p id="result">Choisi un nombre entre 1 et 99</p>\n' +
        '<input type="number" id="numberInput">' +
        '<button id="submit">Submit</button>';

    document.getElementById('submit').addEventListener('click',function (){
        console.log('submit');
        let number = document.getElementById('numberInput').value;
        Bestscore.name=name;
        Bestscore.score+=1;
        console.log(numRandom);
        if (number > numRandom){
            document.getElementById('result').innerHTML = "Le nombre est plus petit, Choisi un nombre entre 1 et 99";
            console.log("Le nombre est plus petit, Choisi un nombre entre 1 et 99");
            Bestscore.score+=1;
        } else if (number < numRandom){
            console.log("Le nombre est plus grand, Choisi un nombre entre 1 et 99");
            document.getElementById('result').innerHTML = "Le nombre est plus grand, Choisi un nombre entre 1 et 99";
            Bestscore.score+=1;
        } else {
            console.log("Bravo tu as trouvé le nombre mystère");
            document.getElementById('result').innerHTML = '<p>Bravo tu as trouvé le nombre mystère</p>';
            document.getElementById('submit').style.display = 'none';
            document.getElementById('numberInput').style.display = 'none';

            save(Bestscore);
            let data = localStorage.getItem("scoreFile");
            let TabScore = JSON.parse(data);
            document.getElementById("PlayerName").innerHTML = TabScore.forEach((e) => {
                console.log(`${e.score} ${e.name}`)
            });

        }
    });
});

