// https://learn.freecodecamp.org/javascript-algorithms-and-data-structures/intermediate-algorithm-scripting/seek-and-destroy

function destroyer(arr, ...args) {
    // Remove all the values
    return arr.filter(val => {
        return !args.includes(val);
    });
}

module.exports = destroyer;