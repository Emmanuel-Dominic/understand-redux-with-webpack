
const numbers = [1, 2, 3]

const added1 = [...numbers, 4];
const added2 = [0, ...numbers];
const index = numbers.indexOf(2);
const added3 = [
        ...numbers.slice(0, index),
        5,
        ...numbers.slice(index)
        ];
const removed = added3.filter(n => n !== 5);
const updated = numbers.map(n => n === 3 ? 30 : n);
console.log(added1);
console.log(added2);
console.log(added3);
console.log(removed);
console.log(updated);
