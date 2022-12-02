import characterData from './data.js'
import Character from './Character.js'

/*
CHALLENGE
1. Make the attack button trigger a dice roll for both
wizard and orc (which method on the constructor does that??)
2. Make sure the new dice score shows in the app
**hint.md for help!!**
*/

function attack(){
    render()
}

function render() {
    document.getElementById('hero').innerHTML = wizard.getCharacterHtml();
    document.getElementById('monster').innerHTML = orc.getCharacterHtml();
}

document.getElementById("attack-button").addEventListener('click', attack)

const wizard = new Character(characterData.hero)
const orc = new Character(characterData.monster)
render()
