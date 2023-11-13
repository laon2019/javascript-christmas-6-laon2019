import Menu from '../model/Menu';
import Event from '../model/Event';
import { EVENT_AMOUNT, DATE_CONSTANTS, NUMBER, DATE } from '../utils/Constans';

class EventBenefitService {
  #event;

  constructor() {
    this.#event = new Event();
  }

  checkEvents(menu, date, totalPrice) {
    const christmasDiscount = this.#calculateChristmasDiscount(date);
    const isWeekEnd = this.#checkWeekEnd(date);
    const weekendDiscount = this.#calculateWeekendOrWeekdayDiscount(menu, isWeekEnd, Menu.getMainCourse());
    const weekdayDiscount = this.#calculateWeekendOrWeekdayDiscount(menu, !isWeekEnd, Menu.getDessert());
    const specialDiscount = this.#calculateSpecialDiscount(date);
    const benefitDiscount = this.#calculateBenefitDiscount(totalPrice);
    this.#updateEvent(christmasDiscount, weekendDiscount, weekdayDiscount, specialDiscount, benefitDiscount);
    const allEvent = this.#event.getAllEvents();
    const totalBenefitsSum = this.#calculateTotalBenefits([christmasDiscount, weekendDiscount, weekdayDiscount, specialDiscount, benefitDiscount]);
    return [allEvent, totalBenefitsSum];
  }

  #updateEvent(christmasDiscount, weekendDiscount, weekdayDiscount, specialDiscount, benefitDiscount) {
    this.#event.setChristmasDiscount(christmasDiscount);
    this.#event.setWeekendDiscount(weekendDiscount);
    this.#event.setWeekdayDiscount(weekdayDiscount);
    this.#event.setSpecialDiscount(specialDiscount);
    this.#event.setBenefitDiscount(benefitDiscount);
  }

  #calculateTotalBenefits(benefits) {
    const totalBenefitsSum = benefits.reduce((acc, value) => acc + value, 0);
    return totalBenefitsSum;
  }

  #checkWeekEnd(date) {
    return DATE_CONSTANTS.WEEKEND_DAYS.includes(date);
  }

  #calculateChristmasDiscount(date) {
    const isChristmasEventDay = date >= DATE.CHRISTMAS_EVENT_START_DAY && date <= DATE.CHRISTMAS_EVENT_END_DAY;
    if (isChristmasEventDay) {
      const christmasDiscount = EVENT_AMOUNT.CHRISTMAS_DEFAULT_AMOUNT + (date - NUMBER.ONE) * EVENT_AMOUNT.CHRISTMAS_DAY_AMOUNT;
      return christmasDiscount;
    }
    return EVENT_AMOUNT.ZERO_AMOUNT;
  }

  #calculateWeekendOrWeekdayDiscount(menu, isWeekend, menuItems) {
    if (isWeekend) {
      return this.#calculateDiscount(menu, menuItems);
    }
    return EVENT_AMOUNT.ZERO_AMOUNT;
  }

  #calculateDiscount(menu, menuItems) {
    const count = menu.reduce((count, [itemName, quantity]) => {
      if (menuItems.some((item) => item.name === itemName)) {
        return count + quantity;
      }
      return count;
    }, NUMBER.ZERO);
    return count * EVENT_AMOUNT.WEEKEND_AMOUNT;
  }

  #calculateSpecialDiscount(date) {
    if (DATE_CONSTANTS.SPECIAL_DAYS.includes(date)) {
      return EVENT_AMOUNT.SPECIAL_EVENT_AMOUNT;
    }
    return EVENT_AMOUNT.ZERO_AMOUNT;
  }

  #calculateBenefitDiscount(totalPrice) {
    if(totalPrice >= EVENT_AMOUNT.BENEFIT_DISCOUNT_THRESHOLD){
        return EVENT_AMOUNT.BENEFIT_DISCOUNT_AMOUNT;
    }
    return EVENT_AMOUNT.ZERO_AMOUNT;
  }
}
export default EventBenefitService;