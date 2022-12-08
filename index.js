import characterData from './data.js'
import Character from './Character.js'

/*
Challenge
1. Make it so getNewMonster returns a new instance of Character. Think
what argument you should be passing. If there are no more monsters in the
array, getNewMonster should return an empty object {}.
2. Down near the bottom of the file, set a new variable "monster" equal
to our new function getNewMonster.
3. Delete any code we no longer need.
- The app will still be broken - don't worry for now!
**hint.md for help!!**
*/

/* returns a new instance of Character*/
let monstersArray = ["orc", "demon", "goblin"]

function getNewMonster() {
    const nextMonsterData = characterData[monstersArray.shift()]
    return nextMonsterData ? new Character(nextMonsterData) : {}
}

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
let monster = getNewMonster()

render()
