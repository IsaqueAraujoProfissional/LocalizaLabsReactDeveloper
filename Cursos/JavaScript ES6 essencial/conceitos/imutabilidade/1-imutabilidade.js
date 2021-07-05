const user = {
    name: 'Isaque',
    lastName: 'de Araújo'
}

function getUserWithFullName(user){
    return{
        ...user,
        fullName: user.name + " " + user.lastName 
    }
}

const userWithFullName = getUserWithFullName(user);

console.log(userWithFullName);