import InputView from "../view/InputView";
import { Console } from "@woowacourse/mission-utils";
import { ERROR_MESSAGES } from "../utils/Messages";
import OutputView from "../view/OutputView";
import OrderService from "../service/OrderService";

class Controller {
  #date;
  #menu;

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
      Console.print(ERROR_MESSAGES.DEFAULT_ERROR);
    }
  }

  async inputMenu() {
    try {
      this.#menu = await InputView.readMenu();
      this.#menu = OrderService.parseOrderInput(this.#menu);
      console.log(this.#menu)
    } catch (error) {
      Console.print(ERROR_MESSAGES.DEFAULT_ERROR);
    }
  }

  async printEvent() {
    try {
      OutputView.printEvent(this.#date);
    } catch (error) {
      Console.print(ERROR_MESSAGES.DEFAULT_ERROR);
    }
  }
}
export default Controller;
