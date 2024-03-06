let a = 10;   // global

function test(){
    let a = 12; // Function 

    if(5 == 5){
        let a = 15;  // block
    }
}
test();