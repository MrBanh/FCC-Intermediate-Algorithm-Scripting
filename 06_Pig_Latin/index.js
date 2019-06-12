// https://learn.freecodecamp.org/javascript-algorithms-and-data-structures/intermediate-algorithm-scripting/pig-latin
function translatePigLatin(str) {
    // Split the str into an array, separated by vowels
    const vowelRegex = /(?=[aeiou])/gi;
    const strArray = str.split(vowelRegex);

    // if it starts with vowel
    if (vowelRegex.test(strArray[0])) {
        // add "way" to end
        strArray.push("way");
        // else if it starts with consonant
    } else {
        // take the consonant or consonant cluster and add to end
        strArray.push(strArray.shift());
        // Attach "ay" to the cluster at the end
        strArray.push("ay");
    }

    // Convert strArray back to string and return
    return strArray.join('');
}

module.exports = translatePigLatin;