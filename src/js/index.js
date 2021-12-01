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
    })
    btnHeaderMenu.addEventListener('click', function() {
        nav.classList.toggle('active');
        wrap.classList.toggle('active');
    })

    $(menuClick).click(function(event) {
        nav.classList.toggle('active');
        wrap.classList.toggle('active');
    });

    window.addEventListener("scroll", function(event) {
        if (document.documentElement.scrollTop > 0) {
            btnHeader.classList.add('btn-menu-header-scroll');
        }
        if (document.documentElement.scrollTop === 0) {
            btnHeader.classList.remove('btn-menu-header-scroll');
        }
    })

    // wrap.addEventListener("click", function() {
    //     console.log(nav.classList.contains('active'))
    // })

    //#wrap.active
    //btnHeaderMenu.textContent = "</>";
})();