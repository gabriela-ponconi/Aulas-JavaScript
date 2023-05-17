// // Leia o código abaixo

// 1.

// // const filme = {
// // 	nome: "Auto da Compadecida", 
// // 	ano: 2000, 
// // 	elenco: [
// // 		"Matheus Nachtergaele", "Selton Mello", "Denise Fraga", 
// // 		"Virginia Cavendish"
// // 		], 
// // 	transmissoesHoje: [
// // 		{canal: "Telecine", horario: "21h"}, 
// // 		{canal: "Canal Brasil", horario: "19h"}, 
// // 		{canal: "Globo", horario: "14h"}
// // 		]
// // }

// // console.log(filme.elenco[0])
// // console.log(filme.elenco[filme.elenco.length - 1])
// // console.log(filme.transmissoesHoje[2])

// // a) O que vai ser impresso no console? R:Matheus, Virginia , 14h.

// --

// // 2.
// // const cachorro = {
// // 	nome: "Juca", 
// // 	idade: 3, 
// // 	raca: "SRD"
// // }

// // const gato = {...cachorro, nome: "Juba"}

// // const tartaruga = {...gato, nome: gato.nome.replaceAll("a", "o")}

// // console.log(cachorro)
// // console.log(gato)
// // console.log(tartaruga)

// // // a) O que vai ser impresso no console? R: a- Cachorro: Juco,3,SRD / Gato: Juba,3,SRD / Tartaruga: Jubo, 3, SRD.Cachorro
// // // b) O que faz a sintaxe dos três pontos antes do nome de um objeto? R: b- Irá copiar o objeto solicitado, mas caso haja alteração no objeto principal, não irá alterar a cópia.

// // --

// 3.
// // function minhaFuncao(objeto, propriedade) {
// // 	return objeto[propriedade]
// // }

// // const pessoa = {
// //   nome: "Caio", 
// //   idade: 23, 
// //   backender: false
// // }

// // console.log(minhaFuncao(pessoa, "backender"))
// // console.log(minhaFuncao(pessoa, "altura"))

// // a) O que vai ser impresso no console? R: 
// // b) Explique o valor impresso no console. Você sabe por que isso aconteceu?

// // --

// // Exercicios de escrita de código:

// // Crie um objeto. Ele deve conter duas propriedades: nome (string) e apelidos (um array que sempre terá exatamente três apelidos). Depois, escreva uma função que recebe como entrada um objeto e imprime uma mensagem no modelo abaixo:


// const pessoa = {

//     nome: "Gabriela",
//     apelidos: ["Gabi","Pon", "Ponçoni"]

// }

// console.log ("Eu sou", (pessoa.nome), "mas pode me chamar de", (pessoa.apelidos));

// const outraPessos = {...pessoa, apelidos:["Gabe", "Gabri", "Gabo"]}

// console.log ("Eu sou", (outraPessos.nome), "mas pode me chamar de", (outraPessos.apelidos));

// function listarPessoas (pessoa){
    
// }

// -------------

// const Pessoa1 = {
//     nome: "Gabriela",
//     idade: "25",
//     profissão: "auxiliar"
// }
 
// const Pessoa2 = {
//     nome: "Marcus",
//     idade: "24",
//     profissao: "suporte"
// }

// function FiltrarPessoa (usuario){

//     const nomePessoa = usuario.nome
//     const tamanhoNomePessoa = usuario.nome.length
//     const idadePessoa = usuario.idade
//     const profissaoPessoa = usuario.profissão
//     const tamanhoProfissaoPessoa = usuario.profissao.length
    
//     return [nomePessoa,tamanhoNomePessoa,idadePessoa,profissaoPessoa,tamanhoProfissaoPessoa]
// }

// console.log(FiltrarPessoa(Pessoa1));
// console.log(FiltrarPessoa(Pessoa2));

// receberNome (Pessoa1)
// receberNome (Pessoa2)


// ---------

