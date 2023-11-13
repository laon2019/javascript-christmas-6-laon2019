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

    test("주말 이벤트 테스트", () => {
        const eventBenefitService = new EventBenefitService();
        const menu = [["티본스테이크", 2], ["타파스", 1]]; 
        const date = "29"; 
        const giftMenu = 0; 
  
        const [allEvent, totalBenefitsSum] = eventBenefitService.checkEvents(menu, date, giftMenu);
  
        expect(allEvent["주말 할인"]).toBe(4046);
        expect(totalBenefitsSum).toBe(4046);
    });

    test("평일 이벤트 테스트", () => {
        const eventBenefitService = new EventBenefitService();
        const menu = [["초코케이크", 2], ["타파스", 1]]; 
        const date = "28"; 
        const giftMenu = 0; 
  
        const [allEvent, totalBenefitsSum] = eventBenefitService.checkEvents(menu, date, giftMenu);
  
        expect(allEvent["평일 할인"]).toBe(4046);
        expect(totalBenefitsSum).toBe(4046);
    });

    test("특별 이벤트 테스트", () => {
        const eventBenefitService = new EventBenefitService();
        const menu = [["양송이수프", 2], ["타파스", 1]]; 
        const date = "31"; 
        const giftMenu = 0; 
  
        const [allEvent, totalBenefitsSum] = eventBenefitService.checkEvents(menu, date, giftMenu);
  
        expect(allEvent["특별 할인"]).toBe(1000);
        expect(totalBenefitsSum).toBe(1000);
    });

    test("증정 이벤트 테스트", () => {
        const eventBenefitService = new EventBenefitService();
        const menu = [["양송이수프", 2], ["타파스", 1]]; 
        const date = "28"; 
        const giftMenu = true; 
  
        const [allEvent, totalBenefitsSum] = eventBenefitService.checkEvents(menu, date, giftMenu);
  
        expect(allEvent["증정 이벤트"]).toBe(25000);
        expect(totalBenefitsSum).toBe(25000);
    });

    test("이벤트 테스트 1", () => {
        const eventBenefitService = new EventBenefitService();
        const menu = [["양송이수프", 5], ["타파스", 2], ["초코케이크", 2], ["티본스테이크", 2]]; 
        const date = "13"; 
        const giftMenu = true; 
  
        const [allEvent, totalBenefitsSum] = eventBenefitService.checkEvents(menu, date, giftMenu);
  
        expect(allEvent["크리스마스 디데이 할인"]).toBe(2200);
        expect(allEvent["주말 할인"]).toBe(0);
        expect(allEvent["평일 할인"]).toBe(4046);
        expect(allEvent["특별 할인"]).toBe(0);
        expect(allEvent["증정 이벤트"]).toBe(25000);
        expect(totalBenefitsSum).toBe(31246);
    });
    test("이벤트 테스트 1", () => {
        const eventBenefitService = new EventBenefitService();
        const menu = [["양송이수프", 5], ["타파스", 2], ["초코케이크", 2], ["티본스테이크", 2]]; 
        const date = "13"; 
        const giftMenu = true; 
  
        const [allEvent, totalBenefitsSum] = eventBenefitService.checkEvents(menu, date, giftMenu);
  
        expect(allEvent["크리스마스 디데이 할인"]).toBe(2200);
        expect(allEvent["주말 할인"]).toBe(0);
        expect(allEvent["평일 할인"]).toBe(4046);
        expect(allEvent["특별 할인"]).toBe(0);
        expect(allEvent["증정 이벤트"]).toBe(25000);
        expect(totalBenefitsSum).toBe(31246);
    });

    test("이벤트 테스트 2", () => {
        const eventBenefitService = new EventBenefitService();
        const menu = [["양송이수프", 5], ["타파스", 2], ["초코케이크", 2], ["티본스테이크", 2]]; 
        const date = "17"; 
        const giftMenu = true; 
  
        const [allEvent, totalBenefitsSum] = eventBenefitService.checkEvents(menu, date, giftMenu);
  
        expect(allEvent["크리스마스 디데이 할인"]).toBe(2600);
        expect(allEvent["주말 할인"]).toBe(0);
        expect(allEvent["평일 할인"]).toBe(4046);
        expect(allEvent["특별 할인"]).toBe(1000);
        expect(allEvent["증정 이벤트"]).toBe(25000);
        expect(totalBenefitsSum).toBe(32646);
    });

    test("이벤트 테스트 3", () => {
        const eventBenefitService = new EventBenefitService();
        const menu = [["양송이수프", 5], ["타파스", 2], ["초코케이크", 2], ["티본스테이크", 5]]; 
        const date = "29"; 
        const giftMenu = true; 
  
        const [allEvent, totalBenefitsSum] = eventBenefitService.checkEvents(menu, date, giftMenu);
  
        expect(allEvent["크리스마스 디데이 할인"]).toBe(0);
        expect(allEvent["주말 할인"]).toBe(10115);
        expect(allEvent["평일 할인"]).toBe(0);
        expect(allEvent["특별 할인"]).toBe(0);
        expect(allEvent["증정 이벤트"]).toBe(25000);
        expect(totalBenefitsSum).toBe(35115);
    });
  });
});
