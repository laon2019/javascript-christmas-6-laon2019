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
    
        const weekendDiscount = this.#calculateWeekendDiscount(menu, isWeekEnd);
        this.#event.setWeekendDiscount(weekendDiscount);
    
        const weekdayDiscount = this.#calculateWeekDayDiscount(menu, isWeekEnd);
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

  #calculateWeekendDiscount(menu, isWeekEnd) {
    if (isWeekEnd) {
        const mainCourseMenuItems = Menu.getMainCourse();
        const mainCourseCount = menu.reduce((count, [itemName, quantity]) => {
            if (mainCourseMenuItems.some((mainCourse) => mainCourse.name === itemName)) {
                return count + quantity;
              }
              return count;
          }, 0);
        return mainCourseCount * 2023;
      }
      return 0;
  }

  #calculateWeekDayDiscount(menu, isWeekEnd){
    if (!isWeekEnd) {
        const dessertMenuItems = Menu.getDessert();
        const dessertCount = menu.reduce((count, [itemName, quantity]) => {
          if (dessertMenuItems.some((dessert) => dessert.name === itemName)) {
            return count + quantity;
          }
          return count;
        }, 0);
        return dessertCount * 2023;
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
