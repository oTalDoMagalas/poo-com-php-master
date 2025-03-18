class Pessoa{
    constructor(nome, idade){
        this.nome = nome;
        this.idade = idade;
    }
    apresentar = () => console.log(`Olá eu sou ${this.nome}, tenho ${this.idade} anos de idade`)
}

class Aluno extends Pessoa{
    estudar = () => console.log(`${this.nome} está estudando.`)
}

class Professor extends Pessoa{
    darAula = () => console.log(`${this.nome} está dando aula.`)
}

const rafael = new Aluno("Rafael" , 17)
const raul = new Professor("Raul" , 28)
const magalas = new Aluno("Gustavo", 20)
const nadja = new Professor("Nadja", 38)

rafael.apresentar()
rafael.estudar()
magalas.estudar()
raul.apresentar()
nadja.apresentar()
