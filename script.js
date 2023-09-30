// more computed properties
const addProp = (obj, k, v) => { // specifying the object, key, value to be added
    return {
        ...obj, // 
        [k]: v
    }
}

const res = addProp(team, 'happy', ':)')


// shorthand method syntax
const math = {
    blah: 'Hi',
    add(x, y) {
        return x + y
    },
    multiply(x, y) {
        return x * y
    }
}
math.add(50, 60)

// logging in example - shorthand syntax for methods within objects
const auth = {
    username: 'TommyBot',
    login() {
        console.log('logged you in')
    },
    logout() {
        console.log('goodbye')
    }
}

// `this` keyword
const person = {
    first: 'Cherilyn',
    last: 'Sarkisian',
    nickname: 'Cher',
    fullName() {
        const {
            first,
            last,
            nickname
        } = this
    console.log(`${first} ${last} AKA ${nickname}`)
    }
}

// Annoyomatic Demo
const annoyer = {
    phrases: ['literally', 'cray', 'can\'t even', 'totes', 'yolo', 'can\'t stop, won\'t stop'],
    pickPhrase() { //function component for picking random phrase
        const {
            phrases
        } = this; // specifying enclosing scope/object `annoyer` as `this` 
        const idx = Math.floor(Math.random() * phrases.length) // generating random index
        return phrases[idx]
    },
    start() { // function component for console-ing the random phrase that was picked
        this.timerId = setInterval(() => { //  timerID allows us to reference the timer again to stop it
            console.log(this.pickPhrase())
        }, 3000)
    },
    stop() {
        clearInterval(this.timerID)
    }
}

// deck of cards example
function makeDeck() { // declaring my function
	const suits = ['hearts', 'diamonds', 'spades', 'clubs'];
	const values = '2,3,4,5,6,7,8,9,10,J,Q,K,A';
	const deck = []; // starting with my empty deck - this is where my randomly drawn cards from suits + values will go
	
	for (let value of values.split(',')) { 
	// looping through each value in values (provided that they are split among the commas)
		for (let suit of suits) { // looping through each each suit in suits
		deck.push({value: value, suit: suit}) // we move the value and suit
		}
	}
	return deck; // when done looping through all elements in both arrays, we can return the deck
}

function drawCard(deck) {
	return deck.pop() // taking a "card" off the end of `deck`
}

// const Deck1 = makeDeck();
// const card1 = drawCard(Deck1); 

const deck2 = {
	deck: [],
	initializeDeck(){}
}