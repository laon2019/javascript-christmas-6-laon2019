import { Console } from "@woowacourse/mission-utils";
import { GAME_MESSAGES } from "../utils/Messages";

const OutputView = {
  print(message) {
    Console.print(message);
  },
  printHello() {
    Console.print(GAME_MESSAGES.HELLO_MESSAGE);
  },
  printEvent(date) {
    Console.print(
      `12월 ${date}일에 우테코 식당에서 받을 이벤트 혜택 미리 보기!`
    );
  },
  printMenu(menu) {
    Console.print("<주문 메뉴>");
    menu.forEach(([item, quantity]) => {
      Console.print(`${item} ${quantity}개`);
    });
  },
  printTotalPrice(price) {
    Console.print("<할인 전 총주문 금액>");
    Console.print(`${price.toLocaleString()}원`);
  },
  printGiftMenu(gift) {
    Console.print("<증정 메뉴>");
    Console.print(`${gift}`);
  },
  printTotalEvents(totalEvents) {
    Console.print("<혜택 내역>");
    if(!totalEvents){
        Console.print("없음");
    } else{
        Object.entries(totalEvents).forEach(([event, discount]) => {
            if (discount > 0) {
              const formattedDiscount = discount.toLocaleString();
              const formattedEvent = `${event}: -${formattedDiscount}원`;
              Console.print(formattedEvent);
            }
          });
    }
  },
  printTotalBenefitsPrice(price) {
    Console.print("<총혜택 금액>");
    Console.print(`${price}`);
  },
  printTotalPaymentPrice(price) {
    Console.print("<할인 후 예상 결제 금액>");
    Console.print(`${price.toLocaleString()}원`);
  },
  printEventBadge(bedge) {
    Console.print("<12월 이벤트 배지>");
    Console.print(`${bedge}`);
  },
};
export default OutputView;
