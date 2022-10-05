# Define required macros here
SHELL = /bin/sh

run:
	/bin/sh Program.sh
scores:
	cat scores.txt
reset-scores:
	rm -f scores.txt
scores-by:
	cat scores.txt | grep -i $(word 2, $(MAKECMDGOALS))
	

