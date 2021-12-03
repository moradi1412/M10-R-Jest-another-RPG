//including the file needed to be tested. 
const checkIfEqual = require ('../lib/random.js'); 

//sample test files 
//each test will have two argument, string and a function 
test ("check if 10 is equal to 10", () => {
    expect(checkIfEqual.checkIfEqual(10,10)).toBe(true); 
}); 

test ('gets random number between 1 to 10', () => {
    expect (checkIfEqual.randomNumber()).toBeGreaterThanOrEqual(1); 
    expect (checkIfEqual.randomNumber()).toBeLessThanOrEqual(10); 
}); 