import Menu from "../model/Menu";

class OrderValidation {
  validateOrder(menuItems) {
    this.#validateMaxOrderCount(menuItems);
    this.#validateAvailableMenu(menuItems);
    this.#validateQuantity(menuItems);
    this.#validateNumber(menuItems);
    this.#validateDuplicate(menuItems);
  }

  #validateMaxOrderCount(menuItems) {
    const totalQuantity = menuItems.reduce(
      (sum, [, quantity]) => sum + quantity
      , 0);
    if (totalQuantity > 20) {
      throw new Error("[ERROR] 한 번에 최대 20개까지만 주문 가능합니다.");
    }
  }

  #validateAvailableMenu(menuItems) {
    const allMenuItems = Menu.getAllMenuItems();
    const allMenuNames = allMenuItems.map((item) => item.name);
    menuItems.forEach((menu) => {
      const itemName = menu[0];
      if (!allMenuNames.includes(itemName)) {
        throw new Error("[ERROR] 메뉴판에 없는 메뉴를 주문했습니다");
      }
    });
  }

  #validateQuantity(menuItems) {
    menuItems.forEach((menu) => {
      if (menu[1] < 1) {
        throw new Error("[ERROR] 메뉴의 개수는 1 이상의 정수만 입력되어야 합니다");
      }
    });
  }

  #validateNumber(menuItems) {
    menuItems.forEach((menu) => {
      if (isNaN(Number(menu[1]))) {
        throw new Error("[ERROR] 메뉴의 개수는 숫자를 입력해야 합니다.");
      }
    });
  }

  #validateDuplicate(menuItems) {
    const menuNamesSet = new Set();
    menuItems.forEach((menu) => {
      menuNamesSet.add(menu[0]);
    });
    if (menuItems.length !== menuNamesSet.size) {
      throw new Error("[ERROR] 중복된 메뉴를 주문했습니다.");
    }
  }
}

export default OrderValidation;
