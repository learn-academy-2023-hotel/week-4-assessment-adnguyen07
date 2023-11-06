// ASSESSMENT 4: JavaScript Coding Practical Questions with Jest

const { assertParenthesizedExpression } = require("@babel/types")

// Please read all questions thoroughly
// Pseudo coding is REQUIRED
// If you get stuck, please leave comments to help us understand your thought process

// Use test driven development to complete the following questions
// Add appropriate dependencies: $ yarn add jest

// Reminder: The test will call your function
// Run the file with the following command: $ yarn jest

// --------------------1) Create a function that takes in an array, removes the first item from the array and shuffles the remaining items.

// a) Create a test with an expect statement using the variable provided.
// HINT: Check out this resource: https://jestjs.io/docs/expect#expectarraycontainingarray

const colors1 = ["purple", "blue", "green", "yellow", "pink"]
// Expected output example (can be a different order): ["yellow", "blue", "pink", "green"]
const colors2 = ["chartreuse", "indigo", "periwinkle", "ochre", "aquamarine", "saffron"]
// Expected output example (can be a different order): ["saffron", "aquamarine", "periwinkle", "indigo", "ochre"]

// describe("arrayShuffle", () => {
//     it("Takes in an array, removes the first item from the array and shuffles the remaining items.", () => {
//         expect(arrayShuffle(colors1)).toEqual(expect.arrayContaining(["yellow", "blue", "pink", "green"]))
//         expect(arrayShuffle(colors2)).toEqual(expect.arrayContaining(["saffron", "aquamarine", "periwinkle", "indigo", "ochre"]))
//     })
// })

// b) Create the function that makes the test pass.

const arrayShuffle = (array) => {
    array.shift()
    let newArr = []
    let arrIndex = []

    while (arrIndex.length < array.length) {
    let randomIndex = Math.floor(Math.random() * array.length)
    
    if (!arrIndex.includes(randomIndex)) {
        arrIndex.push(randomIndex)
    }
}
    for (let i = 0; i < arrIndex.length; i++) {
        newArr.push(array[arrIndex[i]])
    }
    return newArr
}
console.log(arrayShuffle(colors1))
console.log(arrayShuffle(colors2))

// Pseudo code:

// Input: an array
// Output: a new array that has removed the first element from the original array and shuffled the remaining elements
// Create a function that takes in an array as the parameter. Use .shift() method to remove the first element from the array. Use a while loop to generate an array of random indices. Use a for loop to push the remaining elements from the original array into a new array according to random indices. 

// --------------------2) Create a function that takes in an object that contains up votes and down votes and returns the end tally.

// a) Create a test with expect statements for each of the variables provided.

const votes1 = { upVotes: 13, downVotes: 2 }
// Expected output: 11
const votes2 = { upVotes: 2, downVotes: 33 }
// Expected output: -31

describe("voteTally", () => {
    it("Takes in an object that contains up votes and down votes and returns the end tally.", () => {
        expect(voteTally(votes1)).toEqual(11)
        expect(voteTally(votes2)).toEqual(-31)
    })
})

// b) Create the function that makes the test pass.

const voteTally = (object) => {
    return object.upVotes - object.downVotes
}
console.log(voteTally(votes1))
console.log(voteTally(votes2))

// Pseudo code:

// Input: an object containing up votes and down votes
// Output: the difference between the number of up votes and down votes
// Create a function that takes in an object as the parameter. Have the function access the values for up votes and down votes. Calculate the difference between the up votes and down votes.