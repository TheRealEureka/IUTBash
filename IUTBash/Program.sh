#!/bin/bash

num=$((1 + $RANDOM % 100))
try=0


echo "_________________________"
echo "| Welcome to the game ! |"
echo "|_______________________|"
echo "  "
echo "Best score : "
cat scores.txt | sort -n | head -n 1

echo "  "
echo "What's your name human?"
read name
echo "  "
echo "Guess a number between 1 and 100"
echo "  "

read guess




while [ $guess -ne $num ]
do
    if [ $guess -lt $num ]
    then
        echo "Too low !"
        try=$((try+1))
    else
        echo "Too high !"
        try=$((try+1))
    fi
    read guess
done
try=$((try+1))
echo "  "
echo "  "
echo "You guessed it !"
echo "Your score is $try"
echo "  "
echo "You're weak, do better next time."



echo "$try $name" >> scores.txt
