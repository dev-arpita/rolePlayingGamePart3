Firstly,  check if the wizard is alive. If he is not, call 
endGame(). If he is, use an "else if" to check if the current 
monster is still alive.
If the current monster is dead, you will need to nest an
if statement and use it to check if there are more monsters
left in monstersArray (you can tell this from checking its 
length!)
If there are more monsters to come, use the function
getNewMonster() to re-assign a monster to the "monster" variable 
we created using a "let" down at the bottom of the file.
If there are no more monsters, call endGame().