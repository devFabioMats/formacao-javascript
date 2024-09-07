
// 3) Faça um programa que calcule e imprima o salário salário a ser transferido para um funcionário.
// Para realizar o calculo receba o valor bruto do salário e o adicional dos benefícios.
// O salário salário a ser transferido é calculado da seguinte maneira: 

//    valor bruto do salário - percentual de imposto mediante a faixa salarial + adicional dos benefícios

// Para calcular o percentual de imposto segue as aliquotas:

//     De R$ 0.00 a R$ 1100.00 = 5.00%
//     De R$ 1100.01 a R$ 2500.00 = 10.00%
//     Maior que R$ 2500.00 = 15.00%

//     Exemplo:
//         Entrada:
//             2000
//             250

//         Saída:
//             2050.00

const { gets, print } = require('./funcoes-auxiliares-ex3');

const valorSalarioBruto = gets();
const adicionalBeneficios = gets();
let salarioTransferido = 0;

if (valorSalarioBruto <= 1100) {
    salarioTransferido = valorSalarioBruto - (valorSalarioBruto * 0.05) + adicionalBeneficios;
} else if (valorSalarioBruto > 1100 && valorSalarioBruto <= 2500) {
    salarioTransferido = valorSalarioBruto - (valorSalarioBruto * 0.10) + adicionalBeneficios;
} else {
    salarioTransferido = valorSalarioBruto - (valorSalarioBruto * 0.15) + adicionalBeneficios;
}

print(salarioTransferido.toFixed(2));


