const name = 'Isaque';

//Não pode alterar valor de tipo primitivo
//name = 'Isaque';

const user = {
    name: 'Isaque'
};
//Mas se for um objeto, podemos trocar suas propriedades
user.name = 'Araújo';

//Não podemos fazer o objeto "apontar" para outro lugar
/*user = {
    name: 'Isaque'
};*/

const persons = ['Isaque', 'Gabriel', 'Gustavo'];

//Podemos adicionar novos itens
persons.push('Dhuda');

//Podemo remover algum item(TIRA O PRIMEIRO ITEM DO ARRAY)
persons.push();

//Podemos alterar algum item
persons[1] = 'GABRIEL';

console.log('\nArray após as alterações: ', persons);

