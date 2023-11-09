const isNumberInRange = (number) => {
    return number >= 1 && number <= 31;
};

const isNumber = (number) => {
    return !isNaN(Number(number));
}

export { isNumber, isNumberInRange };