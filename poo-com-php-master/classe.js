// Criando a classe Aluno
class Aluno {
  constructor(nome, idade) {
    // O constructor é um método tradicional
    this.nome = nome;
    this.idade = idade;
    this.feliz = "feliz"
  }
  estudar = () => console.log(`${this.nome} está estudando.`);
}

const rafael = new Aluno("Rafael", 17)
const magalas = new Aluno("Gustavo Magalas", 20)

magalas.estudar();

console.log(magalas.nome, magalas.idade, magalas.feliz)