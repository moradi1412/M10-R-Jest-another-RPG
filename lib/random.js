const randomNumber = () => { 
    return Math.floor(Math.random()* 9 + 1 ); 
} 

const checkIfEqual = (val1, val2) => {
    if (val1 === val2) {
        return true; 
    } else {
        return false; 
    }
}; 




module.exports = {
    randomNumber: randomNumber, 
    checkIfEqual: checkIfEqual
}; 