function capitalize(value){
    if(typeof value !== "string"){
        return "not a string";
    }
    return value.charAt(0).toUpperCase();
}

function reverseString(value){
    if(typeof value !== "string") return "not a string";
    return value.split("").reverse().join("");
}

const calculator = {
    add(a,b){
        if(typeof a !== "number" || typeof b !== "number"){
            return "not a number";
        }
        return a + b;
    },
    sub(a,b){
        if(typeof a !== "number" || typeof b !== "number"){
            return "not a number";
        }
        return a - b;
    },
    mul(a,b){
        if(typeof a !== "number" || typeof b !== "number"){
            return "not a number";
        }
        return a*b;
    },
    div(a,b){
        if(typeof a !== "number" || typeof b !== "number"){
            return "not a number";
        }
        return a/b;
    }
}

function caesarCipher(value,key){
    const upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    const lowerCase = "abcdefghijklmnopqrstuvwxyz";
    const temp = value.split("");
    const result = [];

    //helper function
    //checks for lower and uppercase character
    function isLowerCase(char){
        if(char === char.toLowerCase()){
            return true;
        }
        return false;
    }

    //helper function
    // check if a charcter is a letter or not
    function isLetter(char){
        return char.toUpperCase() !== char.toLowerCase();
    }
    
    temp.forEach(item => {
    if(isLetter(item)){

    
    if(isLowerCase(item)){
        const index = (item.charCodeAt() + key) - "a".charCodeAt();
        if(index > 25){
            result.push(lowerCase[index - lowerCase.length]);
        }
        result.push(lowerCase[index]); 
    }else{
        const index = (item.charCodeAt() + key) - "A".charCodeAt();
        if(index > 25){
            result.push(upperCase[index - upperCase.length]);
        }
        result.push(upperCase[index]); 
        }
    }else{
        result.push(item);
    }
    })

    return result.join("");
}


module.exports = {
    capitalize,
    reverseString,
    calculator,
    caesarCipher
}