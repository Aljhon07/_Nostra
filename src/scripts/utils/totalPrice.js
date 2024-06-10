export function calculateTotalPrice(items) {
    console.log(items)
    let totalPrice = 0;
    items.forEach(item => {
        totalPrice += (item.prod.price * 10 * item.qty);
        });
    return totalPrice;
}