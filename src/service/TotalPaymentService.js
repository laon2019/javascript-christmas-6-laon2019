import { EVENT_AMOUNT, EVENT_STRING } from '../utils/Constans';

class TotalPaymentService {
  calculateTotalPayment(totalPrice, totalBenefits, totalEvents) {
    const benefitDiscountPrice = totalEvents[EVENT_STRING.GIFT_EVENT];
    const benefitDiscount = benefitDiscountPrice ? EVENT_AMOUNT.BENEFIT_DISCOUNT_AMOUNT : EVENT_AMOUNT.ZERO_AMOUNT;
    const totalPaymentPrice = totalPrice - totalBenefits + benefitDiscount;
    return totalPaymentPrice;
  }
}
export default TotalPaymentService;