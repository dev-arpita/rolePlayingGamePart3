import { getDiceRollArray, getDicePlaceholderHtml } from './utils.js'

function Character(data) {
    Object.assign(this, data)

    this.diceArray = getDicePlaceholderHtml(this.diceCount)

    this.getDiceHtml = function () {
        this.currentDiceScore = getDiceRollArray(this.diceCount);
        this.diceArray = this.currentDiceScore.map(function(num){
            return `<div class="dice">${num}</div>`
            }).join("")
    }

/*
CHALLENGE
1. Add code to takeDamage so that when he character reaches
zero heath, they stay at zero health and don't drop below
zero.
** hint.md for help!!**
*/

    this.takeDamage = function(attackScoreArray){
        const totalAttackScore = attackScoreArray.reduce(function(total, num) {return total + num})
        this.health -= totalAttackScore
        if(this.health<=0){
            this.health = 0
        }
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
