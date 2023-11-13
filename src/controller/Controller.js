import InputView from "../view/InputView";
import { ERROR_MESSAGES } from "../utils/Messages";
import OutputView from "../view/OutputView";
import MenuSplitService from "../service/MenuSplitService";
import OrderValidation from "../service/OrderValidation";
import TotalPriceService from "../service/TotalPriceService";
import ValidateBenefitService from "../service/ValidateBenefitService";
import TotalPaymentService from "../service/TotalPaymentService";
import MenuRepository from "../repository/MenuRepository";
import DateRepository from "../repository/DateRepository";

class Controller {
  #menuRepository;
  #dateRepository;
  #menuSplitService;
  #orderValidation;
  #totalPriceService;
  #validateBenefitService;
  #totalPaymentService;

  constructor() {
    this.#menuRepository = new MenuRepository();
    this.#dateRepository = new DateRepository();
    this.#menuSplitService = new MenuSplitService();
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
      const date = await InputView.readDate();
      this.#dateRepository.setDate(date);
    } catch (error) {
      OutputView.print(ERROR_MESSAGES.INVALID_DATE);
      return this.#inputDate();
    }
  }

  async #inputMenu() {
    try {
      const menu = await InputView.readMenu();
      const splitMenu = this.#menuSplitService.splitMenuInput(menu);
      this.#orderValidation.validateOrder(splitMenu);
      this.#menuRepository.setMenu(splitMenu);
    } catch (error) {
      OutputView.print(ERROR_MESSAGES.INVALID_MENU);
      return this.#inputMenu();
    }
  }

  async #processOrder() {
    try {
      const menu = this.#menuRepository.getMenu();
      const date = this.#dateRepository.getDate();
      const totalPrice = this.#totalPriceService.calculateTotalPrice(menu);
      const [totalEvents, totalBenefits] = this.#validateBenefitService.applySpecialEvents(menu, date, totalPrice);
      this.#printOrderSummary(totalPrice, totalEvents, totalBenefits);
    } catch (error) {
      OutputView.print(ERROR_MESSAGES.DEFAULT_ERROR);
    }
  }

  async #printOrderSummary(totalPrice, totalEvents, totalBenefits) {
    const totalPaymentPrice = this.#totalPaymentService.calculateTotalPayment(totalPrice, totalBenefits, totalEvents);

    OutputView.printMenu(this.#menuRepository.getMenu());
    OutputView.printTotalPrice(totalPrice);
    OutputView.printGiftMenu(totalEvents);
    OutputView.printTotalEvents(totalEvents);
    OutputView.printTotalBenefitsPrice(totalBenefits);
    OutputView.printTotalPaymentPrice(totalPaymentPrice);
    OutputView.printEventBadge(totalPaymentPrice);
  }
}

export default Controller;
