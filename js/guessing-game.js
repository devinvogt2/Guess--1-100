/* 

Write your guess-game code here! Don't forget to look at the test specs as a guide. You can run the specs
by running "npm test".

In this file, you will also include the event listeners that are needed to interact with your HTML file when
a user clicks a button or adds a guess to the input field.

*/



//generate a random number from 1-100 (use math.random and math.floor here 
//maybe let our number equal an open string
// for loop to go thorugh each number?

//return a newGame object each time it is called 
//should have a playerGuess property(playersGuess property is what will hold the player's number guess), and a pastGuesses property(pastGuesses will be an array, and holds all of the player's past guesses)
// should have a winningNumber property, which calls generateWinningNumber
//use an object.method to return the absolute value of the differrence between the playersGuess and winningNumber




function generateWinningNumber () {
    let winningNum = Math.floor(Math.random()  * 100 + 1)
    return winningNum;
    //output to test bugs
}

function hintNumber () {
    let hintNum = Math.floor(Math.random()  * 100 + 1)
    //output to test bugs
    return hintNum;
}

//shuffle the array using math.random to place elements
//returns array shuffled in place
function shuffle (array) {
    let lastUnshuffledIndex = array.length;
    let tempElement;
    let index;
    // shuffle and decrease the amount of "shuffle-able" values until we exahust the entire array
    // and our lastUnshuffledIndex is 0
    while (lastUnshuffledIndex) {
      index = Math.floor(Math.random() * lastUnshuffledIndex);
      lastUnshuffledIndex -= 1;
      // this is where the shuffle happens
      // first, we store the element we're going to shuffle to the back of the array
      tempElement = array[lastUnshuffledIndex];
      // swap the last element with the randomly-selected indexed element
      array[lastUnshuffledIndex] = array[index];
      // and then finally we replace the randomly-selected index with our original end-of-array element stored at tempElement
      array[index] = tempElement;
    }
    return array;
  }
  // [ 5, 8, 7, 4, 2 ]
  // grab a random index, like say 2 in this case
  // tempElement is 2
  // now we basically splice the value 7 and stick it in the position of 2 which is the last position in the array
  // and we replace the original index with the tempElement which WAS at the end of the array
  // let temp = 9;
  // let index = 4;
  // we're keeping track of unshuffled elements
  // which is anything directly before the last position that we shuffled into
  //                              |
  myArray = [1, 2, 3, 4, 5, 6, 7, 8, 9];
  const shuffled = shuffle(myArray);
  // console.log(shuffled);






//return true if the playersGuess is lower than winningNumber and false if its not



//should throw error if the number is invalid (less than 1, or greater than 100, or NAN)



//returns "You Win!" if playersGuess equals winningGuess
//returns "You have already guessed that number." if playersGuess is in pastGuesses
//if playersGuess isn't the winningNumber or a duplicate, add it to pastGuesses
//returns "You Lose" if this is the players 5th guess
//returns "You\'re burning up!" if the difference between playersGuess and winningGuess is less than 10
//returns "You\'re lukewarm." if the difference between playersGuess and winningGuess is less than 25'
//returns "You\'re a bit chilly." if the difference between playersGuess and winningGuess is less than 50
//returns "You\'re ice cold!" if the difference between playersGuess and winningGuess is less than 100


//here we will use document.getElementById (playerGuess)*string
   

//return an empty new game instance (reset our game through play again buttob)
function newGame () {
    
    let game1 = {
        playersGuess: null, //document.getElementById("guessContain").value????
        pastGuesses: [],
        winningNumber: generateWinningNumber(),
        difference: function () {
            let result = this.playersGuess - this.winningNumber
            return Math.abs(result)
        },
        isLower: function () {
            if (this.playersGuess >= this.winningNumber) {
                return false
            } else {
                return true
            }
            
        },
        playersGuessSubmission: function (number) {
            // let enterGuess = document.getElementById("enterGuessBtn")
            // enterGuess.addEventListener('click', function(){
            //     playersGuessSubmission()
            // })

            this.playersGuess = number
            if (number < 1 || number > 100 || typeof number !== "number") {
                throw "That is an invalid guess."
            }
            return this.checkGuess()

            // game.pastGuesses.push(number)
            // return this.pastGuesses
        },
    
        checkGuess: function () {
            let differ = this.difference()
            if(this.playersGuess === this.winningNumber) {
                return "You Win!"
            } 
            if (this.pastGuesses.indexOf(this.playersGuess) > -1) {
                    return "You have already guessed that number."
                }else {
                    this.pastGuesses.push(this.playersGuess)
                }
                if(this.pastGuesses.length === 5) {
                    return "You Lose."
                }
                if (differ < 10) {
                    return "You're burning up!"
                } 
                if (differ < 25) {
                    return "You're lukewarm." 
                }
                if (differ < 50) {
                    return "You're a bit chilly."
                }else {
                    return "You're ice cold!"
                }

        },
         
        newGame: function () {
            return newGame()
        },
        provideHint: function () {
            winHint = [
                this.winningNumber,
                generateWinningNumber(),
                generateWinningNumber()

            ];
           return shuffle(winHint)
        },
    
    
    
    }
    let game2 = {
        playersGuess: null,
        pastGuesses: [],
        winningNumber: generateWinningNumber(),
        difference: function () {
            let result = this.playersGuess - this.winningNumber
            return Math.abs(result)
        },
        isLower: function () {
            if (this.playersGuess >= this.winningNumber) {
                return false
            } else {
                return true
            }
            
        },
        playersGuessSubmission: function (number) {
            //let submit = document.getElementById("guessContain").value;
            this.playersGuess = number
            if (number < 1 || number > 100 || typeof number !== "number") {
                throw "That is an invalid guess."
            }
            return this.checkGuess()

            // game.pastGuesses.push(number)
            // return this.pastGuesses
        },
    
        checkGuess: function () {
            let differ = this.difference()
            if(this.playersGuess === this.winningNumber) {
                return "You Win!"
            } 
            if (this.pastGuesses.indexOf(this.playersGuess) > -1) {
                    return "You have already guessed that number."
                }else {
                    this.pastGuesses.push(this.playersGuess)
                }
                if(this.pastGuesses.length === 5) {
                    return "You Lose."
                }
                if (differ < 10) {
                    return "You're burning up!"
                } 
                if (differ < 25) {
                    return "You're lukewarm."
                }
                if (differ < 50) {
                    return "You're a bit chilly."
                }else {
                    return "You're ice cold!"
                }

        },
         
        newGame: function () {
            return newGame()
        },
        provideHint: function () {
            winHint = [
                this.winningNumber,
                generateWinningNumber(),
                generateWinningNumber()

            ];
           return shuffle(winHint)
        },
    
    
    }
    return game1 || game2
    
}
//Event listeners


let enterGuess = document.getElementById("enterGuessBtn");

let reset = document.getElementById("resetGameBtn");

let hint = document.getElementById("giveHintBtn");

let previousGuess = [];

let maxGuessLimit = 0;
let input = Number(document.getElementById("guessContain").value)

// newGame()

let answer = generateWinningNumber();
console.log("Winning number: ", answer, "Players Number: ", input)



function playerInput () {
    let diff = checkInputDifference()
    let input = Number(document.getElementById("guessContain").value)
    if(input < 1 || input > 100 || NaN ){
        console.log("Your guess is invalid")
        document.getElementById("hintMsg").innerHTML = "Your guess is invalid";
     }
    else if (input === answer) {
        document.getElementById("hintMsg").innerHTML = "You Win!";
        let shownAnswer = document.getElementById("answer")
        shownAnswer.innerHTML = "The correct answer is: " + answer
        document.getElementById("enterGuessBtn").disabled = true
        document.getElementById("giveHintBtn").disabled = true
    }
    else if (input === 69) {
        document.getElementById("hintMsg").innerHTML = "Oh my!" + "😳";
        previousGuess.push(input)
        updatePreviousGuess()
        checkLimit()
        maxGuessLimit++
    }
    else if (diff < 5) {
        document.getElementById("hintMsg").innerHTML = "YOU'RE RED HOT!"
        previousGuess.push(input)
        updatePreviousGuess()
        checkLimit()
        maxGuessLimit++
    } 
    else if (diff < 10) {
        document.getElementById("hintMsg").innerHTML = "So close you can taste it!"
        previousGuess.push(input)
        updatePreviousGuess()
        checkLimit()
        maxGuessLimit++
    } 
    else if (diff < 25) {
        document.getElementById("hintMsg").innerHTML = "You're warm-ish." 
        previousGuess.push(input)
        updatePreviousGuess()
        checkLimit()
        maxGuessLimit++
        
    }
    else if (diff < 55) {
        document.getElementById("hintMsg").innerHTML = "You're way off." 
        previousGuess.push(input)
        updatePreviousGuess()
        checkLimit()
        maxGuessLimit++
        
    }
    
    else if (diff < 100) {
        document.getElementById("hintMsg").innerHTML = "WTF was that guess?."
        previousGuess.push(input)
        updatePreviousGuess()
        checkLimit()
        maxGuessLimit++
    }
    
    else {
        let playLimit = checkLimit ()

        if(!playLimit){
            // checkDiff()

            // console.log("your guess is " + input)
            previousGuess.push(input)
            updatePreviousGuess()
            maxGuessLimit++
        }
    }
}
function checkInputDifference () {
    let input = document.getElementById("guessContain").value
    let result = input - answer
    return Math.abs(result)
}


function checkLimit () {
    if(maxGuessLimit === 4) {
        console.log("you are at 5 clicks")
        let input = document.getElementById("guessContain").value
        document.querySelector('.guessList-5').innerText = input
        document.getElementById("enterGuessBtn").disabled = true
        document.getElementById("giveHintBtn").disabled = true
        let hint = document.getElementById("hintMsg")
        hint.innerHTML = "You have lost!"
        let shownAnswer = document.getElementById("answer")
        shownAnswer.innerHTML = "The correct answer is: " + answer
        return true
    }
}

function updatePreviousGuess () {
    for(let i = 0; i < previousGuess.length; i++) {
        let guess = previousGuess[i];
        let prevPosition = i + 1;
        let guessNode = document.querySelector(`.guessList-${prevPosition}`)
        guessNode.textContent = guess
        // console.log(guessNode)

    }
    // console.log(previousGuess)
}
enterGuess.addEventListener('click', playerInput)

reset.addEventListener('click', function(){
    console.log("Play Again button has been clicked")
    document.location.reload(true)
})

hint.addEventListener('click', function(){
    hintNums = [
        answer, 
        hintNumber(), 
        hintNumber(),
        hintNumber(),
        hintNumber(),
        hintNumber(),

    ]
    document.getElementById("hintMsg").innerHTML = "The Possible Winning Numbers: " + shuffle(hintNums) 
    document.getElementById("giveHintBtn").disabled = true
    
})



//generates an array with a length of 3
//include the winningNumber
// calss generateWinningNumber to fill the rest of the hint array with random numbers note: (in order to pass this spec, generateWinningNumber needs to be defined
        // with a function declaration, ex: function generateWinningNumber() {})
//calls the shuffle function note: (in order to pass this spec, shuffle needs to be defined
        // with a function declaration, ex: function shuffle() {})
