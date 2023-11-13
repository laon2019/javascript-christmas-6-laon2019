// Event.js
class Event {
  constructor() {
    this.christmasDiscount = 0;
    this.weekendDiscount = 0;
    this.weekdayDiscount = 0;
    this.specialDiscount = 0;
    this.benefitDiscount = 0;
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
      "크리스마스 디데이 할인": this.christmasDiscount,
      "주말 할인": this.weekendDiscount,
      "평일 할인": this.weekdayDiscount,
      "특별 할인": this.specialDiscount,
      "증정 이벤트": this.benefitDiscount,
    };
  }
}

export default Event;