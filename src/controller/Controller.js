import InputView from "../view/InputView";
import { ERROR_MESSAGES } from "../utils/Messages";
import OutputView from "../view/OutputView";
import OrderService from "../service/OrderService";
import OrderValidation from "../service/OrderValidation";
import TotalPriceService from "../service/TotalPriceService";
import GiftMenuService from "../service/GiftMenuService";
import ValidateBenefitService from "../service/ValidateBenefitService";
import TotalPaymentService from "../service/TotalPaymentService";

class Controller {
  #date;
  #menu;
  #orderService;
  #orderValidation;
  #totalPriceService;
  #giftMenuService;
  #validateBenefitService;
  #totalPaymentService;

  constructor() {
    this.#orderService = new OrderService();
    this.#orderValidation = new OrderValidation();
    this.#totalPriceService = new TotalPriceService();
    this.#giftMenuService = new GiftMenuService();
    this.#validateBenefitService = new ValidateBenefitService();
    this.#totalPaymentService = new TotalPaymentService();
  }

  async start() {
    try {
      OutputView.printHello();
      await this.inputDate();
      await this.inputMenu();
      OutputView.printEvent(this.#date);
      this.printOrderSummary();
    } catch (error) {
      OutputView.print(ERROR_MESSAGES.DEFAULT_ERROR);
    }
  }

  async inputDate() {
    try {
      this.#date = await InputView.readDate();
    } catch (error) {
      OutputView.print(ERROR_MESSAGES.INVALID_DATE);
      return this.inputDate();
    }
  }

  async inputMenu() {
    try {
      this.#menu = await InputView.readMenu();
      this.#menu = this.#orderService.splitMenuInput(this.#menu);
      this.#orderValidation.validateOrder(this.#menu);
    } catch (error) {
      OutputView.print(ERROR_MESSAGES.INVALID_MENU);
      return this.inputMenu();
    }
  }

  async printOrderSummary() {
    try {
      OutputView.printMenu(this.#menu);
      const totalPrice = this.#totalPriceService.calculateTotalPrice(this.#menu);
      OutputView.printTotalPrice(totalPrice);
      const giftMenu = this.#giftMenuService.provideGift(totalPrice);
      OutputView.printGiftMenu(giftMenu);
      const [totalEvents, totalBenefits] = this.#validateBenefitService.applySpecialEvents(this.#menu, this.#date, giftMenu, totalPrice);
      OutputView.printTotalEvents(totalEvents);
      OutputView.printTotalBenefitsPrice(totalBenefits);
      const totalPaymentPrice = this.#totalPaymentService.calculateTotalPayment(totalPrice, totalBenefits, giftMenu);
      OutputView.printTotalPaymentPrice(totalPaymentPrice);
      OutputView.printEventBadge(totalPaymentPrice);
    } catch (error) {
      OutputView.print(ERROR_MESSAGES.DEFAULT_ERROR);
    }
  }
}
export default Controller;
