import { NUMBER } from '../utils/Constans';
import Menu from '../model/Menu';

class TotalPriceService {
  calculateTotalPrice(orderMenu) {
    const totalPrice = orderMenu.reduce((acc, [menuName, quantity]) => {
      const menuItem = Menu.getMenuItemByName(menuName);
      if (menuItem) {
        acc += menuItem.price * parseInt(quantity, NUMBER.TEN);
      }
      return acc;
    }, NUMBER.ZERO);
    return totalPrice;
  }
}

export default TotalPriceService;
