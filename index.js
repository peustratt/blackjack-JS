let player = {
    name: "Peter",
    chips: 140
}
let deck = []
let playerCards = []
let sum = 0
let hasBlackJack = false
let isAlive = false
let message = ""
let messageEl = document.getElementById("message-el")
let sumEl = document.getElementById("sum-el")
let playerCardsEl = document.getElementById("cards-el")
let playerEL = document.getElementById("player-el")

playerEL.textContent = player.name + ": $" + player.chips

function generateDeck() {
    var naipes = ['C', 'O', 'E', 'P']
    var numeros = ['2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'Q', 'K', 'A']
    var deck = []

    for (var i=0; i < naipes.length; i++) {
        for (var j=0; j < numeros.length; j++) {
            deck.push(carta = {
                naipe: naipes[i],
                value: numeros[j],
                name: numeros[j] + naipes[i]
            })
        }
    }

    shuffleArray(deck)
    return deck
}

function shuffleArray(array) {
    for (var i = array.length - 1; i > 0; i--) {
        var j = Math.floor(Math.random() * (i + 1));
        var temp = array[i];
        array[i] = array[j];
        array[j] = temp;
    }
}

function getRandomCard() {
    card = deck.pop()
    if (card.value === 'J' || card.value === 'Q' || card.value === 'K') {
        card.value = 10
    } else if (card.value === 'A') {
        card.value = 10
    }
    card.value = parseInt(card.value)

    return card
}

function startGame() {
    deck = generateDeck()
    isAlive = true
    hasBlackJack = false
    let firstCard = getRandomCard()
    let secondCard = getRandomCard()
    playerCards = [firstCard, secondCard]
    sum = firstCard.value + secondCard.value
    renderGame()
}

function renderGame() {
    playerCardsEl.textContent = "Cards: "
    for (let i = 0; i < playerCards.length; i++) {
        playerCardsEl.textContent += playerCards[i].name + " "
    }

    sumEl.textContent = "Sum: " + sum
    if (sum <= 20) {
        message = "Do you want to draw a new card?"
    } else if (sum === 21) {
        message = "You've got Blackjack!"
        hasBlackJack = true
    } else {
        message = "You're out of the game!"
        isAlive = false
    }
    messageEl.textContent = message
}

function newCard() {
    if (isAlive && !hasBlackJack) {
        var card = getRandomCard()
        sum += card.value
        playerCards.push(card)
        renderGame()
    }
}
