const students = [
{
    name: 'Lara',
    grade: 7
},
{
    name: 'Tifani',
    grade: 4
},
{
    name: 'Dhuda',
    grade: 8
}
];

function getApprovedStudents(studentsList){
    return studentsList.filter(student => student.grade >= 7);
}

console.log('Alunos aprovados:');
console.log(getApprovedStudents(students));

console.log('\nLista de alunos:');
console.log(students);
