//Declarando Variáveis
let btnContact = document.querySelector(".rt-btn-contact");

//Page Preloader
window.addEventListener("load", function(){
    let pagePreloader = document.querySelector(".rt-preloader");
    pagePreloader.classList.add("rt-fade-out");

    setTimeout(function(){
        pagePreloader.style.display = "none"
    }, 2000);
});

//Abrindo e Fechando Informações de Contato
btnContact.addEventListener("click", function(){
    let boxContact = document.querySelector (".rt-contact-info");
    boxContact.classList.toggle("rt-is-open");
    this.classList.toggle("rt-change-icon");
})