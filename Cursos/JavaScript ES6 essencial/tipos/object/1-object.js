let user = {
    name: 'Isaque'
};

console.log(user.name);

//Alterando a propriedade de um objeto
user.name = 'Outro nome 1';
console.log(user.name);

user['name'] = 'Outro nome 2';
console.log(user.name);

const prop = 'name';
user[prop] = 'Outro nome 3';

console.log(user.name);

function getProp(prop){
    return user[prop];
}

//Criando uma propriedade
user.lastName = 'de Araújo';
console.log(user.name + ' ' + user.lastName);

//Deletando uma propriedade
delete user.name;
console.log(user.name);