const user = {
    name: 'Isaque',
    lastName: 'de Araújo'
};

//Recupera as chaves do objeto
console.log('Propriedades do objeto user:', Object.keys(user));

//Recupera os valores das chaves do objeto
console.log('\nValores das propriedades do objeto user:', Object.values(user));

//Retorna um array de arrays contendo [nome_prop, valor_prop]
console.log('\nnLista de propriedades e valores:', Object.entries(user)); 

//Mergear propriedades de objetos
Object.assign(user, {fullName: 'Isaque de Araújo'});

console.log('\nAdiciona a propriedades fullName no objeto user', user);
console.log('\nRetorna um novo objeto mergeando dois ou mais objetos', Object.assign({}, user, {age: 26}));

//Previne todas as alterações em um objeto
const newObj = {foo: 'bar'};
Object.freeze(newObj);

newObj.foo = 'Changes';
delete newObj.foo;
newObj.bar = 'foo';

console.log('\nVariável newObj após as alterações', newObj);

//Permite apenas a alteração de propriedades existentes em um objeto
const person = {name: 'Isaque'};
Object.seal(person);

person.name = 'Isaque de Araújo';
delete person.name;
person.age = 21;

console.log('\nVariável person após as alterações:', person);