// tres constantes para referenciar as ITEM nas Divs Projetos
const album = document.getElementById('album');
const casamentos = document.getElementById('casamentos');
const buffet = document.getElementById('Buffet');

const videoalbum = document.querySelector('#videoAlbum');
const videocasamentos = document.querySelector('#videocasamentos');
const videoBuffet = document.querySelector('#videoBuffet');

// evento de click
album.addEventListener('click',() =>{
  album.classList.toggle('active');
    videoalbum.classList.toggle('active');
});

casamentos.addEventListener('click',() =>{
    casamentos.classList.toggle('active');
    videoC
    
    
    asamentos.classList.toggle('active');
})

buffet.addEventListener('click',() =>{
    buffet.classList.toggle('active');
    videoBuffet.classList.toggle('active');
})