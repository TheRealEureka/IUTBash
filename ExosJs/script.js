//function controlNumber(number){
//    let regex="^[0-9]+$ ";
//    while(!number.match(regex)){
//        let message = prompt("That's not a number. Please enter a number");
//    }
//    return number;
//}

let name = "";
let numRandom = Math.floor(Math.random() * 100) + 1;

//document.getElementById('btn').addEventListener('click',function (){
//let message = prompt("What's your name human?")
//    while (message.length >= 10) {
//        message = prompt("your name is too long , you must write a peusdo of 10 characters maximum");
//    }
//    console.log(message)
//});



document.getElementById('start').addEventListener('click',function (){
    name = document.getElementById('nameInput').value;
    document.getElementsByClassName('game')[0].innerHTML = '<p>Bonjour '+name+'</p><p id="result">Choisi un nombre entre 1 et 99</p>\n' +
        '<input type="number" id="numberInput">' +
        '<button id="submit">Submit</button>';

    document.getElementById('submit').addEventListener('click',function (){
        console.log('submit');
        let number = document.getElementById('numberInput').value;
        console.log(numRandom);
        if (number > numRandom){
            document.getElementById('result').innerHTML = "Le nombre est plus petit, Choisi un nombre entre 1 et 99";
            console.log("Le nombre est plus petit, Choisi un nombre entre 1 et 99");
        } else if (number < numRandom){
            console.log("Le nombre est plus grand, Choisi un nombre entre 1 et 99");
            document.getElementById('result').innerHTML = "Le nombre est plus grand, Choisi un nombre entre 1 et 99";
        } else {
            console.log("Bravo tu as trouvé le nombre mystère");
            document.getElementById('result').innerHTML = '<p>Bravo tu as trouvé le nombre mystère</p>';
            document.getElementById('submit').style.display = 'none';
            document.getElementById('numberInput').style.display = 'none';
        }
    });
});

