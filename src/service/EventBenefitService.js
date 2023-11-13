import Menu from "../model/Menu";
import Event from "../model/Event";

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
    const weekend = ["1", "2", "8", "9", "15", "16", "22", "23", "29"];
    return weekend.includes(date);
  }

  #calculateChristmasDiscount(date) {
    const isChristmasEventDay = date >= 1 && date <= 25;
    if (isChristmasEventDay) {
      const christmasDiscount = 1000 + (date - 1) * 100;
      return christmasDiscount;
    }
    return 0;
  }

  #calculateWeekendOrWeekdayDiscount(menu, isWeekend, menuItems) {
    if (isWeekend) {
      return this.#calculateDiscount(menu, menuItems);
    }
    return 0;
  }

  #calculateDiscount(menu, menuItems) {
    const count = menu.reduce((count, [itemName, quantity]) => {
      if (menuItems.some((item) => item.name === itemName)) {
        return count + quantity;
      }
      return count;
    }, 0);
    return count * 2023;
  }

  #calculateSpecialDiscount(date) {
    const specialDay = ["3", "10", "17", "24", "25", "31"];
    if (specialDay.includes(date)) {
      return 1000;
    }
    return 0;
  }
  #calculateBenefitDiscount(totalPrice) {
    if(totalPrice >= 120000){
        return 25000;
    }
    return 0;
  }
}
export default EventBenefitService;
