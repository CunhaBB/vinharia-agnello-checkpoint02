let contador = 0;
let totalEstoqueBaixo = 0;
 
let safraMaisAntiga = 9999;
let vinhoMaisAntigo = "";
 
let continuar = true;
 
const botaocadastro = document.getElementById("cadastro");
 
function estoqueBaixo(quantidade) {
    return quantidade < 5;
}
 
function validarEntrada(texto) {
 
    while (texto === null || texto.trim() === "") {
        texto = prompt("Entrada inválida. Digite novamente:");
    }
 
    return texto.trim();
}
 
function validarNumero(numero) {
 
    while (isNaN(numero) || numero < 0) {
        numero = Number(prompt("Digite um número válido:"));
    }
 
    return numero;
}
 
function classificarVinho(safra) {
 
    let anoAtual = 2026;
    let idade = anoAtual - safra;
 
    if (idade <= 5) {
        return "Vinho Jovem";
    }
    else if (idade <= 15) {
        return "Vinho Amadurecido";
    }
    else {
        return "Vinho Antigo";
    }
}
 
function mostrarDados(nome, tipo, safra, quantidade, classificacao) {
 
    console.log("===== DADOS DO VINHO =====");
    console.log("Nome: " + nome);
    console.log("Tipo: " + tipo);
    console.log("Safra: " + safra);
    console.log("Quantidade em estoque: " + quantidade);
    console.log("Classificação: " + classificacao);
 
    if (estoqueBaixo(quantidade)) {
        console.log("⚠️ Estoque baixo!");
        alert("ATENÇÃO: Estoque baixo do vinho " + nome);
    }
}