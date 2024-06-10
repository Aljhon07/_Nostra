import { initCart } from "../pages/cart.js";
import { calculateTotalPrice } from "../utils/totalPrice.js";

export function initCartItem(item){
    const content = `
        <div class="cart-item">
            <img src="${item.prod.image}" alt="Product Image">
            <div class="details">
                <h3>${item.prod.title}</h3>
                <p>P${(item.prod.price * 10).toFixed(2)}</p>
                <p>Details: Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                <div>
                    <p>Quantity: <input type="number" class="quantity" value="${item.qty}" min="1"></p>
                    <button class="remove-btn">Remove</button>
                </div>
            </div>
        </div>
    `
    return [content, cb]
}


function cb(id) {
    const removeBtn = $all('.remove-btn')
    const app = $('#app')
    removeBtn.forEach((btn, index) => {
        btn.addEventListener('click', () => {
            console.log(index)
            const cart = JSON.parse(localStorage.getItem('cart'));
            cart.splice(index, 1)
            localStorage.setItem('cart', JSON.stringify(cart))
            const [content, cartCb] = initCart()
            app.innerHTML = content
            cartCb();

            const totalPrice = calculateTotalPrice(cart)
            localStorage.setItem('totalPrice', totalPrice)
            const merchTotal = $('.merchandise-total')
            const subTotal = $('.sub-total')
            subTotal.innerText = parseFloat(totalPrice) + 40
            merchTotal.innerText = totalPrice;
        })
    });
}