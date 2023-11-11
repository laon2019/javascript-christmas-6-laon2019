import { Console } from "@woowacourse/mission-utils";
import { GAME_MESSAGES } from "../utils/Messages";

const OutputView = {
    printHello(){
        Console.print(GAME_MESSAGES.HELLO_MESSAGE);
    },
    printEvent(date){
        Console.print(`12월 ${date}일에 우테코 식당에서 받을 이벤트 혜택 미리 보기!`);
    },
    printMenu(menu) {
        Console.print("<주문 메뉴>");
        menu.forEach(([item, quantity]) => {
            Console.print(`${item} ${quantity}개`);
        });
    },
    printTotalPrice(price) {
        Console.print("<할인 전 총주문 금액>");
        Console.print(`${price}원`)
    }
}
export default OutputView;