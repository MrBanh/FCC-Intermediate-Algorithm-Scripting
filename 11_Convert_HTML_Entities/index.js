// https://learn.freecodecamp.org/javascript-algorithms-and-data-structures/intermediate-algorithm-scripting/convert-html-entities
function convertHTML(str) {
    // Object to store &, <, >, ", and ' and corresponding HTML entities
    const htmlEntities = {
        "&": "&amp;",
        "<": "&lt;",
        ">": "&gt;",
        '"': "&quot;",
        "'": "&apos;"
    };
    // Get the string as an array
    const strArray = [...str];

    // Use the .map function to go through each character
    const newStrArray = strArray.map(ch => {
        // if the character is &, <, >, " or ', replace with HTML entities
        return htmlEntities[ch] || ch;
    });

    // Convert to string and return
    return newStrArray.join('');
}

module.exports = convertHTML;
