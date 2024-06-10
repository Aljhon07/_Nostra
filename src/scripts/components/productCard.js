export function initProductCard(product) {
    const content = `
        <div class="product-card">
            <a href="#/product/${product.id}">
                <picture>
                    <img src=${product.image}></img>
                </picture>
                <div class="wrapper">
                    <h5>${product.title}</h5>
                    <p>₱ ${(product.price * 10).toFixed(2)}</p>
                </div>
            </a>
        </div>
    `
    return content
}