import characterData from './data.js'
import Character from './Character.js'

function attack() {
    wizard.getDiceHtml()
    orc.getDiceHtml()
    wizard.takeDamage(orc.currentDiceScore)
    orc.takeDamage(wizard.currentDiceScore)
    render()
    if(wizard.dead || orc.dead){
        endGame()
    }
}

/*CHALLENGE
1. Inside endGame(), create a const called endMessage.
2. Figure out how to set endMessage to say either "The
Wizard Wins", "The Orc is Victorious", or "No victors -
all creatures are dead", depending on the health scores
of the characters.
3. Log out endMessage
*/

function endGame(){
    const endMessage = wizard.health === 0 && orc.health === 0 ?
    "No victors - all creatures are dead" :
    wizard.health > 0 ? "The Wizard Wins" :
    "The Orc is Victorious"
}

document.getElementById("attack-button").addEventListener('click', attack)

function render() {
    document.getElementById('hero').innerHTML = wizard.getCharacterHtml()
    document.getElementById('monster').innerHTML = orc.getCharacterHtml()
}

const wizard = new Character(characterData.hero)
const orc = new Character(characterData.monster)
render()
