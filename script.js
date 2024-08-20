const opcoes = document.querySelectorAll('.opcao');
opcoes.forEach(opcao => {
  opcao.addEventListener('click', () => {
    const radioId = opcao.dataset.radioId;
    const radio = document.getElementById(radioId);
    radio.click();
  });
});