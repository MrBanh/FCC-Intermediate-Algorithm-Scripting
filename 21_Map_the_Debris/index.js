// https://learn.freecodecamp.org/javascript-algorithms-and-data-structures/intermediate-algorithm-scripting/map-the-debris
function orbitalPeriod(arr) {
    var GM = 398600.4418;
    var earthRadius = 6367.4447;

    const calcOrbitalPeriod = avgAlt => {
        return 2 * Math.PI * ((earthRadius + avgAlt) ** 3 / GM) ** 0.5;
    };
    return arr.map(obj => {
        return {
            name: obj.name,
            orbitalPeriod: Math.round(calcOrbitalPeriod(obj.avgAlt)),
        };
    });
}

module.exports = orbitalPeriod;
