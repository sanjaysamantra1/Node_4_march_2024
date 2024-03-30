let timer = setInterval(() => {
    console.log('Hellooo')
}, 1000);

setTimeout(() => {
    clearInterval(timer)
}, 5000)