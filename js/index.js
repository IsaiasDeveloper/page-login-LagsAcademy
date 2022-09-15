//Alternar entre formulários
//Formulários
const formLogin = document.getElementById('formularioLogin');
const formPrimeiroAcesso = document.getElementById('formularioPrimieroAcesso');
const formRecSenha = document.getElementById('formularioRecSenha');
//Links
const LinkEsqueceuSenha = document.getElementById('esqueceuSenha');
const linkPrimeiroAcesso = document.getElementById('primeiroAcesso');
const linkVoltarPrimAcesso = document.getElementById(
    'voltarPrimeiroAcesPraInicio'
);
const linkVoltarRecSenha = document.getElementById('voltarRecupSenhaPraInicio');

LinkEsqueceuSenha.addEventListener('click', () => {
    formLogin.style.display = 'none';
    formRecSenha.style.display = 'block';
});
linkVoltarRecSenha.addEventListener('click', () => {
    formRecSenha.style.display = 'none';
    formLogin.style.display = 'block';
});
linkPrimeiroAcesso.addEventListener('click', () => {
    formLogin.style.display = 'none';
    formPrimeiroAcesso.style.display = 'block';
});
linkVoltarPrimAcesso.addEventListener('click', () => {
    formPrimeiroAcesso.style.display = 'none';
    formLogin.style.display = 'block';
});