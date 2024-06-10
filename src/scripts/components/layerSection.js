export function initLayerSection(_class, content) {
    const layerContent = `
        <section class="layer ${_class}">
            <button class="primary-btn return-btn">
            <img src="../../../assets/misc/return.svg"/>    
            Return
            </button>
            ${content}
        </section>
    `

    return [layerContent, cb]
}

function cb() {
    const goBack = () => {
        window.history.back();
    }
    
    const returnBtn = $(".return-btn");
    returnBtn.addEventListener('click', goBack);
}