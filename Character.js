import characterData from './data.js'
import Character from './Character.js'

let monstersArray = ["orc", "demon", "goblin"];

/*
Challenge
1. Create a function called getNewMonster.
2. Write logic inside the function that takes the first
monster from monstersArray and extracts that monster's
data from characterData.
3. Save that data to a new const called nextMonsterData.
**hint.md for help!!**
*/

function getNewMonster(){
   const nextMonsterData = characterData[monstersArray.shift()]
    console.log(nextMonsterData)
}
getNewMonster()

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

function endGame() {
    const endMessage = wizard.health === 0 && orc.health === 0 ?
        "No victors - all creatures are dead" :
        wizard.health > 0 ? "The Wizard Wins" :
            "The Orc is Victorious"

    const endEmoji = wizard.health > 0 ? "🔮" : "☠️"
    document.body.innerHTML = `
        <div class="end-game">
            <h2>Game Over</h2>
            <h3>${endMessage}</h3>
            <p class="end-emoji">${endEmoji}</p>
        </div>
        `
}

document.getElementById("attack-button").addEventListener('click', attack)

function render() {
    document.getElementById('hero').innerHTML = wizard.getCharacterHtml()
    document.getElementById('monster').innerHTML = orc.getCharacterHtml()
}

const wizard = new Character(characterData.hero)
const orc = new Character(characterData.monster)
render()
