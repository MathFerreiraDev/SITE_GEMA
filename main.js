document.addEventListener("DOMContentLoaded", () => {

//FUNDO BINARIO
  document.querySelectorAll('.background-binary').forEach( elemento => {

    const binarios = Array.from({ length: 2500 }, () => Math.round(Math.random())).join('');
    elemento.insertAdjacentHTML('afterbegin', `<div class="fundo-binario">${binarios}</div>`);
  });

//FUNDO GEMA
  document.querySelectorAll('.background-gema').forEach( elemento => {

    const gemas = Array.from({ length: 2500 }, () => "GEMA").join(' ');
    elemento.insertAdjacentHTML('afterbegin', `<div class="fundo-gematico">${gemas}</div>`);
  });


    const carrossel = document.getElementById('gallery-carrousel');
    const btnLeft = document.querySelector('.left-arrow');
    const btnRight = document.querySelector('.right-arrow');

    function moverDireita() {
        let tamanhoItem = carrossel.firstElementChild.clientWidth + 30; // 30 é a margem entre os itens
        carrossel.scrollBy({ left: tamanhoItem, behavior: 'smooth' });
    }

    function moverEsquerda() {
        let tamanhoItem = carrossel.firstElementChild.clientWidth + 30; // 30 é a margem entre os itens
        carrossel.scrollBy({ left: -tamanhoItem, behavior: 'smooth' });
    }

    btnRight.addEventListener('click', moverDireita);
    btnLeft.addEventListener('click', moverEsquerda);

    setInterval(() => {
        let fimDoCarrossel = carrossel.scrollWidth - carrossel.clientWidth - 10;
        
        if (carrossel.scrollLeft >= fimDoCarrossel) {
            carrossel.scrollTo({ left: 0, behavior: 'smooth' });
        } else {
            moverDireita();
        }
    }, 30000);



});






const modal = document.getElementById('modal-overlay');
const btnClose = document.getElementById('close-modal');

function awardCard(img, title, description) {
    document.getElementById('modal-img').src = img;
    document.getElementById('modal-title').innerText = title;
    document.getElementById('modal-body').innerHTML = description;
    
    modal.classList.add('active'); //gambiarra que mudo de classe p abrir modal
}


if (btnClose && modal) {
    btnClose.addEventListener('click', () => {

        modal.classList.remove('active'); //gambiarra de mudar de classe para fechar o modal, pq se eu usar display none ele perde a animação

    });
}



// EASTER EGG ;b

const seq = '38384040373937396665'; 
let input = '';

document.onkeydown = (e) => {
  input += e.keyCode; 
  input = input.slice(-seq.length); 
  
  if (input === seq) window.open('https://www.youtube.com/watch?v=dQw4w9WgXcQ', '_blank');
};
