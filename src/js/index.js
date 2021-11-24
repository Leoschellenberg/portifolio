import renderItems from './fnRenderItems';

(() => {
    renderItems();

    const html = document.querySelector("html");
    const checkbox = document.querySelector("#checkbox");

    console.log(checkbox)

    checkbox.addEventListener("change", function() {
        html.classList.toggle('dark-mode')
    })
})();