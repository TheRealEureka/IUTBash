#!/bin/bash

. ./options.config


try=0


echo "_________________________"
echo "| Welcome to the game ! |"
echo "|_______________________|"
echo "  "

if [ -f "scores.txt" ]
then
    echo "The best score is : "
    cat scores.txt | sort -n | head -n 1
    echo "  "
else
    echo "No score yet !"
    echo "  "
fi



echo "  "
echo "What's your name human?"
read name
while [ "$max_username_length" -lt ${#name} ]
do
    echo "Your name is too long !"
    echo "What's your name human?"
    read name
done

echo "  "
echo "What's difficulty do you want ? (1,2 or 3)"
read difficulty

while [ "$difficulty" -lt 1 ] || [ "$difficulty" -gt 3 ]
do
    echo "Please enter a number between 1 and 3"
    echo "What's difficulty do you want ? (1,2 or 3)"
    read difficulty
done

if [ "$difficulty" -eq 1 ]
then
    max=100
elif [ "$difficulty" -eq 2 ]
then
    max=500
else
    max=1000
fi

echo "  "
echo "Guess a number between 1 and $max"
echo "  "

read guess

#get length of $name
#if guess is not a number
while ! [[ "$guess" =~ ^[0-9]+$ ]]
do
    echo "  "
    echo "That's not a number. Please enter a number"
    read guess
done

num=$((1 + $RANDOM % $max))


while [ "$guess" -ne $num ] && [ $try -lt "$max_try" ]
do
    if [ "$guess" -lt $num ]
    then
        echo "Too low !"
        try=$((try+1))
    else
        echo "Too high !"
        try=$((try+1))
    fi
    read guess
    while ! [[ "$guess" =~ ^[0-9]+$ ]]
        do
            echo "  "
            echo "That's not a number. Please enter a number"
            read guess
        done
done

if [ $try -lt "$max_try" ]
then
    try=$((try+1))
    echo "  "
    echo "  "
    echo "You guessed it !"
    echo "Your score is $try"
    echo "  "
    echo "You're weak, do better next time."
    lignes=$(wc -l < scores.txt)
    echo "lignes $lignes"
    if [ $lignes -lt "$max_score" ]
    then
        echo "$name $try" >> scores.txt
    else
        cat scores.txt | sort -n | head -n "${max_score+1}" > scores.txt
        echo "$name $try" >> scores.txt

    fi
fi    

echo "  "
echo "  "
echo "You've reached the maximum number of try, $name. You're a failure."

sort scores.txt -n -o scores.txt

echo "  "
echo "__________________________  "
echo "| _______________________ |"
echo "|| The best scores are  | | "
echo "||______________________| | "
cat scores.txt
echo "|_________________________| "
echo "  "

echo "You want to play again ? (y/n)"
read answer
if [ "$answer" = "y" ]
then
    ./Program.sh
else
    if [ "$answer" = "n" ]
    then
        echo "Goodbye $name."
    else
        echo "That's not what i asked. Goodbye $name."
    fi
fi