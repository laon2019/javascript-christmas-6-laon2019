import Menu from '../model/Menu';
import EventBenefitService from './EventBenefitService';
import { EVENT_AMOUNT, NUMBER } from '../utils/Constans';

class ValidateBenefitService {
  #eventBenefitService;

  constructor() {
    this.#eventBenefitService = new EventBenefitService();
  }

  applySpecialEvents(menu, date, totalPrice) {
    if (this.validateOrder(menu, totalPrice)) {
      return this.#eventBenefitService.checkEvents(menu, date, totalPrice);
    }
    return [false, NUMBER.ZERO];
  }

  validateOrder(menu, totalPrice) {
    const isPriceOver = this.isPriceOverTenThousand(totalPrice);
    const isBeverageOnly = this.isBeverageOnly(menu);
    return isPriceOver && !isBeverageOnly;
  }

  isPriceOverTenThousand(totalPrice) {
    return totalPrice >= EVENT_AMOUNT.PRICE_THRESHOLD;
  }

  isBeverageOnly(menu) {
    const beverageMenuItems = Menu.getBeverage();
    const orderItems = menu.map((item) => item[NUMBER.ZERO]);
    const isBeverageOnly = orderItems.every((item) =>
      beverageMenuItems.some((beverage) => beverage.name === item)
    );
    return isBeverageOnly;
  }
}
export default ValidateBenefitService;
