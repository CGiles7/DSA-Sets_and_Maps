/**
 * return true if two arrays are equal, false otherwise
 */
function isEqual(a1, a2) {
    if (a1.length !== a2.length) return false;

    let map = new Map();

    for (let i = 0; i < a1.length; i++) {
        map.set(a1[i], (map.get(a1[i]) || 0) + 1);
        map.set(a2[i], (map.get(a2[i]) || 0) - 1);
    }

    for (let count of map.values()) {
        if (count !== 0) return false;
    }

    return true;
}

module.exports = isEqual;
