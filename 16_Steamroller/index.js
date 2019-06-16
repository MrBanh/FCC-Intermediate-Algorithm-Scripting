// https://learn.freecodecamp.org/javascript-algorithms-and-data-structures/intermediate-algorithm-scripting/steamroller
function steamrollArray(arr) {
    // Array that stores only the values inside the nested arrays
    const valArray = [];

    // Function that grabs only the values from the nested arrays
    const getValFromArray = newArr => {
        // Loop through newArr and get only non-Array types
        for (let val of newArr) {
            // If it is an array
            if (Array.isArray(val)) {
                // Recursively call getValFromArray function
                getValFromArray(val);
            } else {
                // If the current value is not an Array type
                valArray.push(val);
            }
        }
    };

    getValFromArray(arr);

    // Return results
    return valArray;
}

module.exports = steamrollArray;
