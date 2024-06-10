import { initReview } from "./review.js";

export function initPaymentOptions() {
    const content =  `
        <h2>Choose Payment Option</h2>
        <form id="payment-form" class="payment-options">
            <div class="option-wrapper">
                <input type="radio" id="credit-card" name="payment-option" value="Credit Card">
                <label for="credit-card">Credit Card</label>
                <img src="../../../assets/mastercard.svg" alt="Credit Card Image">
            </div>

            <div class="option-wrapper">
                <input type="radio" id="gcash" name="payment-option" value="GCash">
                <label for="gcash">GCash</label>
                <img src="../../../assets/gcash.png" alt="GCash Image">
            </div>

            <div class="option-wrapper">
                <input type="radio" id="paypal" name="payment-option" value="Paypal">
                <label for="paypal">PayPal</label>
                <img src="../../../assets/paypal.png" alt="PayPal Image">
            </div>

            <div class="option-wrapper">
                <input type="radio" id="cod" name="payment-option" value="Cash On Delivery">
                <label for="cod">Cash on Delivery (COD)</label>
            </div>

            <button type="submit" class="next-btn">Next</button>
        </form>     
    `;

    return [content, cb];
}

function cb(userInfoEl) {
    const stepButtons = $all('.personal-details header button .step');
    stepButtons[1].classList.add('current');

    const form = $('#payment-form');
    form.addEventListener('submit', (e) => {
        e.preventDefault();
        const formData = new FormData(form);
  
        const paymentOption = formData.get('payment-option');
  
        localStorage.setItem('paymentOption', JSON.stringify(paymentOption));

        stepButtons[1].classList.add('done');
        stepButtons[1].innerText = "✓";

        const [review, reviewCb] = initReview()
        userInfoEl.innerHTML = review
        reviewCb()
    });
}
