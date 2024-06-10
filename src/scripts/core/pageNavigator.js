import { initFooter } from "../components/footer.js";
import { initCart } from "../pages/cart.js";
import { initHome } from "../pages/home.js";
import { initProductDetails } from "../pages/productDetails.js";
import { getURL } from "../utils/URLManager.js";

export function initPageNavigator() {
  window.addEventListener("hashchange", render);
  render();
}

const app = document.getElementById("app");
function render() {
  const { baseParams, params } = getURL();
  app.innerHTML = "";
  const footer = document.querySelector("footer");
  if (footer) {
    footer.remove();
  }
  document.body.style.backgroundImage = ""
  switch (baseParams) {
    case "":
      const [content, cb] = initHome();
      app.innerHTML = content;
      document.body.appendChild(initFooter());
      document.body.style.backgroundImage = "url('../../assets/bg.png')"
      cb();
      break;

    case "cart":
      const [cartContent, cartCb] = initCart();
      app.innerHTML = cartContent;
      cartCb();
      break;

    case "auth":
      location.href = "/sign-in.html";
      break;
    case "product":
      const [details, detailsCb] = initProductDetails(params[2]);
      app.innerHTML = details;
      detailsCb();
      break;

    default:
      const notFound = document.createElement("div");
      notFound.innerText = "Wla pang laman";
      app.appendChild(notFound);
      break;
  }
}
