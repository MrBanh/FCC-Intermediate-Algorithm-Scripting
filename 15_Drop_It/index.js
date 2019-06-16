// https://learn.freecodecamp.org/javascript-algorithms-and-data-structures/intermediate-algorithm-scripting/drop-it
function dropElements(arr, func) {
    // Drop them elements.
    const arrCopy = [...arr];
    while (arrCopy.length > 0 && !func(arrCopy[0])) {
        arrCopy.shift();
    }
    return arrCopy;
}

module.exports = dropElements;