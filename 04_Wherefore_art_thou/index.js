// https://learn.freecodecamp.org/javascript-algorithms-and-data-structures/intermediate-algorithm-scripting/wherefore-art-thou

function whatIsInAName(collection, source) {
    // What's in a name?
    var arr = [];
    // Only change code below this line
    const srcKeys = Object.keys(source);

    arr.push(...collection.filter(obj => {
        return srcKeys.every(key => {
            return obj.hasOwnProperty(key) && obj[key] === source[key];
        });
    }));

    // Only change code above this line
    return arr;
}

module.exports = whatIsInAName;