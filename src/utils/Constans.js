const EVENT_AMOUNT = Object.freeze({
  CHRISTMAS_DEFAULT_AMOUNT: 1000,
  CHRISTMAS_DAY_AMOUNT: 100,
  WEEKEND_AMOUNT: 2023,
  SPECIAL_EVENT_AMOUNT: 1000,
  BENEFIT_DISCOUNT_THRESHOLD: 120000,
  BENEFIT_DISCOUNT_AMOUNT: 25000,
  ZERO_AMOUNT: 0,
});

const DATE_CONSTANTS = Object.freeze({
  WEEKEND_DAYS: ["1", "2", "8", "9", "15", "16", "22", "23", "29"],
  SPECIAL_DAYS: ["3", "10", "17", "24", "25", "31"],
});

const DATE = Object.freeze({
  CHRISTMAS_EVENT_START_DAY: 1,
  CHRISTMAS_EVENT_END_DAY: 25,
});

const NUMBER = Object.freeze({
  ZERO: 0,
  ONE: 1,
});

export { EVENT_AMOUNT, DATE_CONSTANTS, NUMBER, DATE };
