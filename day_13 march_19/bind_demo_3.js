let user = {
    name: 'sachin',
    greet() {
        console.log('hellooo ', this.name)
    }
}
user.greet();

setTimeout( user.greet , 2000 );
setTimeout( user.greet.bind(user) , 4000 );