const randomHexGenerator = () => {
    return Math.floor(Math.random() * 16777215).toString(16);
}

const divideByCount = (total, divisor) => {
    return total / divisor;
}

export {
    randomHexGenerator,
    divideByCount
}