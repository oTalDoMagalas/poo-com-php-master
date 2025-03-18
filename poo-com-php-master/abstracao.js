class Pessoa {
  constructor(nome) {
    if (this.constructor === Pessoa) {
      throw new Error("Não pode criar outra pessoa, faça isso não");
    }
    this.nome = nome
  }
}
class Aluno extends Pessoa{}

const rafael= new Aluno("Rafael")
console.log (rafael.nome)

const yago= new Pessoa("Yago")
console.log (yago.nome)
