/**
 * return the union of two sets
 */
function union(s1, s2) {
    let unionSet = new Set([...s1, ...s2]);
    return unionSet;
}

/**
 * return the intersection of two sets
 */
function intersect(s1, s2) {
    let intersectSet = new Set([...s1].filter(x => s2.has(x)));
    return intersectSet;
}

/**
 * return the difference of two sets
 */
function difference(s1, s2) {
    let differenceSet = new Set([...s1].filter(x => !s2.has(x)));
    return differenceSet;
}

module.exports = { union, intersect, difference };
