let firstName = "Samantha";
let lastName = "Phan";

let fullName = firstName + lastName;

// Declare the length function
function length(s) {
    let i = 0; 
    let length = 0;

    // Calculate the length of the string
    while(s[i]){
        length++;
        i++;
    }
    return length;
}

// Call the length function
let nameLength = length(fullName);

// Output the full name and its length
console.log(fullName);

function slice(original, start, end){
    var word = "";
    //Create a for loop to go through all strings
     for (let i = start; i < end; i++){
        word += original[i];
    }
    return word;
}
//call the slice function
console.log("slice");

console.log(slice("pizza", 1, 3));

function replace(word, symbol, letter){
    let newWord = ""
    let oldWord = false;
//go through all the words 
    for(let i = 0; i < word.length; i++){
        if(word.charAt(i) === letter && !oldWord){
            newWord += symbol;
            oldWord = true;
        }else{
        newWord += word.charAt(i)
    }

    }
    return newWord
}
//calls theslice function
console.log("replace");
//replace the z with a *
console.log(replace("pizza","*","z"));




function replaceall(beginningWord, searchingWord, replaceWord) {
    let newWord = "";
    let oldWord = 0;
//go through all the characters of the begginningWord string
    while (oldWord < beginningWord.length) {
        let foundWord = true;
        for (let i = 0; i < searchingWord.length; i++) {
            if (beginningWord[oldWord + i] !== searchingWord[i]) {
                foundWord = false;
                break; // Break out of the loop if a mismatch is found
            }
        }
        if (foundWord) {
            newWord += replaceWord;
            oldWord += searchingWord.length;
        } else {
            newWord += beginningWord[oldWord];
            oldWord++;
        }
    }
    //Return variable which hld new strings with replacement
    return newWord;
}

let weekString = "Sunday, Monday, Tuesday";
let updateString = replaceall(weekString, "Sunday", "Saturday");
console.log(weekString);
console.log(updateString);

//concat combines 2 strings
function concat(firstWord, secondWord){
    let mixedWord = "";

    //go through 1st word and add it into the variable mixedWord
    for(let i = 0; i < length(firstWord); i++){
        mixedWord += firstWord[i];
    }

    //goes thorugh 2nd wird and add contents to variable mixedword
    for(let i = 0; i < length(secondWord); i++){
        mixedWord += secondWord[i];
    }

    //returned combined word
    return mixedWord
}

let firWord = "cup";
let secWord = "cake"
let concatword = concat(firWord, secWord)
console.log(concatword)

//charAt function
function charAt(specialString, userIndex){
    //When inputting a specific index, the function will return the special string in the required index    
    return specialString[userIndex];
}

//string from function
let specialString = "hello";
//example index
let userIndex = 3;
//holds the string that gets extracted, calls the function
let cookedString = charAt(specialString, userIndex);
console.log(cookedString, userIndex);


   