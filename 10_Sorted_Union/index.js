// https://learn.freecodecamp.org/javascript-algorithms-and-data-structures/intermediate-algorithm-scripting/sorted-union
function uniteUnique(...arr) {
    // Stores all values from the arrays passed in
    const allValuesArr = [];

    // Loop through all arrays passed through function
    for (let arg of arr) {
        // Use the ... spread syntax to expand the current array
        // Push the values (from the spread syntax) into allValuesArr
        allValuesArr.push(...arg);
    }
    // Convert the array to set (collection of unique items)
    // Use the ... spread syntax to convert the set back to array
    return [...new Set(allValuesArr)];
}

module.exports = uniteUnique;