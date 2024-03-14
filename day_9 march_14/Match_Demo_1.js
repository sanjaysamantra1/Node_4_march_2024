let str = 'The rain in SPAIN stays mainly in the plain';
let res = str.match(/ain/gi);
console.log(res)

var str2 = 'ram & hari are 2 friends, Ram is 125 years and hari is 13 years old';
// let res2 = str2.match(/\d+/g);
let res2 = str2.match(/[0-9]{1,3}/g);
console.log(res2)
