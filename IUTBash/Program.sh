#!/bin/bash

. ./options.config


num=$((1 + $RANDOM % 100))
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
echo "  "
echo "Guess a number between 1 and 100"
echo "  "

read guess

#if guess is not a number
while ! [[ "$guess" =~ ^[0-9]+$ ]]
do
    echo "  "
    echo "That's not a number. Please enter a number"
    read guess
done



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


    echo "$try $name" >> scores.txt
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