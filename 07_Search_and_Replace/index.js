// https://learn.freecodecamp.org/javascript-algorithms-and-data-structures/intermediate-algorithm-scripting/search-and-replace
function myReplace(str, before, after) {
    let newStr;

    if (before[0] == before[0].toUpperCase()) {
        // If the searched word starts with upper case 
        after = after.replace(after[0], after[0].toUpperCase());
    }
    newStr = str.replace(before, after);
    return newStr;
}

module.exports = myReplace;