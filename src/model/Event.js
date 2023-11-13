import { EVENT_AMOUNT, EVENT_STRING } from '../utils/Constans';

class Event {
  constructor() {
    this.christmasDiscount = EVENT_AMOUNT.ZERO_AMOUNT;
    this.weekendDiscount = EVENT_AMOUNT.ZERO_AMOUNT;
    this.weekdayDiscount = EVENT_AMOUNT.ZERO_AMOUNT;
    this.specialDiscount = EVENT_AMOUNT.ZERO_AMOUNT;
    this.benefitDiscount = EVENT_AMOUNT.ZERO_AMOUNT;
  }

  setChristmasDiscount(value) {
    this.christmasDiscount = value;
  }

  setWeekendDiscount(value) {
    this.weekendDiscount = value;
  }

  setWeekdayDiscount(value) {
    this.weekdayDiscount = value;
  }

  setSpecialDiscount(value) {
    this.specialDiscount = value;
  }

  setBenefitDiscount(value) {
    this.benefitDiscount = value;
  }

  getAllEvents() {
    return {
      [EVENT_STRING.CHRISTMAS_DISCOUNT]: this.christmasDiscount,
      [EVENT_STRING.WEEKEND_DISCOUNT]: this.weekendDiscount,
      [EVENT_STRING.WEEKDAY_DISCOUNT]: this.weekdayDiscount,
      [EVENT_STRING.SPECIAL_DISCOUNT]: this.specialDiscount,
      [EVENT_STRING.GIFT_EVENT]: this.benefitDiscount,
    };
  }
}

export default Event;
