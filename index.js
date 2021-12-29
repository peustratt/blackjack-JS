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

// gera um array de com 52 objetos do tipo carta
function generateDeck() {
    const naipesIcons = {
        'C': "bi bi-heart-fill",
        'O': "bi bi-diamond-fill",
        'E': "bi bi-suit-spade-fill",
        'P': "bi bi-tree-fill"
    }
    const naipes = ['C', 'O', 'E', 'P']
    const numeros = ['2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'Q', 'K', 'A']
    let deck = []

    for (let naipe of naipes) {
        for (let numero of numeros) {

            deck.push(carta = {
                naipe: naipe,
                strValue: numero,
                value: numero,
                name: numero + naipe,
                icone: naipesIcons[naipe]
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
    } else {
        card.value = parseInt(card.value)
    }
    return card
}

function startGame() {
    playerCardsEl.innerHTML = ""
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
    let tempCards = ""
    for (let i = 0; i < playerCards.length; i++) {
        tempCards += `<li class="${playerCards[i].naipe}">
                        <div class="card_content top">
                            <p>${playerCards[i].strValue}</p>
                            <i class="${playerCards[i].icone}"></i>
                        </div>
                        <div class="card_content bottom">
                            <p>${playerCards[i].strValue}</p>
                            <i class="${playerCards[i].icone}"></i>
                        </div>
                    </li>`
    }
    playerCardsEl.innerHTML = tempCards

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
        let card = getRandomCard()
        sum += card.value
        playerCards.push(card)
        renderGame()
    }
}
