// building a deck and drawing a card using destructuring and `this`
const makeDeck = {
    deck: [],
    values: 'A,2,3,4,5,6,7,8,9,10,J,Q,K',
    suits: ['hearts', 'spades', 'clubs', 'diamonds'], 
    initializeDeck() {
        const {
            suits,
            deck,
            values
        } = this;
        for (value of values.split(',')) {
            for (suit of suits) {
                return deck.push({
                    value,
                    suit
                })
            }
        }
        // return deck
    },
    drawCard(){
        return this.deck.pop()
    }
}