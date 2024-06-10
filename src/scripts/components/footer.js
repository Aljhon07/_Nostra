export function initFooter() {
    const footer = document.createElement('footer');
    const content = `
        <div class="misc">
            <div class="wrapper">
                <h2>Payment Options</h2>
                <div class="payment-options">
                    <img src="../../../assets/mastercard.svg" alt="Mastercard">
                    <img src="../../../assets/visa.svg" alt="Visa">
                    <img src="../../../assets/paypal.svg" alt="Paypal">
                    <img src="../../../assets/gcash.svg" alt="GCash">
                </div>
            </div>
            <div class="logistics">
                <h2>Logistics</h2>
                <img src="../../../assets/J&T_Express.png" alt="J&T Express">
            </div>
        </div>

        <div class="pages">
            <div class="wrapper">
                <h2>FOLLOW US</h2>
                <ul class="socials">
                    <li><img src="../../../assets/socials/facebook.svg" alt="Facebook"> Facebook</li>
                    <li><img src="../../../assets/socials/twitter.png" alt="Twitter">Twitter</li>
                    <li><img src="../../../assets/socials/instagram.png" alt="Instagram">Instagram</li>
                    <li><img src="../../../assets/socials/linkedin.png" alt="LinkedIn">LinkedIn</li>
                </ul>
            </div>

            <article class="about-us">
            <h2>ABOUT US</h2>
                Nostra, offers a vast selection of products accross various
                caegories, providing a seamless shopping experience for everything
                you need in one place.
            </article>

                <div class="wrapper">
                    <h2>INFORMATION</h2>
                    <ul class="page-links">
                        <li><a href="#">Accout</a></li>
                        <li><a href="#">Message</a></li>
                        <li><a href="#">Cart</a></li>
                        <li><a href="#">History</a></li>
                    </ul>
                </div>
            </div>

            <p style="text-align: center;">NOSTRA 2024.All Rights Reserved.</p>
    `;

    footer.innerHTML = content;
    return footer;
}
