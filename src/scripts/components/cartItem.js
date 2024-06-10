export function initCartItem(item){
    const content = `
        <div class="cart-item">
            <img src="${item.prod.image}" alt="Product Image">
            <div class="details">
                <h3>${item.prod.title}</h3>
                <p>P${(item.prod.price * 10).toFixed(2)}</p>
                <p>Details: Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                <p>Quantity: <input type="number" class="quantity" value="${item.qty}" min="1"></p>
            </div>
        </div>
    `
    return content
}
