/*
Given a word, return true if that word contains only unique characters. Return false otherwise. Uppercase and lowercase letters should be considered separately
For example:
hasUniqueChars("hellor")
returns true
hasUniqueChars("Mandy")
returns false
hasUniqueChars("crazy")
returns true
*/



// Write your code below
function hasUniqueChars(word) {
    let uniqueChars = new Set();

    for (let i = 0; i < word.length; i++) {
        uniqueChars.add(word[i]);
    }

    return uniqueChars.size === word.length;
}



/*
Alternatively:
function hasUniqueChars(word) {
    let uniqueChars = new Set(word);
    return uniqueChars.size === word.length;
}
-OR-
if (uniqueChars.size === word.length) {
    return true;
} else {
    return false;
}
