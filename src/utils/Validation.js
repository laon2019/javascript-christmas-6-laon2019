class DateValidation {
  static validation(number) {
    return this.isNumberInRange(number) && this.isNumber(number);
  }

  static isNumberInRange(number) {
    return number >= 1 && number <= 31;
  }

  static isNumber(number) {
    return !isNaN(Number(number));
  }
}

export default DateValidation;