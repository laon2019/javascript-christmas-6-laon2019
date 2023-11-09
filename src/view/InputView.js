import { GAME_MESSAGES, ERROR_MESSAGES } from "../utils/Messages";
import { isNumberInRange, isNumber, isNotEnglish } from "../utils/Validation";
import { Console } from "@woowacourse/mission-utils";

class InputView {
    static async readDate() {
        try {
            const input = await Console.readLineAsync(GAME_MESSAGES.INPUT_DATE);
            const menu = await Console.readLineAsync(GAME_MESSAGES.INPUT_MENU);
            console.log(menu)
            if(!isNumberInRange(input)) throw new Error(ERROR_MESSAGES.INVALID_RANGE);
            if(!isNumber(input)) throw new Error(ERROR_MESSAGES.INVALID_NUMBER);
            return input
        } catch (error) {
            throw new Error(ERROR_MESSAGES.DEFAULT_ERROR);
        }
    }
    static async readMain() {
        try {
            const menu = await Console.readLineAsync(GAME_MESSAGES.INPUT_MENU);
            console.log(menu)
            if(!isNotEnglish(input)) throw new Error(ERROR_MESSAGES.INVALID_ENGLISH);
            return input
        } catch (error) {
            throw new Error(ERROR_MESSAGES.DEFAULT_ERROR);
        }
    }
}
export default InputView;