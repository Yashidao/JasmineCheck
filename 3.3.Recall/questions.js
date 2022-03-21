let selectElementsStartingWithA = (array) => {
    let arr = []
    let x = 0;
    for (i = 0; i < array.length; i++) {
        if (array[i][0] == "a") {
            arr[x] = array[i];
            x++
        }
    }
    return arr;
}

let selectElementsStartingWithVowel = (array) => {
    let arr = []
    let alph = ["a", "e", "i", "o", "u", "y"]
    let x = 0;
    for (i = 0; i < array.length; i++) {
        for (j = 0; j < alph.length; j++) {
            if (array[i][0] == alph[j]) {
                arr[x] = array[i];
                x++
            }
        }
    }
    return arr;
}

let removeNullElements = (array) => {
    let arr = []
    let x = 0
    for (i = 0; i < array.length; i++) {
        if (array[i] != null) {
            arr[x] = array[i]
            x++
        }
    }
    return arr
}

let removeNullAndFalseElements = (array) => {

    return array.filter(el => { return (el != null && el !== false) })
}

let reverseWordsInArray = (array) => {
    let arr = []
    let word = ""
    let mot = ""
    for (i = 0; i < array.length; i++) {
        word = array[i]
        for (j = word.length - 1; j >= 0; j--) {
            mot += word[j]
        }
        arr[i] = mot
        mot = ""
    }
    return arr
}

let everyPossiblePair = (array) => {
    return
}

let allElementsExceptFirstThree = (array) => {
    return array.slice(3, 8)
}

let addElementToBeginning = (array, element) => {
    array.unshift(element)
    return array
}

let sortByLastLetter = (array) => {
    return
}

let getFirstHalf = (string) => {
    let arr = []
    let x = string.length / 2
    for (i = 0; i < string.length; i++) {
        arr[i] = string[i]
    }
    for (j = arr.length; j > x; j--) {
       arr.pop()
    }
    arr = arr.join("")
    return arr
}

let makeNegative = (number) => {

    return -Math.abs(number)
}

let numberOfPalindromes = (array) => {
    return
}

let shortestWord = (array) => {
    return
}

let longestWord = (array) => {
    return
}

let sumNumbers = (array) => {
    return
}

let repeatElements = (array) => {
    return
}

let stringToNumber = (string) => {
    return
}

let calculateAverage = (array) => {
    return
}

let getElementsUntilGreaterThanFive = (array) => {
    return
}

let convertArrayToObject = (array) => {
    return
}

let getAllLetters = (array) => {
    return
}

let swapKeysAndValues = (object) => {
    return
}

let sumKeysAndValues = (object) => {
    return
}

let removeCapitals = (string) => {
    return
}

let roundUp = (number) => {
    return
}

let formatDateNicely = (date) => {
    return
}

let getDomainName = (string) => {
    return
}

let titleize = (string) => {
    return
}

let checkForSpecialCharacters = (string) => {
    return
}

let squareRoot = (number) => {
    return
}

let factorial = (number) => {
    return
}

let findAnagrams = (string) => {
    return
}

let convertToCelsius = (number) => {
    return
}

let letterPosition = (array) => {
    return
}
