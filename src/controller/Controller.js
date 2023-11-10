import InputView from "../view/InputView";
import { Console } from "@woowacourse/mission-utils";
import { ERROR_MESSAGES } from "../utils/Messages";
import OutputView from "../view/OutputView";
import OrderService from "../service/OrderService";
import OrderValidation from "../service/OrderValidation";

class Controller {
  #date;
  #menu;
  #orderService;
  #orderValidation;

  constructor() {
    this.#orderService = new OrderService();
    this.#orderValidation = new OrderValidation();
  }

  async start() {
    try {
      OutputView.printHello();
      await this.inputDate();
    } catch (error) {
      Console.print(ERROR_MESSAGES.DEFAULT_ERROR);
    }
  }

  async inputDate() {
    try {
      this.#date = await InputView.readDate();
      await this.inputMenu();
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
      this.printEvent();
    } catch (error) {
      Console.print("[ERROR] 유효하지 않은 주문입니다. 다시 입력해 주세요.");
      return this.inputMenu();
    }
  }

  async printEvent() {
    try {
      OutputView.printEvent(this.#date);
      this.printOrderSummary();
    } catch (error) {
      Console.print(ERROR_MESSAGES.DEFAULT_ERROR);
    }
  }

  async printOrderSummary() {
    try {
        console.log(this.#menu)
        OutputView.printMenu(this.#menu);
    } catch (error) {
      Console.print(ERROR_MESSAGES.DEFAULT_ERROR);
    }
  }
}
export default Controller;
