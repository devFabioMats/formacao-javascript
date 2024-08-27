/*
    1) Crie uma classe para representar carros. 
    Os carros possuem uma marca, uma cor e um gasto médio de combustível por Kilômetro rodado.
    Crie um método que dado a quantidade de quilómetros e o preço do combustível nos dê o valor 
    gasto em reais para realizar este percurso.
*/

class carro {
    marca;
    cor;
    gastoMedioPorKm;

    constructor(marca, cor, gastoMedioPorKm) {
        this.marca = marca;
        this.cor = cor;
        this.gastoMedioPorKm = gastoMedioPorKm;
    }

    calcularGasto(distancia, precoCombustivel) {
        return (distancia * this.gastoMedioPorKm * precoCombustivel).toFixed(2);
    }
}

const Focus = new carro('Ford', 'Prata', 1 / 8.89);
console.log(Focus);
console.log(`CP -> Marília Custo: R$ ${(Focus.calcularGasto(170, 4.27))}`); // 80.68

const Yaris = new carro('Toyota', 'Prata', 1 / 17);
console.log(Yaris);
console.log(`CP -> Marília Custo: R$ ${(Yaris.calcularGasto(170, 4.27))}`); // 80.68