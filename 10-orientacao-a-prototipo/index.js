const pessoa = {
    genero: 'masculino'
}

const fabio = Object.create(pessoa)


fabio.nome = 'fabio';

console.log(fabio.genero) // 20