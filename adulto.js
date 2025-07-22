function addIsAdult(person) {
  return {
    ...person,
    isAdult: person.idade >= 18
  };
}


const person = { nome: "Aryelle", idade: 24 };
const newPerson = addIsAdult(person);

console.log(newPerson);
