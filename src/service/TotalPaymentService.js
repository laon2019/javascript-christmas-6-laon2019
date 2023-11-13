class TotalPaymentService {
  calculateTotalPayment(totalPrice, totalBenefits, totalEvents) {
    const benefitDiscountPrice = totalEvents["증정 이벤트"];
    const benefitDiscount = benefitDiscountPrice ? 25000 : 0;
    const totalPaymentPrice = totalPrice - totalBenefits + benefitDiscount;
    return totalPaymentPrice;
  }
}
export default TotalPaymentService;
