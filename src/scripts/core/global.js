export function initGlobal() {
    window.$ = $;
    window.$all = $all;
}

function $(query) {
    return document.querySelector(query)
}
function $all(queries) {
    return document.querySelectorAll(queries)
}