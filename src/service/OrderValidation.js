import Menu from "../model/Menu";
import { ERROR_MENU_MESSAGES } from "../utils/Messages";

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
      (sum, [, quantity]) => sum + quantity,
      0
    );
    if (totalQuantity > 20) {
      throw new Error(ERROR_MENU_MESSAGES.MAX_ORDER_COUNT);
    }
  }

  #validateAvailableMenu(menuItems) {
    const allMenuItems = Menu.getAllMenuItems();
    const allMenuNames = allMenuItems.map((item) => item.name);
    menuItems.forEach((menu) => {
      const itemName = menu[0];
      if (!allMenuNames.includes(itemName)) {
        throw new Error(ERROR_MENU_MESSAGES.INVALID_MENU);
      }
    });
  }

  #validateQuantity(menuItems) {
    menuItems.forEach((menu) => {
      if (menu[1] < 1) {
        throw new Error(ERROR_MENU_MESSAGES.INVALID_QUANTITY);
      }
    });
  }

  #validateNumber(menuItems) {
    menuItems.forEach((menu) => {
      if (isNaN(Number(menu[1]))) {
        throw new Error(ERROR_MENU_MESSAGES.INVALID_NUMBER);
      }
    });
  }

  #validateDuplicate(menuItems) {
    const menuNamesSet = new Set();
    menuItems.forEach((menu) => {
      menuNamesSet.add(menu[0]);
    });
    if (menuItems.length !== menuNamesSet.size) {
      throw new Error(ERROR_MENU_MESSAGES.DUPLICATE_MENU);
    }
  }
}

export default OrderValidation;
