import Menu from "../model/Menu";
import Event from "../model/Event";

class EventBenefitService {
    #event

    constructor() {
        this.#event = new Event();
    }

    checkEvents(menu, date, giftMenu) {
        const christmasDiscount = this.#calculateChristmasDiscount(date);
        this.#event.setChristmasDiscount(christmasDiscount);

        const isWeekEnd = this.#checkWeekEnd(date);
    
        const weekendDiscount = this.#calculateWeekendOrWeekdayDiscount(menu, isWeekEnd, Menu.getMainCourse());
        this.#event.setWeekendDiscount(weekendDiscount);

        const weekdayDiscount = this.#calculateWeekendOrWeekdayDiscount(menu, !isWeekEnd, Menu.getDessert());
        this.#event.setWeekdayDiscount(weekdayDiscount);
    
        const specialDiscount = this.#calculateSpecialDiscount(date);
        this.#event.setSpecialDiscount(specialDiscount);
    
        const benefitDiscount = this.#calculateBenefitDiscount(giftMenu);
        this.#event.setBenefitDiscount(benefitDiscount);

        const allEvent = this.#event.getAllEvents();
    
        const totalBenefitsSum = this.#calculateTotalBenefits([
          christmasDiscount,
          weekendDiscount,
          weekdayDiscount,
          specialDiscount,
          benefitDiscount,
        ]);
    
        return [allEvent, totalBenefitsSum];
      }

  #calculateTotalBenefits(benefits) {
    const totalBenefitsSum = benefits.reduce((acc, value) => acc + value, 0);
    return totalBenefitsSum;
  }

  #checkWeekEnd(date){
    const weekend = ["1", "2", "8", "9", "15", "16", "22", "23", "29"];
    return weekend.includes(date)
  }

  #calculateChristmasDiscount(date) {
    const isChristmasEventDay = date >= 1 && date <= 25;
    if (isChristmasEventDay) {
      const christmasDiscount = 1000 + (date - 1) * 100;
      return christmasDiscount;
    }
    return 0;
  }

  #calculateWeekendOrWeekdayDiscount(menu, isWeekEnd, menuItems) {
    if (isWeekEnd) {
      const count = menu.reduce((count, [itemName, quantity]) => {
        if (menuItems.some((item) => item.name === itemName)) {
          return count + quantity;
        }
        return count;
      }, 0);
      return count * 2023;
    }
    return 0;
  }

  #calculateSpecialDiscount(date){
    const specialDay = ["3", "10", "17", "24", "25", "31"];
    if (specialDay.includes(date)) {
        return 1000;
    }
    return 0;
  }
  #calculateBenefitDiscount(giftMenu){
    if(giftMenu === "샴페인 1개"){
        return 25000;
    }
    return 0;
  }
}
export default EventBenefitService;
