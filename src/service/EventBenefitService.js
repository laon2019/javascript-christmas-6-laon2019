import Menu from "../model/Menu";

class EventBenefitService {
  checkEvents(menu, date, giftMenu) {
    const totalEvents = [];
    const totalBenefits = [];
    const christmasDiscount = this.#calculateChristmasDiscount(date);
    if (christmasDiscount) {
      totalEvents.push(`크리스마스 디데이 할인: -${christmasDiscount.toLocaleString()}원`);
      totalBenefits.push(christmasDiscount);
    }
    const weekendDiscount = this.#calculateWeekendDiscount(date, menu);
    if (weekendDiscount){
        totalEvents.push(`주말 할인: -${weekendDiscount.toLocaleString()}원`)
        totalBenefits.push(weekendDiscount);
    }
    const weekdayDiscount = this.#calculateWeekDayDiscount(date, menu);
    if (weekdayDiscount){
        totalEvents.push(`평일 할인: -${weekdayDiscount.toLocaleString()}원`)
        totalBenefits.push(weekdayDiscount);
    }
    const specialDiscount = this.#calculateSpcialDiscount(date);
    if (specialDiscount){
        totalEvents.push(`특별 할인: -${specialDiscount.toLocaleString()}원`)
        totalBenefits.push(specialDiscount);
    }
    const benefitDiscount = this.#calculateBenefitDiscount(giftMenu);
    if (benefitDiscount){
        totalEvents.push(`증정 이벤트: -${benefitDiscount.toLocaleString()}원`)
        totalBenefits.push(benefitDiscount);
    }
    const totalBenefitsSum = this.#calculateTotalBenefits(totalBenefits);
    return [totalEvents, totalBenefitsSum];
  }

  #calculateTotalBenefits(benefits) {
    const totalBenefitsSum = benefits.reduce((acc, value) => acc + value, 0);
    return totalBenefitsSum;
  }

  #calculateChristmasDiscount(date) {
    const isChristmasEventDay = date >= 1 && date <= 25;
    if (isChristmasEventDay) {
      const christmasDiscount = 1000 + (date - 1) * 100;
      return christmasDiscount;
    }
    return 0;
  }

  #calculateWeekendDiscount(date, menu) {
    const weekend = ["1", "2", "8", "9", "15", "16", "22", "23", "29"];
    if (weekend.includes(date)) {
      const dessertMenuItems = Menu.getDessert();
      const dessertCount = menu.reduce((count, [itemName, quantity]) => {
        if (dessertMenuItems.some((dessert) => dessert.name === itemName)) {
          return count + quantity;
        }
        return count;
      }, 0);
      return dessertCount * 2023;
    }
  }

  #calculateWeekDayDiscount(date, menu){
    const weekday = ["3", "4", "5", "6", "7", "10", "11", "12", "13", "14", "17", "18", "19", "20", "21", "24", "25", "26", "27", "28", "31"];
    if (weekday.includes(date)) {
      const mainCourseMenuItems = Menu.getMainCourse();
      const mainCourseCount = menu.reduce((count, [itemName, quantity]) => {
          if (mainCourseMenuItems.some((mainCourse) => mainCourse.name === itemName)) {
              return count + quantity;
            }
            return count;
        }, 0);
      return mainCourseCount * 2023;
    }
  }
  #calculateSpcialDiscount(date){
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
