let str = 'Hellooo';

let encryptedStr = btoa(str);
console.log(encryptedStr);

let originalStr = atob(encryptedStr);
console.log(originalStr)