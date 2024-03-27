let args = process.argv.slice(2);

let obj = {}
for (let arg of args) {
    let arr = arg.split('=');
    let key = arr[0]
    let value = arr[1]
    obj[key] = value;
}
console.log(obj)