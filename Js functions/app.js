
// function grinder(items)
// {
//     console.log('grindering...' + items);
// }


// let items= ['tomato', 'garlic'] 
// grinder(items[0]);
// grinder(items[1]);
// grinder(items);


function sqr(n)
{
    return n*n;
}

let a = sqr(20);
console.log(a);

arrowfun = (a, b) => 
    {
        let result = a + b;
        console.log('from arrow functions' + result);
    }

arrowfun(20,30);

// implecit returns in arrow functions
sum = (a,b) => a + b;

// console.log(sum(19, 2));

// for(start, condition, change){}

// for(let i = 0; i < 6; i++)
// {
//     console.log(sum(i, i+1));
// }

let users = [
    {name: 'abeeeec', address:'pqr', age:20},
    {name: 'dawwwsd', address:'pklnkjn', age:10},
    {name: 'areqqqqr', address:'ihiu', age:25},
    {name: 'hhrhr', address:'bgg', age:30}
];

// for(let i = 0; i< users.length; i++)
// {
//     console.log(users[i].name);
// }

// let arr = [2, 3, 4, 5, 6, 7, 10];

// arr.forEach(function (n) {
//     console.log(n*n);
// });


 let arr = [2, 3, 4, 5, 6, 7, 10];

arrayReturnfun = () =>
{
    let result = [];

    for(i = 0; i < arr.length; i++)
    {
        result.push(arr[i] * arr[i]);
    }

    return result;
}

console.log(arrayReturnfun());


// es6 array mapping and filters
// using mapping we can do above thing

let resul =  arr.map((n) => n*n);
console.log(resul);

// array mapping is used to transform the array.

let names = users.map(user => user.name);
console.log(names);


let namesAgeAbove20 = users.filter(f => f.age > 20).map(user => user.name);
console.log(namesAgeAbove20);


// var g5 = arr.filter((num) => num % 2 == 1); 
// console.log(g5);
