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


//=================================================================================================================================


// CARREGAR DADOS DO JSON
async function carregarDados() {
    try {
        
        const resposta = await fetch('dados.json');
        const dados = await resposta.json();

        const gallery = document.getElementById('gallery-carrousel');
        gallery.innerHTML = ''; 

        //criar notícia dinamicamente
        dados.Noticias.forEach(noticia => {
            gallery.innerHTML += `
                <div class="gallery-item">
                    <img src="${noticia.imagem}" alt="${noticia.titulo}" style="width: max-content;">
                    <div>
                        <p>${noticia.titulo}</p>
                    </div>
                </div>
            `;
        });

        const awards = document.getElementById('awards-carrousel');
        awards.innerHTML = ''; 

        //criar card de medalhas dinamicamente
        dados.campeonatos.forEach(camp => {

            let modalHtml = '';

            
            const iconesMedalha = {
                'ouro': 'g-medal.svg',
                'prata': 's-medal.svg',
                'bronze': 'b-medal.svg'
            };

            for (const [ano, medalhistas] of Object.entries(camp.anos)) {
                modalHtml += `<h3>${ano}</h3>`;
                
                // 2. Loop direto e mais limpo
                for (const m of medalhistas) {
                    modalHtml += `
                        <p>
                            <span>${m.posicao}</span> 
                            <img src='img/${iconesMedalha[m.medalha]}'> 
                            ${m.nome}
                        </p>`;
                }

                modalHtml += `<hr>`;
            }

            const divItem = document.createElement('div');

            // Adiciona a classe e o conteúdo HTML ao card
            divItem.className = 'awards-item';
            divItem.innerHTML = `
                <img src="${camp.imagem}" alt="${camp.nome}"> 
                <section class="awards-stats">
                    <span><img src="img/g-medal.svg" alt="Ouro">${camp.medalhas.ouro.total}</span>
                    <span><img src="img/s-medal.svg" alt="Prata">${camp.medalhas.prata.total}</span>
                    <span><img src="img/b-medal.svg" alt="Bronze">${camp.medalhas.bronze.total}</span>      
                </section>
                <div>
                    <p>${camp.nome}</p>
                </div>
                <button>Ver Mais</button>
            `;

            const btn = divItem.querySelector('button');
            btn.addEventListener('click', () => {
                awardCard(camp.imagem, camp.nome, modalHtml);
            });

            // Adiciona o card ao conjunto de competições
            awards.appendChild(divItem);
        });

    } catch (erro) {
        console.error(erro);
    }
}

carregarDados();

// EASTER EGG ;b

const seq = '38384040373937396665'; 
let input = '';

document.onkeydown = (e) => {
  input += e.keyCode; 
  input = input.slice(-seq.length); 
  
  if (input === seq) window.open('https://www.youtube.com/watch?v=dQw4w9WgXcQ', '_blank');
};
