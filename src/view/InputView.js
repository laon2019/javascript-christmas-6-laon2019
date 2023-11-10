import { Console } from "@woowacourse/mission-utils";
import { GAME_MESSAGES, ERROR_MESSAGES } from "../utils/Messages";
import { isNumberInRange, isNumber, isNotEnglish } from "../utils/Validation";

const InputView = {
    async readDate() {
        try {
            const input = await Console.readLineAsync(GAME_MESSAGES.INPUT_DATE);
            if(!isNumberInRange(input)) throw new Error(ERROR_MESSAGES.INVALID_RANGE);
            if(!isNumber(input)) throw new Error(ERROR_MESSAGES.INVALID_NUMBER);
            return input;
        } catch (error) {
            throw new Error(ERROR_MESSAGES.DEFAULT_ERROR);
        }
    },
    async readMenu() {
        try {
            const menu = await Console.readLineAsync(GAME_MESSAGES.INPUT_MENU);
            if(!isNotEnglish(menu)) throw new Error(ERROR_MESSAGES.INVALID_ENGLISH);
            return menu;
        } catch (error) {
            throw new Error(ERROR_MESSAGES.DEFAULT_ERROR);
        }
    }
}
export default InputView;