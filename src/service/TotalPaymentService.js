class TotalPaymentService {
  calculateTotalPayment(totalPrice, totalBenefits, giftMenu) {
    const benefitDiscount = giftMenu ? 25000 : 0;
    const totalPaymentPrice = totalPrice - totalBenefits + benefitDiscount;
    return totalPaymentPrice;
  }
}
export default TotalPaymentService;
