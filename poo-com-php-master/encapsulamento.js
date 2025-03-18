// Criando a classe Aluno
class Aluno {
  #nota;
  constructor(nome, idade, nota) {
    // O constructor é um método tradicional
    this.nome = nome;
    this.idade = idade;
    this.#nota = nota;
  }
  estudar = () => console.log(`${this.nome} está estudando.`);
  verNota = () => this.#nota;
}

const rafael = new Aluno("Rafael", 17, 100);

console.log("o aluno é o", rafael.nome, "tem", rafael.idade,"anos de idade", "foi um aluno exemplar e tirou nota", rafael.verNota(), "na prova mais dificil do mundo");
