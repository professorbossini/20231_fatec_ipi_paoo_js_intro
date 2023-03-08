const numeros = [1, 2, 3, 4, 5]
//função reduce
const soma = numeros.reduce((ac, v) => {return ac + v})
console.log(soma)


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
