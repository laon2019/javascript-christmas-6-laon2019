class EventBadgeService{
    calculateEventBadge(totalPaymentPrice){
        if(totalPaymentPrice >= 20000) return "산타";
        if(totalPaymentPrice >= 10000) return "트리";
        if(totalPaymentPrice >= 5000) return "별";
        return "없음";
    }
}
export default EventBadgeService;