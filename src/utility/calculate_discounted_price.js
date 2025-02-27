export function calculate_discount_price(actual_price, discount_in_percentage){
    const discount = 100 - discount_in_percentage;
    const netPrice = actual_price*(discount/100);
    return Math.round(netPrice);
}