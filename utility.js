function generateDeck() {
    var naipe = ['C', 'O', 'E', 'P']
    var numero = ['2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'Q', 'K', 'A']

    var deck = []

    for (var i=0; i < naipe.length; i++) {
        for (var j=0; j < numero.length; j++) {
            deck.push(numero[j] + naipe[i])
        }
    }
    return deck
}


