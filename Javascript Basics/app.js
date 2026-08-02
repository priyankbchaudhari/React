

console.log('JS now running...');

var items = ['abc', 'pqr', 'xyz'];

console.log(items);

// array.splice(indexValue, deleteCount, addvalues...)
items.splice(1, 1, 'aaa', 'paass', 'ddfss');

//  console.log(items);

// array of arrays
let list = [['abc', 'pqr'], ['sd', 'ss'], ['fnfn', 'jghlrlf']];

//  console.log(list);

// console.log(list[0][0]);

//  console.log(typeof list); // its object

// why array shows object shows data type

let user = {
    name: 'priyank',
    email: 'priyank@gmail.com',
    age: 28,
    hobbies: ['abs', 'dfdsf', 'asd']
};

user.name = 'pqr'

delete user.age 

// console.log(user);

let xyz = ['abc', 'peyfd', 'dsfdsf'];

xyz['xdd'] = 'fdfsdf';

// console.log(xyz);
// arrays in javascript actually gets converted to an object and then it is stored



let users = [
    {name: 'abc', address:'pqr', age:20},
    {name: 'dasd', address:'pklnkjn', age:10},
    {name: 'arer', address:'ihiu', age:25},
    {name: 'hhrhr', address:'bgg', age:30}
];


let random = Math.floor(Math.random() * users.length);
console.log(users[random]);

let age = 18;
if('dfdf    ')
{
    console.log('you can vote');
}
else
{
     console.log('you cannnot vote')   
}

// truthy and falsy
// falsy => 0, -0, "", '', undefined, null, nan => false
// anything apart from falsy is treated as truthy values => true

// user = 'yash'
let salary = '35000'

// if(user == 'yashi' || salary == 35000){
//     console.log('user found!!')
// }

// === (strictly equal to ) => compares the value and data types
// == (equal to ) => comapares the value
if(salary === 35000){
    console.log('true');
}
else{
    console.log('false');
}