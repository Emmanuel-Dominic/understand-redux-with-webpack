
const person = {name: 'Dominic'};
const updatedPerson = Object.assign({}, person, {name: 'Emmanuel'});
console.log(updatedPerson);

const user = {name: 'Matembu'};
// since spread operator ...person has a shallow copy at this point, we strongly override
// the name field with a string Emmanuel
const updatedUser = {...person, name: 'Emmanuel'};
console.log(updatedUser);

const worker = {
        name: 'Matembu',
        occupation: 'Software Engineer'
    };
const updatedWorker = {...person, name: 'Emmanuel'};
// This returns occupation with DevOps Engineer because the
// spread operator ...person has a shallow copy at this point from the reference
worker.occupation = 'DevOps Engineer';
console.log(worker);

