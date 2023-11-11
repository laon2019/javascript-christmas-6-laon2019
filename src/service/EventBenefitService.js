class EventBenefitService {
  checkEvents(menu, date) {
    const totalEvents = [];
    const totalBenefits = []; 
    const christmasDiscount = this.#calculateChristmasDiscount(date);
    if (christmasDiscount) {
        totalEvents.push(`크리스마스 디데이 할인: -${christmasDiscount}원`);
        totalBenefits.push(christmasDiscount);
    }
    const totalBenefitsSum = this.#calculateTotalBenefits(totalBenefits);
    return [ totalEvents, totalBenefitsSum ];
  }

  #calculateTotalBenefits(benefits) {
    const totalBenefitsSum = benefits.reduce((acc, value) => acc + value, 0);
    return totalBenefitsSum;
  }

  #calculateChristmasDiscount(day) {
    const isChristmasEventDay = day >= 1 && day <= 25;
    if (isChristmasEventDay) {
      const christmasDiscount = 1000 + (day - 1) * 100;
      return christmasDiscount;
    }
    return 0;
  }
}
export default EventBenefitService;
