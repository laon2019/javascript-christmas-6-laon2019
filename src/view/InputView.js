import { Console } from "@woowacourse/mission-utils";
import { GAME_MESSAGES, ERROR_MESSAGES } from "../utils/Messages";
import DateValidation from "../utils/Validation";

const InputView = {
  async readDate() {
    try {
      const input = await Console.readLineAsync(GAME_MESSAGES.INPUT_DATE);
      if (!DateValidation.validation(input)){
        throw new Error(ERROR_MESSAGES.INVALID_RANGE);
      }
      return input;
    } catch (error) {
      throw new Error(ERROR_MESSAGES.INVALID_RANGE);
    }
  },
  async readMenu() {
    try {
      const menu = await Console.readLineAsync(GAME_MESSAGES.INPUT_MENU);
      return menu;
    } catch (error) {
      throw new Error(ERROR_MESSAGES.DEFAULT_ERROR);
    }
  },
};
export default InputView;
