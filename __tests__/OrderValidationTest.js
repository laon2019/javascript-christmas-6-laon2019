import OrderValidation from '../src/service/OrderValidation';

describe('OrderValidation', () => {
  let orderValidation;

  beforeEach(() => {
    orderValidation = new OrderValidation();
  });

  describe('메뉴 유효성 검사', () => {
    test('총 수량이 20을 초과하면 에러', () => {
      const menuItems = [
        ['양송이수프', 10],
        ['타파스', 15],
      ];
      expect(() => orderValidation.validateOrder(menuItems)).toThrowError(
        '[ERROR] 한 번에 최대 20개까지만 주문 가능합니다.'
      );
    });

    test('메뉴에 없는 아이템이 포함되어 있으면 에러', () => {
      const menuItems = [
        ['양송이수프', 2],
        ['초코수프', 3],
      ];
      expect(() => orderValidation.validateOrder(menuItems)).toThrowError(
        '[ERROR] 메뉴판에 없는 메뉴를 주문했습니다'
      );
    });

    test('아이템의 개수가 1 미만이면 에러', () => {
      const menuItems = [
        ['양송이수프', 0],
        ['타파스', -3],
      ];
      expect(() => orderValidation.validateOrder(menuItems)).toThrowError(
        '[ERROR] 메뉴의 개수는 1 이상의 정수만 입력되어야 합니다'
      );
    });

    test('아이템의 개수가 숫자가 아니면 에러', () => {
      const menuItems = [
        ['양송이수프', 'abc'],
        ['타파스', {}],
      ];
      expect(() => orderValidation.validateOrder(menuItems)).toThrowError(
        '[ERROR] 메뉴의 개수는 숫자를 입력해야 합니다.'
      );
    });

    test('중복된 아이템이 포함되어 있으면 에러', () => {
      const menuItems = [
        ['양송이수프', 2],
        ['양송이수프', 3],
      ];
      expect(() => orderValidation.validateOrder(menuItems)).toThrowError(
        '[ERROR] 중복된 메뉴를 주문했습니다.'
      );
    });

    test('메뉴 성공 테스트 1', () => {
      const menuItems = [
        ['양송이수프', 2],
        ['타파스', 1],
      ];
      expect(() => orderValidation.validateOrder(menuItems)).not.toThrow();
    });

    test('메뉴 성공 테스트 2', () => {
      const menuItems = [
        ['티본스테이크', 2],
        ['바비큐립', 1],
        ['샴페인', 1],
        ['아이스크림', 1],
      ];
      expect(() => orderValidation.validateOrder(menuItems)).not.toThrow();
    });

    test('메뉴 성공 테스트 3', () => {
      const menuItems = [
        ['제로콜라', 2],
        ['레드와인', 1],
      ];
      expect(() => orderValidation.validateOrder(menuItems)).not.toThrow();
    });
  });
});
