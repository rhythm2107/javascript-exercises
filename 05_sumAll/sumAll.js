const sumAll = (start, end) => {

    if (start < 0 || end < 0) {
        return 'ERROR'
    }

    if (typeof start !== 'number' || typeof end !== 'number') {
        return 'ERROR'
    }

    let result = 0
    let first = Math.min(start, end)
    let last = Math.max(start, end)

    for (let i = first; i <= last; i++) {
        result += i
    }
    return result
}


// Do not edit below this line
module.exports = sumAll;
