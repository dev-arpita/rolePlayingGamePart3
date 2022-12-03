import {getDiceRollArray, getDicePlaceholderHtml} from './utils.js'
/*
Challenge
1. Add a new property called currentDiceScore to each character's
 data and initialise it to an empty array.
2. Rewrite the getDiceHtml method so it updates currentDiceScore
 with the values returned by getDiceRollArray.
*/

function Character(data) {
    Object.assign(this, data)

    this.diceArray = getDicePlaceholderHtml(this.diceCount)

    this.getDiceHtml = function(diceCount) {
        this.currentDiceScore = getDiceRollArray(this.diceCount)
    }

    this.getCharacterHtml = function () {
        const { elementId, name, avatar, health, diceCount } = this;

           return `
            <div class="character-card">
                <h4 class="name"> ${name} </h4>
                <img class="avatar" src="${avatar}" />
                <div class="health">health: <b> ${health} </b></div>
                <div class="dice-container">
                    ${this.diceArray}
                </div>
            </div>`
    }
}

export default Character
