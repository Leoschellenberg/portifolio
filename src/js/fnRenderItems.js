import myHeader from '../components/header.html'
import myMain from '../components/main.html'
import mySection from '../components/section.html'
import myFormacao from '../components/section-formacao.html'
import myHeaderNav from '../components/headerNav.html'


export default function renderItems() {
    const header = document.querySelector("header");
    header.innerHTML = myHeader;

    const main = document.querySelector("main");
    main.innerHTML = myMain;

    const section = document.querySelector("#container");
    section.innerHTML = mySection;

    const sectionFormacao = document.querySelector("#section-formacao");
    sectionFormacao.innerHTML = myFormacao;

    const headerNav = document.querySelector("nav");
    headerNav.innerHTML = myHeaderNav;
}