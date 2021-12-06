import renderItems from './fnRenderItems';
import renderWorks from '../service/getWorks';
import renderExp from '../service/getExp';
import renderCursos from '../service/getCursos';

(() => {
    renderItems();
    renderWorks();
    renderExp();
    renderCursos();

    const html = document.querySelector("html");
    const checkbox = document.querySelector("#checkbox");
    const btnHeader = document.querySelector("#btn-menu-header");
    const Header = document.querySelector("header");
    const nav = document.querySelector("#nav");
    const btnHeaderMenu = document.querySelector("#btnCloseMenu");
    const menuClick = document.getElementsByClassName("menu-click");
    const wrap = document.querySelector("#wrap");

    checkbox.addEventListener("change", function() {
        html.classList.toggle('dark-mode')
    })
    btnHeader.addEventListener('click', function() {
        nav.classList.toggle('active');
        wrap.classList.toggle('active');
        Header.classList.add("headerNoneNav");
    })
    btnHeaderMenu.addEventListener('click', function() {
        nav.classList.toggle('active');
        wrap.classList.toggle('active');
        Header.classList.remove("headerNoneNav");
    })

    $(menuClick).click(function(event) {
        nav.classList.toggle('active');
        wrap.classList.toggle('active');
    });

    window.addEventListener("scroll", function(event) {
        if (document.documentElement.scrollTop > 0) {
            Header.classList.add('headerScroll');
        }
        if (document.documentElement.scrollTop === 0) {
            Header.classList.remove('headerScroll');
        }
    })

    // wrap.addEventListener("click", function() {
    //     console.log(nav.classList.contains('active'))
    // })

    //#wrap.active
    //btnHeaderMenu.textContent = "</>";
})();