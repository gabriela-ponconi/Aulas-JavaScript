// function comparar (n1,n2) {

//     if (n1 > n2) {
//         console.log(`o ${n1} é maior que ${n2}`)

//     } else if (n1 < n2) {
//     console.log (`o ${n1} é menor que ${n2}`);

//     } else {
//         console.log("Os numeros são iguais"); }

// }

// const primeiroNumero = Number (prompt ("Digite um número"))
// const segundoNumero = Number (prompt ("Digite outro numero"))

// comparar (primeiroNumero,segundoNumero)

// -------------------------------

// let paisOrigem = prompt ("Digite o pais que você nasceu:")

// switch (paisOrigem) {
//   case "Inglaterra":
//     console.log("Ingles");
//     break;

//   case "Brasil":
//     console.log("Brasileiro");
//     break;

//   case "EUA":
//     console.log("Estadunidense");
//     break;

//   default:
//     console.log("Pais de origem não encontrado");
//     break;
// }

// ----------------------------------

// let pokemon = prompt ("Digite o nome de um pokemon:")

// switch (pokemon) {

//     case "Bulbasauro":
//     console.log("Planta e veneno");
//     break

//     case "Charmander":
//     console.log("Fogo");
//     break

//     case "Squirtle":
//     console.log("Água");
//     break

//     default:
//         console.log("Pokemon não encontrado");
//         break
// }

// ------------------------------

// const ensinoMedio = prompt("Você já terminou o ensino médio?");
// const maiorIdade = prompt("Qual sua idade?");
// const outraFaculdade = prompt("Está cursando outra faculdade?");

// function matricular (ensinoMedio, maiorIdade, outraFaculdade) {

//   if (medio === "sim" && maiorIdade >= 18 && outraFaculdade === "nao") {
//     console.log("Você pode se matricular, parabens!");

//   } else {
//     if (maiorIdade < 18) {
//       console.log("Você é menor de idade, não pode cursar faculdade");
//     }

//     if (ensinoMedio === "nao") {
//       console.log("Você não terminou o ensino médio, então não pode se matricular na faculdade ainda.");
//     }
//     if (outraFaculdade === "sim") {
//       console.log ("Você está fazendo outra faculdade no momento, não pode fazer outra");
//     }
//   }
// }

// matricular(ensinoMedio, maiorIdade, outraFaculdade);

// --------------------

// EXERCÍCIOS:

// 1.Leia o código abaixo:

// const respostaDoUsuario = prompt("Digite o número que você quer testar")
// const numero = Number(respostaDoUsuario)

// if (numero % 2 === 0) {
//   console.log("Passou no teste.")
// } else {
//   console.log("Não passou no teste.")
// }
// a) Explique o que o código faz. Qual o teste que ele realiza? 
// b) Para que tipos de números ele imprime no console "Passou no teste"?
// c) Para que tipos de números a mensagem é "Não passou no teste"? 

// ------------------------

// 2.O código abaixo foi feito por uma pessoa desenvolvedora, contratada para automatizar algumas tarefas de um supermercado:

// let fruta = prompt("Escolha uma fruta")
// let preco
// switch (fruta) {
//   case "Laranja":
//     preco = 3.5
//     break;
//   case "Maçã":
//     preco = 2.25
//     break;
//   case "Uva":
//     preco = 0.30
//     break;
//   case "Pêra":
//     preco = 5.5
//     break; // BREAK PARA O ITEM c.
//   default:
//     preco = 5
//     break;
// }
// console.log("O preço da fruta ", fruta, " é ", "R$ ", preco)

// a) Para que serve o código acima? R: Para mostrar o valor final da fruta selecionada.
// b) Qual será a mensagem impressa no console, se o valor de fruta for "Maçã"? R: O preço da Maçã é R$ 2,25
// c) Considere que um usuário queira comprar uma Pêra, qual seria a mensagem impressa no console se retirássemos o break que está logo acima do default (o break indicado pelo comentário "BREAK PARA O ITEM c.")? R: Mostraria o valor do default, pois não teria a quebra.

// --------------------------

// 3.Leia o código abaixo:                                                                                                              

// const numero = Number(prompt("Digite o primeiro número."))

// if(numero > 0) {
//   console.log("Esse número passou no teste")
// 	let mensagem = "Essa mensagem é secreta!!!"
// }

// console.log(mensagem)
// a) O que a primeira linha está fazendo? R: Está solicitando ao usuário que digite o primeiro número.
// b) Considere um usuário digitou o número 10. Qual será a mensagem do terminal? E se fosse o número -10? R: Esse numero passou no teste./ Não aparece nada porque não tem um if para este caso.
// c) Haverá algum erro no console? Justifique usando os conceitos de bloco ou escopo. R:

// --------------------------------

// 1.

// const idade = Number (prompt ("Qual sua idade?"))

// if (idade >= 18) {
//     console.log("Você pode dirigir!")

// } else if (idade <18) {
//     console.log("Você não pode dirigir!")
// }

// ------------------

// 2.
// const turno = prompt("Qual turno você estuda? M (matutino) ou V (Vespertino) ou N (Noturno)?").toLowerCase();

// if (turno === "M".toLowerCase()) {
//   console.log("Bom dia!");
// } else if (turno === "V".toLowerCase()) {
//   console.log("Boa tarde!");
// } else if (turno === "N".toLowerCase()) {
//     console.log("Boa noite!");
//    } else 
//    console.log("Turno não identificado");

// ---------------------------------

// const turno = prompt("Qual turno você estuda? M (matutino) ou V (Vespertino) ou N (Noturno)?").toLowerCase();

// switch (turno) {
//     case "M".toLowerCase():
//     console.log("Bom dia");
//     break;

//     case "V".toLowerCase():
//     console.log("Boa tarde");
//     break;

//     case "N".toLowerCase():
//     console.log("Boa noite");
//     break;

//     default:
//      console.log("Turno não identificado");
//     break;
// }


// ----------------------------------


// const generoFilme = prompt ("Genero do filme")

// const precoIngresso = Number (prompt("O preço do ingresso"))

// if (generoFilme === "fantasia" && precoIngresso <15) {
//     console.log("Bom filme");
// }else { 
//     console.log("Escolha outro filme");
// }


// ---------------------------------------

const generoFilme = prompt ("Genero do filme")

const precoIngresso = Number (prompt("O preço do ingresso"))

const lanchinho = prompt ("Qual snack você quer comprar?")

if (generoFilme === "fantasia" && precoIngresso <15) {

    console.log (`Bom filme \n Aproveita o seu ${lanchinho}`):
} else { 
    console.log ("Escolha outro filme");
}
