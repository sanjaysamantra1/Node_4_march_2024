let obj1 = {
    name: 'sachin',
    displayName: function () {
        console.log('I am displayName')
        console.log(this.name)
    }
}
obj1.displayName(); // inside displayName(), this = obj1

let a = obj1.displayName;
a();

let b = obj1.displayName.bind(obj1);
b();

let c = b;
c();