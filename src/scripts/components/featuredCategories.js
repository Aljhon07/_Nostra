export function initFeatCategories(cat1, cat2) {
    const content = `
        <div class="feat-categories">
            <div class="category">
                <h2 href="/#/${cat1.name}">${cat1.name}</h2>
                <img src="${cat1.img}">
            </div>
            <div class="category">
                <h2 href="/#/${cat2.name}">${cat2.name}</h2>
                <img src="${cat2.img}">
            </div>
        </div>
    `
    return content
}