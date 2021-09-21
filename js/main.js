//Declarando Variáveis
let btnContact = document.querySelector(".rt-btn-contact");
let toggleModal = document.querySelectorAll(".rt-toggle-modal");


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
});

//Abrindo e Fechando o Modal de Orçamento
for(var i = 0; i < toggleModal.length; i++){
    toggleModal[i].addEventListener("click", function(){
        var overlay = document.querySelector(".rt-overlay");
        var modalOrcamento = document.querySelector("#rt-modal-orcamento");
        overlay.classList.toggle("rt-is-open");
        modalOrcamento.classList.toggle("rt-is-open");
        modalOrcamento.classList.toggle("rt-slide-top-in");
    });
}

//Animando elementos On Scroll com Waypoints
var myScrollDown = document.querySelector(".rt-scroll-down");
var waypoint = new Waypoint({
    element: myScrollDown,
    handler: function() {
      myScrollDown.classList.toggle("rt-fade-out");
    },
    offset: '80%'
});

