function unlock()
{
    let header = document.getElementById('heading');
    header.innerText = 'Congratulation ! you can start learning on DOM';

    let btn = document.getElementById('btn');
    // btn.style.backgroundColor = 'red';
    btn.style.display= 'none';
}

function welcome()
{
    let name = document.getElementById('name');
    let nameSpan = document.getElementById('nameSpan');

    console.log(name.value, nameSpan);
    nameSpan.innerText = name.value; 
    name.value='';
}

function spit()
{
    let amount = document.getElementById('amount').value;
    let persons =  document.getElementById('noOfPerson').value;

    let eachget = (amount/persons).toFixed(0);
    
    let resultDiv = document.getElementById('result');
    resultDiv.innerText = eachget;
    // resultDiv.classList.add('{css-classname-to-add}')
    
    // after 5 seconds ABCD will be logged in console
    setTimeout(function() {
        
        console.log('ABCD');
    
    }, 5000);
}

// setTimeout(function, delay(in milli seconds))

let counter = 0;
let result = document.getElementById('result');

increment = () => {

    result.innerText = ++counter;
}

function decrement() {

    if (counter >= 0)
    {
        result.innerText = --counter;
    }
}

function create() {

    let boxContainer = document.getElementById('boxContainer');
    let div = document.createElement('div');
    div.classList.add('box');
    console.log(div);
    boxContainer.appendChild(div);
}

let users = [];
function renderUsers()
{
    
    var parentElement = document.getElementById('parent');
    
    parentElement.innerHTML = '';

    users.forEach((user) => {

        let div = document.createElement('div');
        let name = document.createElement('p');
        let email = document.createElement('p');

        name.innerText = user.name;
        email.innerText = user.email;

        div.appendChild(name);
        div.appendChild(email);

        parentElement.appendChild(div);
    });

}

function addUser(){
    let name = document.getElementById('name');
    let email = document.getElementById('email');

    let user = {
        name: name.value,
        email: email.value,
    }
    let userExsit = doesUserExsit(email.value);
    if(userExsit == false){
        users.push(user);
        alert.classList.add('success');
        alert.innerText = 'User added successfully!'
        hideAlert()
    }
    else{
        alert.classList.add('danger');
        alert.innerText = 'Email already exists!'
        hideAlert()
    }
    renderUsers()
}

function doesUserExsit(email)
{
    let exists = users.filter(user => user.email == email);
    return exists.Count > 0 ? true : false;
}

function hideAlert()
{
    setTimeout(()=>{
        alert.classList.remove('success', 'danger')
    }, 2000)
}

