function greeter(person) {
    return 'Hello, ' + person;
}

let user = 'Alan Lai';
document.querySelector('#message').innerHTML = greeter(user);