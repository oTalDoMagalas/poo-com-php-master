class Pessoa {
  constructor(nome) {
    this.nome = nome;
  }

  apresentar = () => console.log(`Olá eu sou o ${this.nome}`);
}
class Aluno extends Pessoa {
  apresentar = () => console.log(`O aluno ${this.nome}, está estudando`);
}
class Professor extends Pessoa {
  apresentar = () => console.log(`O professor ${this.nome} esta dando aula`);
}

const rafael = new Aluno("Rafael");
const raul = new Professor("Raul");

rafael.apresentar();
raul.apresentar();
