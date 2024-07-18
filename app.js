/* Mudar a cor ao clicar no botão */
const botao = document.getElementById('botao');
const body = document.querySelector('body');
const cor = ['#FEFFDF', '#DDE0AB', '#97CBA9', '#668BA4', '#F09C67', '#F7E0A3', '#FFFDE8'];

//cor inicial da pagina
body.style.backgroundColor = cor[6];

//função para mudar a cor ao clicar no botão
botao.addEventListener('click', function(){
    const corIndex = parseInt(Math.random()*cor.length)
    body.style.backgroundColor = cor[corIndex];
})
