import InputView from "../view/InputView";
import { Console } from "@woowacourse/mission-utils";
import { ERROR_MESSAGES } from "../utils/Messages";
import OutputView from "../view/OutputView";
import OrderService from "../service/OrderService";
import OrderValidation from "../service/OrderValidation";
import TotalPriceService from "../service/TotalPriceService";
import GiftMenuService from "../service/GiftMenuService";
import ValidateBenefitService from "../service/ValidateBenefitService";
import TotalBenefitsService from "../service/TotalBenefitsService";
import TotalPaymentService from "../service/TotalPaymentService";
import EventBadgeService from "../service/EventBadgeService";

class Controller {
  #date;
  #menu;
  #orderService;
  #orderValidation;
  #totalPriceService;
  #giftMenuService;
  #validateBenefitService;
  #totalBenefitsService;
  #totalPaymentService;
  #eventBadgeService;

  constructor() {
    this.#orderService = new OrderService();
    this.#orderValidation = new OrderValidation();
    this.#totalPriceService = new TotalPriceService();
    this.#giftMenuService = new GiftMenuService();
    this.#validateBenefitService = new ValidateBenefitService();
    this.#totalBenefitsService = new TotalBenefitsService();
    this.#totalPaymentService = new TotalPaymentService();
    this.#eventBadgeService = new EventBadgeService();
  }

  async start() {
    try {
      OutputView.printHello();
      await this.inputDate();
      await this.inputMenu();
      OutputView.printEvent(this.#date);
      this.printOrderSummary();
    } catch (error) {
      Console.print(ERROR_MESSAGES.DEFAULT_ERROR);
    }
  }

  async inputDate() {
    try {
      this.#date = await InputView.readDate();
    } catch (error) {
      Console.print("[ERROR] 유효하지 않은 날짜입니다. 다시 입력해 주세요.");
      return this.inputDate();
    }
  }

  async inputMenu() {
    try {
      this.#menu = await InputView.readMenu();
      this.#menu = this.#orderService.splitMenuInput(this.#menu);
      this.#orderValidation.validateOrder(this.#menu);
    } catch (error) {
      Console.print("[ERROR] 유효하지 않은 주문입니다. 다시 입력해 주세요.");
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
        const totalBenefitsPrice = this.#totalBenefitsService.calculateTotalBenefits(totalBenefits);
        OutputView.printTotalBenefitsPrice(totalBenefitsPrice);
        const totalPaymentPrice = this.#totalPaymentService.calculateTotalPayment(totalPrice, totalBenefits, giftMenu);
        OutputView.printTotalPaymentPrice(totalPaymentPrice);
        const eventBadge = this.#eventBadgeService.calculateEventBadge(totalBenefits);
        console.log(eventBadge);
    } catch (error) {
      Console.print(ERROR_MESSAGES.DEFAULT_ERROR);
    }
  }
}
export default Controller;
