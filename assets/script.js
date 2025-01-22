const titulo = document.getElementById('titulo');
const descricao = document.getElementById('descricao');
const textoTitulo = 'Jogo: Qual Número é Maior?';
const textoDescricao = 'Digite dois números e descubra se você acertou a condição do jogo!';
let indexTitulo = 0;
let indexDescricao = 0;

function digitarTitulo() {
  if (indexTitulo < textoTitulo.length) {
    titulo.textContent += textoTitulo.charAt(indexTitulo);
    indexTitulo++;
    setTimeout(digitarTitulo, 100); // Velocidade da digitação
  } else {
    setTimeout(digitarDescricao, 500); // Pausa antes de iniciar a descrição
  }
}

function digitarDescricao() {
  if (indexDescricao < textoDescricao.length) {
    descricao.textContent += textoDescricao.charAt(indexDescricao);
    indexDescricao++;
    setTimeout(digitarDescricao, 50); // Velocidade da digitação
  }
}

// Executa a animação ao carregar a página
window.onload = digitarTitulo;

// Lógica do jogo
const botaoVerificar = document.getElementById('verificar');
const mensagem = document.getElementById('mensagem');

botaoVerificar.addEventListener('click', () => {
  const numeroA = parseFloat(document.getElementById('numeroA').value);
  const numeroB = parseFloat(document.getElementById('numeroB').value);

  if (isNaN(numeroA) || isNaN(numeroB)) {
    mensagem.textContent = 'Erro: insira dois números válidos!';
    mensagem.className = 'mensagem erro';
    return;
  }

  if (numeroB > numeroA) {
    mensagem.textContent = 'Sucesso: o número B é maior que o número A!';
    mensagem.className = 'mensagem sucesso';
  } else {
    mensagem.textContent = 'Falha: o número B deve ser maior que o número A.';
    mensagem.className = 'mensagem erro';
  }
});
