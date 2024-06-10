import { products } from "../../data.js";
import { initLayerSection } from "../components/layerSection.js";
import { showToast } from "../components/toastify.js";
import { calculateTotalPrice } from "../utils/totalPrice.js";
let id, prod, _layerCb;
export function initProductDetails(productId) {
    const product = products[productId - 1]
    id = productId;
    prod = product;
    const [content, layerCb] =  initLayerSection("product-details", ` <article class="product-details">
            <img src="${product.image}" alt="${product.title}">
            <article class="details">
                <div class="details-wrapper">
                    <h1>${product.title}</h1>
                    <p>₱${(product.price * 10).toFixed(2)}</p>
                    <p>Seller: ?</p>
                    <div>
                        <h3>Description</h3>
                        <p>${product.description}</p> 
                    </div>  
                </div>
                <form>
                    <h3 style="margin-bottom: .25rem;">Quantity</h3>
                    <input type="number" value="1" min="1" class="quantity"/>
                </form>
                <button class="add-to-cart">ADD TO CART</button>
            </article>
        </article>`);

        _layerCb = layerCb
        return [content, cb];
}

function cb() {
    _layerCb()
    const addToCart = (productId, prod, qty) => {
        console.log(prod)
        let cart = localStorage.getItem('cart');
        showToast("Succesfully Added to Cart")

        if (!cart) {
            cart = [];
        } else {
            cart = JSON.parse(cart);
        }
    
        const existingProductIndex = cart.findIndex(item => item.id === productId);

        if (existingProductIndex !== -1) {
            cart[existingProductIndex].qty += qty;
        } else {
            cart.push({ id: productId, prod, qty: qty, checked: false });
        }
    
        const totalPrice = calculateTotalPrice(cart);
console.log(totalPrice)
        localStorage.setItem('cart', JSON.stringify(cart));
        localStorage.setItem('totalPrice', totalPrice);
    }
    const addToCartBtn = $(".add-to-cart");
    addToCartBtn.addEventListener("click", () => {
        const qtyInput = $('input.quantity');
        const qty = parseInt(qtyInput.value);
        addToCart(id, prod, qty);
    });
}