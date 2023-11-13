import Menu from '../model/Menu';
import { ERROR_MENU_MESSAGES } from '../utils/Messages';
import { NUMBER, EVENT_CONSTANTS } from '../utils/Constans';

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
      NUMBER.ZERO
    );
    if (totalQuantity > EVENT_CONSTANTS.MAX_MENU_QUANTITY) {
      throw new Error(ERROR_MENU_MESSAGES.MAX_ORDER_COUNT);
    }
  }

  #validateAvailableMenu(menuItems) {
    const allMenuItems = Menu.getAllMenuItems();
    const allMenuNames = allMenuItems.map((item) => item.name);
    menuItems.forEach((menu) => {
      const itemName = menu[NUMBER.ZERO];
      if (!allMenuNames.includes(itemName)) {
        throw new Error(ERROR_MENU_MESSAGES.INVALID_MENU);
      }
    });
  }

  #validateQuantity(menuItems) {
    menuItems.forEach((menu) => {
      if (menu[NUMBER.ONE] < NUMBER.ONE) {
        throw new Error(ERROR_MENU_MESSAGES.INVALID_QUANTITY);
      }
    });
  }

  #validateNumber(menuItems) {
    menuItems.forEach((menu) => {
      if (isNaN(Number(menu[NUMBER.ONE]))) {
        throw new Error(ERROR_MENU_MESSAGES.INVALID_NUMBER);
      }
    });
  }

  #validateDuplicate(menuItems) {
    const menuNamesSet = new Set();
    menuItems.forEach((menu) => {
      menuNamesSet.add(menu[NUMBER.ZERO]);
    });
    if (menuItems.length !== menuNamesSet.size) {
      throw new Error(ERROR_MENU_MESSAGES.DUPLICATE_MENU);
    }
  }
}

export default OrderValidation;
