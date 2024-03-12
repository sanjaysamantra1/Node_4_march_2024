var nestedObject = {
    data: {
        info: {
            stuff: {
                thing: {
                    moreStuff: {
                        magicNumber: 22,
                        something: "hello",
                        manyMoreStuff: {
                            number: 44,
                        }
                    }
                }
            }
        }
    }
};

function contains(obj, searchValue) {
    for (let key in obj) {
        let value = obj[key];

        if (typeof value === 'object') {
            return contains(value, searchValue)
        }
        if (value === searchValue) {
            return true
        }
    }
    return false;
}

let res1 = contains(nestedObject, 44); // true
let res2 = contains(nestedObject, "hiii"); // false

console.log(res1, res2)