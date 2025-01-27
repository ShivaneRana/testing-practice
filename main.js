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

module.exports = {
    capitalize,
    reverseString
}