//Nested Objects:
// Array of three people
let people = [
    {
        name: 'Alice',
        age: 25,
        place: {
            city: 'Wonderland',
            country: 'Fairyland'
        }
    },
    {
        name: 'Bob',
        age: 30,
        place: {
            city: 'TechCity',
            country: 'Geekland'
        }
    },
    {
        name: 'Charlie',
        age: 28,
        place: {
            city: 'Artsville',
            country: 'Createland'
        }
    }
];

console.log(people[0])
console.log(people[1].name)
people[0].age = 31;
console.log(people[0])
console.log(people[1].place.city)