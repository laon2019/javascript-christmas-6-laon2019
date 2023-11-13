import { SPLIT_STRING } from "../utils/Constans";

class MenuSplitService {
  splitMenuInput(menuInput) {
    const menuItems = menuInput.split(SPLIT_STRING.COMMA_SEPARATOR);
    const parsedOrder = [];

    menuItems.forEach((menuItem) => {
      const [menuName, quantity] = menuItem.split(SPLIT_STRING.DASH_SEPARATOR);
      parsedOrder.push([menuName, parseInt(quantity)]);
    });
    return parsedOrder;
  }
}
export default MenuSplitService;