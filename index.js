const player1Dice = document.getElementById("player1Dice")
const player2Dice = document.getElementById("player2Dice")
const player1Scoreboard = document.getElementById("player1Scoreboard")
const player2Scoreboard = document.getElementById("player2Scoreboard")
const message = document.getElementById("message")
const rollBtn = document.getElementById("rollBtn")
const rollBtn2x = document.getElementById("rollBtn2x")
const resetBtn = document.getElementById("resetBtn")
let player1Score = 0
let player2Score = 0
let player1Turn = true

function showResetButton() {
    rollBtn.style.display = "none"
    rollBtn2x.style.display = "none"
    resetBtn.style.display = "block"
}

function reset() {
    player1Score = 0
    player2Score = 0
    player1Turn = true
    player1Scoreboard.textContent = 0
    player2Scoreboard.textContent = 0
    player1Dice.textContent = "-"
    player2Dice.textContent = "-"
    message.textContent = "Player 1 Turn"
    resetBtn.style.display = "none"
    rollBtn.style.display = "block"
    rollBtn2x.style.display = "block"
    player2Dice.classList.remove("active")
    player1Dice.classList.add("active")
}

function diceLogic(multiplier) {
    const randomNumber = Math.floor(Math.random() * 6) + 1
    const doubleDraw = randomNumber + randomNumber
    if (multiplier === 1) {
        if (player1Turn) {
            player1Score += randomNumber;
            player1Scoreboard.textContent = player1Score
            player1Dice.textContent = randomNumber
            player1Dice.classList.remove("active")
            player2Dice.classList.add("active")
            message.textContent = "Player 2 Turn"
        } else {
            player2Score += randomNumber
            player2Scoreboard.textContent = player2Score
            player2Dice.textContent = randomNumber
            player2Dice.classList.remove("active")
            player1Dice.classList.add("active")
            message.textContent = "Player 1 Turn"
        }
    } else if (multiplier === 2) {
        if (player1Turn) {
            console.log(randomNumber)
            player1Score += doubleDraw
            player1Scoreboard.textContent = player1Score
            player1Dice.textContent = randomNumber
            player1Dice.classList.remove("active")
            player2Dice.classList.add("active")
            message.textContent = "Player 2 Turn"
        } else {
            console.log(randomNumber)
            player2Score += doubleDraw
            player2Scoreboard.textContent = player2Score
            player2Dice.textContent = randomNumber
            player2Dice.classList.remove("active")
            player1Dice.classList.add("active")
            message.textContent = "Player 1 Turn"
        }
    } else {
        console.log("Please use the correct multipler")
    }
}

function displayMessage() {
    if (player1Score >= 21) {
        message.textContent = "Player 1 hit 21, and lost 😢"
        showResetButton()
    } else if (player2Score >= 21) {
        message.textContent = "Player 2 hit 21, and lost 😞"
        showResetButton()
    } else if (player1Score >= 20) {
        message.textContent = "Player 1 Won 🥳"
        showResetButton()
    } else if (player2Score >= 20) {
        message.textContent = "Player 2 Won 🎉"
        showResetButton()
    }
    player1Turn = !player1Turn
}

function diceRoll() {
    diceLogic(1)
    displayMessage()
}
function diceRoll2x() {
    diceLogic(2)
    displayMessage()
}

rollBtn.addEventListener("click", function () {
    diceRoll()
})
rollBtn2x.addEventListener("click", function () {
    diceRoll2x()
})
resetBtn.addEventListener("click", function () {
    reset()
})