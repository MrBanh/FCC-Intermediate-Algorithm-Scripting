// https://learn.freecodecamp.org/javascript-algorithms-and-data-structures/intermediate-algorithm-scripting/make-a-person

var Person = function (firstAndLast) {
    let fullName = firstAndLast;

    this.getFirstName = function () {
        return fullName.split(' ')[0];
    }

    this.getLastName = function () {
        return fullName.split(' ')[1];
    }

    this.getFullName = function () {
        return fullName;
    };

    this.setFirstName = function (first) {
        fullName = fullName.replace(this.getFirstName(), first)
    }

    this.setLastName = function (last) {
        fullName = fullName.replace(this.getLastName(), last)
    }

    this.setFullName = function (firstAndLast) {
        fullName = firstAndLast;
    }
};