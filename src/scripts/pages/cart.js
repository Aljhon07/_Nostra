import { initCartItem } from "../components/cartItem.js";
import { initLayerSection } from "../components/layerSection.js";
import { initPaymentOptions } from "../components/payment-options.js";
import { initShippingInfo } from "../components/shippingInfo.js";


let _layerCb, _shippingInfoCb, _paymentOptionsCb, _reviewCb;
let _shippingInfoContent, _paymentOptionsContent, _reviewContent;
export function initCart() {
    let cartItems;
    if(!localStorage.getItem('cart')){
        cartItems = "No Items to show"
    }else {
        const items = JSON.parse(localStorage.getItem('cart'))
        cartItems = items.map(item => initCartItem(item)).join("")
    
        const [shippingInfoContent, shippingInfoCb] = initShippingInfo();
        _shippingInfoCb = shippingInfoCb;
        _shippingInfoContent = shippingInfoContent;
        
        const [paymentOptionsContent, paymentOptionsCb] = initPaymentOptions();
        _paymentOptionsCb = paymentOptionsCb;
        _paymentOptionsContent = paymentOptionsContent;
        
        // const [reviewContent, reviewCb] = initReview();
        // _reviewCb = reviewCb;
        // _reviewContent = reviewContent;
    }
   

    const [content, layerCb] = initLayerSection("cart", `
            <h1>Items</h1>
            <div class="wrapper">
                <article class="cart-items">
                    ${cartItems}
                </article>
                <article class="personal-details">
                    <header>
                        <button>
                            <p class="step step-1">1</p>
                            <p class="step-name">Shipping</p>
                        </button>
                        <button>
                            <p class="step step-1">2</p>
                            <p class="step-name">Payment</p>
                        </button>
                        <button>
                            <p class="step step-1">3</p>
                            <p class="step-name">Review</p>
                        </button>
                    </header>
                    <div class="user-info">
                        ${_shippingInfoContent ? _shippingInfoContent : "No Item to Purchase"}
                    </div>
                </article>
            </div>
        `)
    _layerCb = layerCb;
    return [content, cb];
}

function cb() {
    const userInfoEl = $('.personal-details .user-info')
    const stepButtons = $all('.personal-details header button')
    const components = [_shippingInfoContent, _paymentOptionsContent]

    _layerCb()
    _shippingInfoCb(userInfoEl)

 

    stepButtons.forEach((btn, index) => {
        btn.addEventListener('click', () => {
            userInfoEl.innerHTML = components[index]
        })
    });
}