import Menu from "../model/Menu";
import EventBenefitService from "./EventBenefitService";

class ValidateBenefitService {
    #eventBenefitService

    constructor(){
        this.#eventBenefitService = new EventBenefitService();
    }

    applySpecialEvents(menu, date, giftMenu, totalPrice){
        if(this.validateOrder(menu, totalPrice)){
            return this.#eventBenefitService.checkEvents(menu, date, giftMenu);
        }
        return [["없음"], 0];
    }
    
    validateOrder(menu, totalPrice){
        const isPriceOver = this.isPriceOverTenThousand(totalPrice);
        const isBeverageOnly = this.isBeverageOnly(menu);
        return isPriceOver && !isBeverageOnly;
    }

    isPriceOverTenThousand(totalPrice){
        return totalPrice >= 10000;
    }

    isBeverageOnly(menu) {
        const beverageMenuItems = Menu.getBeverage();
        const orderItems = menu.map(item => item[0]);
        const isBeverageOnly = orderItems.every(item => beverageMenuItems.some(beverage => beverage.name === item));
        return isBeverageOnly;
    }
}
export default ValidateBenefitService;