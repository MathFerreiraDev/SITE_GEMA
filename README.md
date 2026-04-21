# PS CODELAB 2026 - Site para o GEMA - Grupo de Estudos de Maratona Acadêmica (ICMC USP)

<div align="center">
 <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQswPMiRH1QDS7rhAQ4EMCj7Rd7RWvnpq2phg&s" width="200">
  <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT3lEmMkX05_VoF5__U18jYKsmDoZBgbbkHWA&s" width="200">
</div>


## Sobre o Projeto 📖
Este site foi desenvolvido para o Processo Seletivo **CODELAB**, sendo escolhido como tema, um site para o Grupo de Extensão **GEMA**, o grupo de programação competitiva do ICMC-USP. O site serve como vitrine virtual 
para as conquistas do grupo em maratonas como OBI, ICPC e MEP, além de conter conteúdos e notícias sobre o mesmo.


> O site faz parte do Projeto Dev Learn, para alunos que já possuem experiência na área de Desenvolvimento web

---

## Ferramentas Utilizadas

Como requisitado no Notion do projeto. O site foi desenvolvido em linguagem pura, sem nenhum framework de estilização ou biblioteca de funções.

### Frontend 
* **CSS Dinâmico:** Utilizei de diversas variáveis em (`:root`) para controle de paleta de cores e fontes de forma unificada.
* **Animações de Fluidez:** (`@keyframes float`) para criar transições entre elementos como o modal de medalhas e o carrossel de notícias.
* **Layout Responsivo:** A estrutura do site pode ser adaptável para diferentes tamanhos de tela.
  > Para visualização mobile o site não foi definitiviamente adaptado

### Backend
* **JS Assíncrono:** Carregamento dinâmico de dados através de `fetch()` consumindo o `dados.json` para evitar código repetitivo no HTML.
* **Manipulação de DOM:** Criação dinâmica de cards de premiação e janelas de classificações.
* **Efeitos Visuais Programados:** Geradores de fundo que preenchem seções com padrões binários e o padrão "GEMA".

---

## 🕵️‍♂️ Easter Egg
O site esconde um segredo clássico da cultura da internet. Tente descobrir a sequência correta de teclas... 
<br>
> *Dica: Pode ter algo curioso no fim do `main.js` 👀*.
