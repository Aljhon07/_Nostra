import { initPaymentOptions } from "./payment-options.js";
export function initShippingInfo() {
    const content = `
        <section class="shipping-info">
            <h2>Enter Your Shipping Address</h2>
            <form action="" id="shipping-form">
                <label for="full-name">Full Name</label>
                <input type="text" id="full-name" name="full-name" required><br>
                
                <label for="country">Country</label>
                <input type="text" id="country" name="country" required><br>

                <label for="province">Province</label>
                <input type="text" id="province" name="province" required><br>

                <label for="city">City</label>
                <input type="text" id="city" name="city" required><br>

                <div class="container">
                    <div class="wrapper">
                        <label for="postal-code">Postal Code</label>
                        <input type="text" id="postal-code" name="postal-code" required>
                    </div>
                     <div class="wrapper">
                        <label for="street">Street</label>
                        <input type="text" id="street" name="street" required>
                    </div>
                </div>
                <h2 style="margin: .5rem 0;">Shipping Information</h2>
                <div class="courier-price">
                    <div class="courier">
                        <label for="courier">Courier</label>
                        <select id="courier" name="courier" required>
                            <option value="J&T Express" disabled selected>J&T Express</option>
                        </select>
                    </div>
                    <div class="price">
                        Price
                        <p>Shipping Fee: P40</p>
                        <p>Merchandise Total: P<span class="merchandise-total">100</span></p>
                        <h3>Sub Total: <span class="sub-total"></span></h3>
                    </div>
                </div>
                <button class="next-btn">Next</button>
            </form>
        </section>
    `;

    return [content, cb];
}


function cb(userInfoEl) {
    const totalPrice = JSON.parse(localStorage.getItem("totalPrice")).toFixed(2)
    const merchTotal = $('.merchandise-total')
    const subTotal = $('.sub-total')
    subTotal.innerText = parseFloat(totalPrice) + 40
    merchTotal.innerText = totalPrice;

    const stepButtons = $all('.personal-details header button .step')
    stepButtons[0].classList.add('current')

    const form = $('#shipping-form');
    form.addEventListener('submit', (e) => {
        e.preventDefault();
        const formData = new FormData(form);
    
        const shippingInfo = {};
        formData.forEach((value, key) => {
            shippingInfo[key] = value;
        });
        shippingInfo['subTotal'] = subTotal.innerText
        localStorage.setItem('shippingInfo', JSON.stringify(shippingInfo))

        const [content, paymentCb] = initPaymentOptions()
        stepButtons[0].classList.add('done')
        stepButtons[0].innerText = "✓"
        userInfoEl.innerHTML = content
        paymentCb(userInfoEl)
    })
}