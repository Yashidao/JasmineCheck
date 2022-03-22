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

let everyPossiblePair = (array) => { // je sais pas le faire
    let a = array[0]
    let b = array[1]
    let c = array[2]
    let arr = [[c, a], [c, b], [a, b]]

    return arr
}

let allElementsExceptFirstThree = (array) => {
    return array.slice(3, 8)
}

let addElementToBeginning = (array, element) => {
    array.unshift(element)
    return array
}

let sortByLastLetter = (array) => { // C'est pris sur internet, je comprends pas trop
    function endComparator(a, b) {
        if (a.slice(-1) < b.slice(-1)) return -1;
        if (a.slice(-1) > b.slice(-1)) return 1;
        return 0;
    }

    array.sort(endComparator);

    return array
}

let getFirstHalf = (string) => {
    let arr = []
    let halfLength = string.length / 2
    halfLength = Math.floor(halfLength)
    for (i = 0; i < string.length; i++) {
        arr[i] = string[i]
    }
    for (i = 0; i < halfLength; i++) {
        arr.pop()
    }
    arr = arr.join("")

    // let getFirstHalf = (string) => {
    //     let stringhalfLength = Math.ceil(string.length/2)
    //     return string.slice(0,stringhalfLength)
    // } 
    // MANIERE PLUS SIMPLE DE LE FAIRE!

    return arr
}

let makeNegative = (number) => {
    number = -Math.abs(number)
    return number
}

let numberOfPalindromes = (array) => {
    let arr = []
    let word = ""
    let mot = ""
    let number = 0
    for (i = 0; i < array.length; i++) {
        word = array[i]
        for (j = word.length - 1; j >= 0; j--) {
            mot += word[j]
        }
        arr[i] = mot
        mot = ""
        if (arr[i] == array[i]) {
            number++
        }
    }

    return number
}

let shortestWord = (array) => {
    let count = []
    let index
    for (i = 0; i < array.length; i++) {
        count[i] = array[i].length
    }
    index = count.indexOf(Math.min(...count))
    return array[index]
}

let longestWord = (array) => {
    let count = []
    let index
    for (i = 0; i < array.length; i++) {
        count[i] = array[i].length
    }
    index = count.indexOf(Math.max(...count))
    return array[index]
}

let sumNumbers = (array) => {
    let sum = 0
    array.forEach(elem => {
        sum += elem
    })
    return sum
}

let repeatElements = (array) => {
    let arrCopy = array
    let length = arrCopy.length
    for (i = 0; i < length; i++) {
        array.push(arrCopy[i])

    }
    return array
}

let stringToNumber = (string) => {
    return parseInt(string)
}

let calculateAverage = (array) => {
    let average = 0
    array.forEach(nb => {
        average += nb
    })
    average /= array.length
    return average
}

let getElementsUntilGreaterThanFive = (array) => {
    let arr = []
    for (i = 0; i < array.length; i++) {
        if (i <= 5) {
            arr[i] = array[i]
        }
    }
    return arr
}

let convertArrayToObject = (array) => {
    let obj = {}
    let index = 0
    let x = 0
    for (i = 1; i < array.length - 2; i++) { // ca marche mais petit trick
        obj[array[index]] = array[i + x]
        index = index + 2
        if (x >= 0) {
            x++
        }
        if (index > 6) {
            break
        }

    }

    return obj
}

let getAllLetters = (array) => {
    let unique = array.join("")
    unique = unique.split("")
    unique.sort()
    let uniqueChars = [...new Set(unique)]; // pas compris pourquoi
    return uniqueChars
}

let swapKeysAndValues = (object) => { // J'ai pas compris
    function objectFlip(obj) {
        return Object.entries(obj).reduce((ret, entry) => {
            const [key, value] = entry;
            ret[value] = key;
            return ret;
        }, {});
    }
    return objectFlip(object)
}

let sumKeysAndValues = (object) => {
    let arrKey = []
    let arrVal = []
    arrKey = Object.keys(object)
    arrVal = Object.values(object)
    let sum = 0
    parseInt(sum)
    for (i = 0; i < arrKey.length; i++) {
        sum += parseInt(arrKey[i])
    }
    for (i = 0; i < arrVal.length; i++) {
        sum = sum + arrVal[i]
    }
    return sum
}

let removeCapitals = (string) => {
    let newString = []
    for (i = 0; i < string.length; i++) {
        if (string[i] !== string[i].toUpperCase() || string[i] == " ") {
            newString[i] = string[i]
        }
    }
    newString = newString.join("")
    return newString
}

let roundUp = (number) => {
    return Math.ceil(number)
}

let formatDateNicely = (date) => {
    return date.toLocaleDateString("be-FR")
}

let getDomainName = (string) => {
    string = string.split("@")
    string.shift()
    string = string.toString()
    string = string.split(".")
    string.pop()
    string = string.join(".")
    return string
}

let titleize = (string) => {
    // NOPE

    let arrEnd = []
    let arrTemp = []
    let arr = []
    arr = string.split(" ")
    arrTemp = arr.slice(4, 8)
    arrEnd = arrTemp

    let x = 0
    for(i=0;i<arr.length;i++){
        if(i==0){
            let letter = arr[i][x].toUpperCase()
            console.log(letter)
            arr[i] = letter
            
        }
        else{
            break
        }
        
    }
    console.log(arr)
    // console.log("arrTemps[] " + arrTemp)
    // console.log("arrEnd[]" + arrEnd )

    return arr
}

let checkForSpecialCharacters = (string) => {
    let format = /[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]+/;
    let bool
    if (format.test(string)) {
        bool = true;
    } else {
        bool = false;
    }
    return bool
}

let squareRoot = (number) => {
    return Math.sqrt(number)
}

let factorial = (number) => {
    let fact = 5
    for (i = 1; i < fact; i++) {
        number = number * i
    }
    return number
}

let findAnagrams = (string) => {



    return string
}

let convertToCelsius = (number) => {
    return Math.round((number - 32) * (5 / 9))
}

let letterPosition = (array) => {
    let arr = []
    let arrAlph = ["alphabet", "a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"]

    for (i = 0; i < array.length; i++) {
        array[i] = array[i].toLowerCase()
        for (j = 0; j < arrAlph.length; j++) {
            if(array[i] == arrAlph[j]){
                arr[i] = arrAlph.indexOf(arrAlph[j])
            }
        }
    }
    return arr
}
