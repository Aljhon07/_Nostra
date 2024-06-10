import { initFeatCategories } from '../components/featuredCategories.js';
import {initProductGroup} from '../components/productGroup.js';
import { products } from "../../data.js";

export function initHome() {
    const risingStars =  initProductGroup(products.slice(0, 5), {pos: "right", title: "RISING STARS", image: "../../../assets/misc/truck-1.png", imgId: "truck-1"})
    const topDeals =  initProductGroup(products, {pos: "left", title: "TOP DEALS",  image: "../../../assets/misc/truck-2.png",  imgId: "truck-2"})

    const content = `
    <main>
        ${risingStars}
        ${initFeatCategories({name: "Skin Care", img: "../../../assets/skincare.png"}, {name: "Gaming", img: "../../../assets/headphone.png"})}
        ${topDeals}
        ${initFeatCategories({name: "Outfits", img: ""}, {name: "Appliances", img: ""})}
    </main>
    `
    return [content, cb]
}

function cb() {
}