const isNumberInRange = (number) => {
    return number >= 1 && number <= 31;
};

const isNumber = (number) => {
    return !isNaN(Number(number));
}

const isNotEnglish = (text) => {
    return !/^[a-zA-Z]+$/.test(text);
};

export { isNumber, isNumberInRange, isNotEnglish };