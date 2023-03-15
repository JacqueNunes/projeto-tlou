let imagens = document.querySelectorAll('.carrossel img');
let indice = 0;


setInterval(() => {
    imagens[indice].classList.remove('ativa');
    indice = (indice + 1) % imagens.length;
    imagens[indice].classList.add('ativa');
	
}, 5000);






// const botoesCarrossel = document.querySelectorAll('.botao');
// const imagens = document.querySelectorAll('.imagem');

// botoesCarrossel.forEach((botao, indice) => {
// 	botao.addEventListener('click', () => {
// 		const imagemAtual = document.querySelector('.ativa');
// 		const botaoAtual = document.querySelector('.selecionado');

// 		botaoAtual.classList.remove('selecionado');
// 		imagemAtual.classList.remove('ativa');
        
// 		imagens[indice].classList.add('ativa');
// 		botoesCarrossel[indice].classList.add('selecionado');
// 	});
// });


  