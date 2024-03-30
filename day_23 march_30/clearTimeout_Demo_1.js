let timer1 = setTimeout(() => {
    console.log('I am timer-1')
}, 5000);

setTimeout(() => {
    console.log('I am timer-2');
    clearTimeout(timer1);
}, 3000);