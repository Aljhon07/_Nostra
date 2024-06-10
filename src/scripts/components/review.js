export function initReview() {
    const userInfo = JSON.parse(localStorage.getItem('shippingInfo'))
    const paymentOption = JSON.parse(localStorage.getItem('paymentOption')) || 'Cash On Delivery'

    const acc = paymentOption === "Credit Card" ? "1234 5678 9876 5432" : 'demoaccount@email.com'
    console.log(userInfo)
    const content = `
        <section class="review">
            <fieldset>
                <legend>Address</legend>
                <div class="address">
                    <p><strong>Name: </strong>${userInfo['full-name']}</p>
                    <p><strong>Address: </strong>${userInfo.street}, ${userInfo.city}, ${userInfo.province}</p>
                    <p><strong>Postal Code: </strong>${userInfo['postal-code']}</p>
                </div>
            </fieldset>
             <fieldset>
                <legend>Shipping Details</legend>
                <div class="shipping-details">
                    <p><strong>Courier: </strong>J&T Express</p>
                    <p><strong>Sub Total: </strong>${userInfo.subTotal}</p>
                </div>
            </fieldset>
             <fieldset>
                <legend>Payment</legend>
                <div class="payment">
                    <p><strong>Mode of Payment: </strong>${paymentOption}</p>
                    <p><strong>Account Name / Number: </strong>${acc}</p>
                </div>
            </fieldset>
            <button class="next-btn check-out">Check Out</button>
        </section>
    `

    return [content, cb]
}

function cb() {
    const checkOutBtn = $('.check-out')
    localStorage.removeItem('cart')
    checkOutBtn.addEventListener('click', () => {
        location.href = "/success.html"
    })
}

