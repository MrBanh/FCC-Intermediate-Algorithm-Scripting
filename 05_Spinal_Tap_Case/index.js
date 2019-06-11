function spinalCase(str) {
    // "It's such a fine line between stupid, and clever."
    // --David St. Hubbins

    // Separate strings with uppercase no space (e.g. "thisIsSpinalTap")
    let newStr = str.replace(/([a-z])([A-Z])/g, "$1 $2");
    // Separate string by space and underscores, replace with '-' and change to lower case
    const strRegex = /\s+|_+/g;
    return newStr.replace(strRegex, '-').toLowerCase();
}

module.exports = spinalCase;