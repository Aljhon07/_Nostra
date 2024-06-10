import { initGlobal } from "./core/global.js"
import  {initPageNavigator} from "./core/pageNavigator.js"


window.addEventListener('DOMContentLoaded', () => {
    const isAuth = JSON.parse(localStorage.getItem('auth'))
    console.log(isAuth)
    if(!isAuth) {
        window.location.href = "/sign-in.html"
    }
    window.location.href = "#/"
    initGlobal()
    initPageNavigator()
})