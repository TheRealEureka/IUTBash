function controlNumber(number){
    let regex="^[0-9]+$ ";
    while(!number.match(regex)){
        let message = prompt("That's not a number. Please enter a number");
    }
    return number;
}

document.getElementById('btn').addEventListener('click',function (){
let message = prompt("What's your name human?")
    while (message.length >= 10) {
        message = prompt("your name is too long , you must write a peusdo of 10 characters maximum");
    }
    console.log(message)
});

