/*
2) Crie uma classe para representar pessoas.
Para cada pessoa teremos os atributos nome, peso e altura.
As pessoas devem ter a capacidade de dizer o valor do seu IMC (IMC = peso / (altura * altura));
Instancie uma pessoa chamada José que tenha 70kg de peso e 1,75 de altura e peça ao José para dizer o valor
do seu IMC;
*/


class Pessoa {
    nome;
    peso;
    altura;

    constructor(nome, peso, altura) {
        this.nome = nome;
        this.peso = peso;
        this.altura = altura;
    }

    calcularImc() {
        return (this.peso / (this.altura * this.altura)).toFixed(2);
    }

    classificarImc() {
        const imc = this.calcularImc();

        if (imc < 18.5) {
            return 'Abaixo do peso';
        } else if (imc >= 18.5 && imc < 24.9) {
            return 'Peso normal';
        } else if (imc >= 25 && imc < 29.9) {
            return 'Sobrepeso';
        } else if (imc >= 30 && imc < 34.9) {
            return 'Obesidade grau 1';
        } else if (imc >= 35 && imc < 39.9) {
            return 'Obesidade grau 2';
        } else {
            return 'Obesidade grau 3';
        }
    }
}

const José = new Pessoa('José', 70, 1.75);
console.log(José);
console.log(`José IMC: ${José.calcularImc()}`); // 22.86
console.log(`Classificação: ${José.classificarImc()}\n`); // Peso normal

const Maria = new Pessoa('Maria', 86, 1.68);
console.log(Maria);
console.log(`Maria IMC: ${Maria.calcularImc()} `); // 30.48
console.log(`Classificação: ${Maria.classificarImc()}\n`); // Obesidade grau 1

const Fabio = new Pessoa('Fabio', 105, 1.83);
console.log(Fabio);
console.log(`Fabio IMC: ${Fabio.calcularImc()} `); // 31.28
console.log(`Classificação: ${Fabio.classificarImc()}\n`); // Obesidade grau 1