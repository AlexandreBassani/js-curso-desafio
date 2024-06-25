// Seleciona a tag h1 e atribui o texto "Hora do Desafio"
document.querySelector('h1').textContent = 'Hora do Desafio';

// Função para o botão Console
function consoleClick() {
    console.log('O botão Console foi clicado');
}

// Função para o botão Alert
function alertClick() {
    alert('Eu amo JS');
}

// Função para o botão Prompt
function promptClick() {
    let cidade = prompt('Digite o nome de uma cidade do Brasil:');
    if (cidade) {
        alert(`Estive em ${cidade} e lembrei de você`);
    }
}

// Função para o botão Soma
function sumClick() {
    let num1 = prompt('Digite o primeiro número inteiro:');
    let num2 = prompt('Digite o segundo número inteiro:');
    
    if (num1 && num2) {
        num1 = parseInt(num1);
        num2 = parseInt(num2);
        let resultado = num1 + num2;
        alert(`A soma dos números é: ${resultado}`);
    } else {
        alert('Por favor, digite dois números inteiros.');
    }
}
