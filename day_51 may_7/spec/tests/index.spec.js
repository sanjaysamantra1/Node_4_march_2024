const { isPrime, toLowerCase, isEven, repeat, Employee } = require("../..");

describe('This is test suite for index.js file', () => {
    it('Should test isPrime method', () => {
        expect(isPrime(3)).toBe(true);
        expect(isPrime(3)).not.toBe(false);
        expect(isPrime(4)).toBe(false);
        expect(isPrime(5)).toBe(true);
    })
    it('Should test isEven method', () => {
        expect(isEven(2)).toBe(true);
        expect(isEven(4)).toBeTruthy();
        expect(isEven(3)).toBe(false);
        expect(isEven(5)).toBeFalsy();
    })
    it('Should test toLowerCase method', () => {
        expect(toLowerCase('ABC')).toBe('abc')
        expect(toLowerCase('Abc')).toBe('abc')
    })
    it('Should test repeat method', () => {
        expect(repeat('abc', 2)).toBe('abcabc')
        expect(repeat('abc', 3)).toBe('abcabcabc')
    })
    it('should verify toBedefined', () => {
        let emp1 = new Employee(101, 'sanjay', 2000);
        // console.log(emp1)
        expect(emp1.eId).toBeDefined();
        expect(emp1.name).toBeDefined();
        expect(emp1.sal).toBeDefined();
        expect(emp1.dob).not.toBeDefined();
    })
    it('should verify toEqual', () => {
        let arr1 = [10, 20];
        let arr2 = [10, 20];
        expect(arr1).toEqual(arr2);
        expect(arr1).toContain(10);
        expect(arr1).toContain(20);
        expect(arr1).not.toContain(30);
    })
});