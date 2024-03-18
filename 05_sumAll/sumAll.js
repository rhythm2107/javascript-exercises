const sumAll = function(num1, num2) {

    let sum = 0;
    let startPoint = Math.min(num1, num2);
    let endPoint = Math.max(num1, num2);

    if (typeof(num1) !== typeof(num2)) {
        return 'ERROR'
    } else if (num1 < 0 || num2 < 0) {
        return 'ERROR'
    }

    while (startPoint <= endPoint) {
        sum += startPoint
        startPoint++
    }
    return sum
};

// Do not edit below this line
module.exports = sumAll;
