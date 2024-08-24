/*
    2) O IMC – Indice de Massa Corporal é um critério da Organização Mundial de Saúde para dar uma indicação sobre a condição de peso de uma pessoa adulta. 

    Formula do IMC:
    IMC = peso / (altura * altura)

    Elabore um algoritmo que dado o peso e a altura de um adulto mostre sua condição de acordo com a tabela abaixo.

    IMC em adultos Condição:
    - Abaixo de 18.5 Abaixo do peso;
    - Entre 18.5 e 25 Peso normal;
    - Entre 25 e 30 Acima do peso;
    - Entre 30 e 40 Obeso;
    - Acima de 40 Obsesidade Grave;
*/

let peso = 105;
let altura = 1.83;

const imc = peso / (altura * altura);

if (imc < 18.5) {
    console.log(`IMC: ${imc.toFixed(0)} - Abaixo do peso`);
} else if (imc >= 18.5 && imc < 25) {
    console.log(`IMC: ${imc.toFixed(0)} - Peso normal`);
} else if (imc >= 25 && imc < 30) {
    console.log(`IMC: ${imc.toFixed(0)} - Acima do peso`);
} else if (imc >= 30 && imc < 40) {
    console.log(`IMC: ${imc.toFixed(0)} - Obeso`);
} else {
    console.log(`IMC: ${imc.toFixed(0)} - Obsesidade Grave`);
}