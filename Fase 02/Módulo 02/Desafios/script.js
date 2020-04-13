const modalOverlay = document.querySelector('.modal-overlay');
const cursos = document.querySelectorAll('.curso');

for (let curso of cursos){
    curso.addEventListener("click", function(){
        const pagina = card.getAttribute("id");
        modalOverlay.classList.add('maximize');
        modalOverlay.querySelector("iframe").src = `https://rocketseat.com.br/${pagina}`;
    })
}

document.querySelector('.close-modal').addEventListener("click", function(){
    modalOverlay.classList.remove('maximize');
    modalOverlay.querySelector("iframe").src = '';
});