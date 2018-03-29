function greeter(person) {
    return 'Hello, ' + person;
}
var user = 'Alan Lai';
document.querySelector('#message').innerHTML = greeter(user);
