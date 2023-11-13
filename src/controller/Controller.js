import InputView from "../view/InputView";
import { ERROR_MESSAGES } from "../utils/Messages";
import OutputView from "../view/OutputView";
import OrderService from "../service/OrderService";
import OrderValidation from "../service/OrderValidation";
import TotalPriceService from "../service/TotalPriceService";
import ValidateBenefitService from "../service/ValidateBenefitService";
import TotalPaymentService from "../service/TotalPaymentService";

class Controller {
  #date;
  #menu;
  #orderService;
  #orderValidation;
  #totalPriceService;
  #validateBenefitService;
  #totalPaymentService;

  constructor() {
    this.#orderService = new OrderService();
    this.#orderValidation = new OrderValidation();
    this.#totalPriceService = new TotalPriceService();
    this.#validateBenefitService = new ValidateBenefitService();
    this.#totalPaymentService = new TotalPaymentService();
  }

  async decemberEvent() {
    try {
      OutputView.printHello();
      await this.#inputDate();
      await this.#inputMenu();
      this.#processOrder();
    } catch (error) {
      OutputView.print(ERROR_MESSAGES.DEFAULT_ERROR);
    }
  }

  async #inputDate() {
    try {
      this.#date = await InputView.readDate();
    } catch (error) {
      OutputView.print(ERROR_MESSAGES.INVALID_DATE);
      return this.#inputDate();
    }
  }

  async #inputMenu() {
    try {
      this.#menu = await InputView.readMenu();
      this.#menu = this.#orderService.splitMenuInput(this.#menu);
      this.#orderValidation.validateOrder(this.#menu);
    } catch (error) {
      OutputView.print(ERROR_MESSAGES.INVALID_MENU);
      return this.#inputMenu();
    }
  }

  async #processOrder() {
    try {
      const totalPrice = this.#totalPriceService.calculateTotalPrice(this.#menu);
      const [totalEvents, totalBenefits] = this.#validateBenefitService.applySpecialEvents(this.#menu, this.#date, totalPrice);
      this.#printOrderSummary(totalPrice, totalEvents, totalBenefits);
    } catch (error) {
      OutputView.print(ERROR_MESSAGES.DEFAULT_ERROR);
    }
  }

  async #printOrderSummary(totalPrice, totalEvents, totalBenefits) {
    const totalPaymentPrice = this.#totalPaymentService.calculateTotalPayment(totalPrice, totalBenefits, totalEvents);

    OutputView.printMenu(this.#menu);
    OutputView.printTotalPrice(totalPrice);
    OutputView.printGiftMenu(totalEvents);
    OutputView.printTotalEvents(totalEvents);
    OutputView.printTotalBenefitsPrice(totalBenefits);
    OutputView.printTotalPaymentPrice(totalPaymentPrice);
    OutputView.printEventBadge(totalPaymentPrice);
  }
}

export default Controller;
