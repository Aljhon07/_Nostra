import { initProductCard } from "./productCard.js"

export  function initProductGroup(products, group) {
    const productCards = products.map(product => initProductCard(product)).join("");
    const content =  `
        <div class="product-group">
            <img id="${group.imgId}" src="${group.image}"/>
            <h1 class="${group.pos}">${group.title}</h1>
            <div class=products>
                ${productCards}
            </div>
        </div>
    `
    return content;
}
