// https://learn.freecodecamp.org/javascript-algorithms-and-data-structures/intermediate-algorithm-scripting/argsuments-optional
function addTogether(...args) {
    // Check for any that are not numbers
    const notANumber = x => {
        return typeof x !== "number";
    };

    return args.some(notANumber)
        ? undefined // if some arguments are not numbers
        : args.length === 2 // current arguments are numbers
        ? args[0] + args[1] // # of arguments initially passed is 2
        : function(arg2) {
              // only 1 argument was initially passed
              return notANumber(arg2)
                  ? undefined // if next argument passed is not a number
                  : args[0] + arg2; // if second argument is a number
          };
}

module.exports = addTogether;
