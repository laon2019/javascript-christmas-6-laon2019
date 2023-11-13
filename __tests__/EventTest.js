import EventBenefitService from "../src/service/EventBenefitService";

describe("이벤트 테스트", () => {
  describe("#checkEvents", () => {
   test("크리스마스 이벤트 테스트", () => {
      const eventBenefitService = new EventBenefitService();
      const menu = [["양송이수프", 2], ["타파스", 1]]; 
      const date = "4"; 
      const giftMenu = 0; 

      const [allEvent, totalBenefitsSum] = eventBenefitService.checkEvents(menu, date, giftMenu);

      expect(allEvent["크리스마스 디데이 할인"]).toBe(1300);
      expect(totalBenefitsSum).toBe(1300);
    });

  });
});
