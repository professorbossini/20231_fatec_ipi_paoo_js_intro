// const fs = require ('fs')
// const abrirArquivo = function (nomeArquivo){
//   const exibirConteudo = function(erro, conteudo){
//     if(erro)
//       console.log('Deu erro: ' + erro)
//     else{
//       console.log(conteudo.toString())
//       const dobro = Number(conteudo.toString()) * 2;
//       const finalizar = function(erro){
//         console.log(erro ? "Deu erro: " + erro : "Tudo ok")
//       }
//       fs.writeFile('dobro.txt', dobro.toString(), finalizar)
//     }
//   }
//   fs.readFile(nomeArquivo, exibirConteudo)
// }

// abrirArquivo("arquivo.txt")
//abrir o arquivo
//ler o arquivo
//exibir o conteúdo


// function demorada(){
//   const dataNoFuturo = new Date().getTime() + 12000
//   while(new Date().getTime() <= dataNoFuturo);//no-op
//   const d = 8 + 4
//   return d
// }

// const a = 2 + 3
// const b = 5 + 9
// const d = demorada()




// setTimeout(function(){
//   const d = demorada()
//   console.log('d: ' + d)
// }, 0)

// const e = 2 + a + b
// console.log('e:' + e)

// const a = 2 + 7
// const b = 5
// // só faz sentido depois das linhas 1 e 2
// console.log(a + b)

// console.log('Eu primeiro...')
// console.log('Agora eu...')
// console.log("Sempre vou ser a última...")



// let calculadora = {
//   soma: (a, b) => a + b,
//   subtracao: function(a, b){
//     return a - b
//   }
// }
// console.log(calculadora.soma(2, 3))
// console.log(calculadora['subtracao'](5, 2))

//uma concessionária tem CNPJ, endereço e um estoque de veículos contendo 3 veículos. Cada veículo tem modelo, marca e ano de fabricação.
// const concessionaria = {
//   cnpj: '0001112220001-45',
//   endereco: {
//     logradouro: 'Rua C',
//     numero: 120,
//     bairro: "Vila J"
//   },
//   veiculos: [
//     {marca: 'VW', modelo: 'Fusca', anoFabricacao: 1976},
//     {marca: 'VW', modelo: "Brasília", anoFabricacao: 1996},
//     {marca: 'Jeep', modelo: "Renegade", anoFabricacao: 2019}
//   ]
// }
// for (let veiculo of concessionaria.veiculos){
//   console.log(veiculo.marca, veiculo.modelo, veiculo.anoFabricacao)
// }
// for (let i = 0; i < concessionaria.veiculos.length; i++){
//   console.log(
//     concessionaria.veiculos[i].marca,
//     concessionaria.veiculos[i].modelo,
//     concessionaria.veiculos[i].anoFabricacao
//   )
// }
// console.log(concessionaria.veiculos[2].modelo)


//uma pessoa que se chama Maria, tem 21 anos e mora na rua B, número 121
//objetos aninhados

// const pessoa = {
//   nome: "Maria",
//   idade: 21,
//   //objeto aninhado
//   endereco: {
//     logradouro: "Rua B",
//     numero: 121
//   }
// }
// console.log(pessoa['endereco'].logradouro)
// console.log(pessoa['endereco']['logradouro'])
// console.log(pessoa.endereco.numero)
// console.log(pessoa.endereco['numero'])

// const pessoa = {
//   nome: "João",
//   idade: 17
// }
//operador de acesso a membro: .
// console.log(pessoa.nome)
// console.log(pessoa["idade"])
//Ra_do_Aluno, Nome completo
// 123456, João
// 57474747, Maria
// console.log(pessoa.Ra do Aluno)
// console.log(pessoa["Ra do Aluno"])

// XML
//JSON JavaScript Object Notation
//closure
// function eAgora(){
//   let cont = 1
//   function f1(){
//     console.log(cont)
//   }
//   cont++
//   function f2(){
//     console.log(cont)
//   }
//   return {f1, f2}
// }
// let eAgoraResult = eAgora()
// eAgoraResult.f1()
// eAgoraResult.f2()


//Olá, Pedro
//Adeus, Maria
// function saudacoesFactory(saudacao, nome){
//   return function(){
//     console.log(saudacao + ", " + nome)
//   }
// }

// let olaAna = saudacoesFactory("Olá", "Ana")
// let tchauAna = saudacoesFactory("Tchau", "Ana")

// olaAna()
// tchauAna()


// function ola(){
//   let nome = "Pedro"
//   return function(){
//     console.log("Olá, " + nome)
//   }
// }

// let olaResult = ola()
// olaResult()


// function f (){
//   let nome = "Pedro"
//   function g(){
//     let teste
//     console.log(nome)
//   }
//   g()
// }
// f()


// let oi = () => {}
// //função de alta ordem
// function f (funcao){
//   return funcao()
// }

// //função de alta ordem
// function g(){
//   function outraFuncao(){
//     console.log("Fui criada por g")
//     return function(){
//       console.log("Até logo")
//     }
//   }
//   return outraFuncao
// }
// f(g)()()

// f(g())

// f(g)()

// let umaFuncao = function(){
//   console.log("Fui armazenada em uma variável")
// }
// umaFuncao()



// f(function(){
  //   console.log("Estou sendo passada para f")
  // })



// const gResult = g()
// gResult()

// g()()


// class Gato{
//   public void miar(){

//   }
//   var teste = miar;
// }

//inválido: return somente se a função tiver {}
//const quadrado = (n) => return n * n
// const quadrado = (n) => {return n * n}
// // const dobro = (n) => 2 * n
// console.log(quadrado(2))

// const hello = () => console.log("Hello")
// hello()

// console.log(dobro(2))

// const f = nome => console.log("Oi, " + nome)
// f("Ana")


//functions(antigas) e arrow functions(mais modernas)

// const triplo = function (n = 5){
//   return 3 * n
// }
// console.log(triplo(10))
// console.log(triplo())

// const dobro = function(n){
//   return 2 * n
// }
// const res = dobro(3)
// console.log(res)

// function soma (a, b){
//   return a + b
// }
// const res = soma(2, 3)
// console.log(res)

// function hello(){
//   console.log("Oi")
// }
// hello(undefined)

// function hello(nome){
//   console.log("Oi, " + nome)
// }
// hello("João")



// int soma(int a, int b){
//   return a + b;
// }


// const numeros = [1, 2, 3, 4, 5]
// //função reduce
// const soma = numeros.reduce((ac, v) => {return ac + v})
// console.log(soma)


// const resultado = numeros.every((n) => {return n % 2 === 0})
// console.log(resultado)
//usando a every, verificar se todos os elementos são pares


// const nomes = ["Ana Maria", "Antônio", "Rodrigo", "Alex", "Cristina"]
// const todosComecamComA = nomes.every((n) => {return n.startsWith("A")})
// console.log(todosComecamComA)
//[A, A, R, A, C]
//map

// const numeros = [1, 2, 3, 4, 5]
// //[1, 4, 9, 16, 25]
// const resultado = numeros.map((elemento) => {return elemento * elemento})
// console.log(resultado)
// const iniciais = nomes.map((elemento) => {return elemento.charAt(0)})
// console.log(iniciais)


//(a, b, c) => {console.log(a, b, c)} (arrow function)
//filter
// const apenasComA = nomes.filter((nome) => {return nome.startsWith("A")})
// console.log(apenasComA)

// v2 = [2, "abc", true]
// for (let i = 0; i < v2.length; i++){
//   console.log(v2[i])
// }

// v1 = []
// v1[0] = 3.2
// v1[10] = "abc"
// console.log(v1)
// console.log(v1.length)


// class A{}
// class B{}

// Class x = new A().getClass();
// Class y = new A().getClass();


// if (x == y){

// }

// class Pato{
//   nome: string
//   voar(){}
// }

// class Ganso{
//   nomeDaAve: string
//   voar(){}
// }

// class Pato extends Ave{
//   voar(){}
// }
// class Ganso{
//   voar(){

//   }
// }
// Ave a = new Pato();
// Ave p = new Ganso();

// console.log([] == [])
// console.log ([] == false)
// console.log (null == undefined)
// console.log(null == null)
// console.log(2 == [1])
// console.log(2 == [1, 1])
// console.log(1 == [1, 1])
// console.log (true == 1)
// console.log(1 == 1)
// console.log(1 == '1')
// console.log(1 === 1)
// console.log(1 === '1')




// const n1 = 2
// const n2 = '3'
// const n3 = n1 + n2
// console.log(n3)

// const n4 = n1 + Number(n2)
// console.log(n4)

// let idade = 18
// console.log("Oi, " + nome)
// if (idade >= 18){
//   const nome = "Ana"
//   console.log("Parabéns, " + nome + ". Você pode dirigir")
// }
// console.log("Até mais, " + nome)


// var linguagem = 'Javascript'
// console.log("Aprendendo " + linguagem)
// var linguagem = "Java"
// console.log("Aprendendo " + linguagem)


// class Pessoa{
//   int a;
//   public void andar(int a){ //shadowing
//     a = a;
//   }
// }

// Pessoa p = new Pessoa();
// p.andar(2);
// public class Teste{
//   public static void main (String [] args){
//     int a = 2;
//     String a = "3";
//     a = 3;
//   }
// }


// var soma = 2 + 3
// soma = 5 + 7
// var matriculado = true
// matriculado = "sim"


// let nome = "Pedro"
// console.log(typeof(nome))
// nome = 'Pedro'
// console.log(typeof(nome))
// nome = `Pedro`
// console.log(typeof(nome))
// char c = 'b';
// let idade = 18;
// console.log(idade)
// idade = 19
// console.log(idade)
//const, let, var
// const nome = "Ana"
// nome = "Mariana"


//declaração de variáveis
//estaticamente tipada (Java)
//int a; String s; float f;
//int a = 2;
//dinamicamente tipada (Javascript)
// a: number  = 2
// a = "abc"
// typeof(2)
