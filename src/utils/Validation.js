import { NUMBER } from './Constans';

class DateValidation {
  static validation(number) {
    return this.isNumberInRange(number) && this.isNumber(number);
  }

  static isNumberInRange(number) {
    return number >= NUMBER.ONE && number <= NUMBER.THIRTY_ONE;
  }

  static isNumber(number) {
    return !isNaN(Number(number));
  }
}

export default DateValidation;