// Function Declaration
function add(a, b) { 
    console.log(a+b)
}
add(1,2);

// Function Expression
let sub = function(a,b){
    console.log(a-b);
}
sub(10,5)
sub(10,6)
sub(10,7)


(function(a,b){
    console.log(a*b)
})(3,5);