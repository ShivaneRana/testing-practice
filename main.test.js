const {capitalize,reverseString,calculator,caesarCipher,analyzeArray} = require('./main.js');

// describe("Capitalize function",() => {
    
//     it("happy path (1)",() => {
//         expect(capitalize("Beautiful")).toBe("B")
//     })

//     it("happy path (2)",() => {
//         expect(capitalize("Asthama")).toBe("A")
//     })

//     it("not a string",() => {
//         expect(capitalize(123)).toBe("not a string");
//     })
// })

// describe("ReverseString", () => {
//     it("happy path (1)",() => {
//         expect(reverseString("Shivane")).toBe("enavihS");
//     })

//     it("happy path (2)",() => {
//         expect(reverseString("Naman")).toBe("namaN");
//     })

    
//     it("not a string",() => {
//         expect(reverseString(123)).toBe("not a string");
//     })
// })

// describe("calculator",() => {

//     it("calculator is an object",() => {
//         expect(typeof calculator).toBe("object");
//     })

//     it("addition (1)",() => {
//         expect(calculator.add(6,6)).toBe(12);
//     })

//     it("addition (2)",() => {
//         expect(calculator.add("shivane",6)).toBe("not a number");
//     })

//     it("subtraction (1)",() => {
//         expect(calculator.sub(6,6)).toBe(0);
//     })
    
//     it("subtraction (2)",() => {
//         expect(calculator.sub(16,6)).toBe(10);
//     })

//     it("subtraction (3)",() => {
//         expect(calculator.sub("shivane",6)).toBe("not a number");
//     })

//     it("subtraction (4)",() => {
//         expect(calculator.sub(16,116)).toBe(-100);
//     })

//     it("multiplication (1)", () => {
//         expect(calculator.mul(10,7)).toBe(70);
//     })

//     it("multiplication (2)", () => {
//         expect(calculator.mul(10,-7)).toBe(-70);
//     })

//     it("multiplication (3)", () => {
//         expect(calculator.mul(10,"uwu")).toBe("not a number");
//     })

//     it("division (1)",() => {
//         expect(calculator.div(10,10)).toBe(1);
//     })

//     it("division (2)",() => {
//         expect(calculator.div(0,10)).toBe(0);
//     })

//     it("division (2)",() => {
//         expect(calculator.div(0,"uwu")).toBe("not a number");
//     })
// })

// describe("caesarCipher",() => {
    
//     it("lower case(1)",() => {
//         expect(caesarCipher("z",1)).toBe("a")
//     })

//     it("lower case(2)",() => {
//         expect(caesarCipher("xyz",3)).toBe("abc");
//     })

//     it("upper case(1)",() => {
//         expect(caesarCipher("Z",7)).toBe("G")
//     })

//     it("upper case(2)",() => {
//         expect(caesarCipher("XYZ",2)).toBe("ZAB");
//     })

//     it("mixed case(1)",() => {
//         expect(caesarCipher("ShiVane",1)).toBe("TijWbof");
//     })

//     it("check punctuation(1)",() => {
//         expect(caesarCipher("Hello, World!",3)).toBe("Khoor, Zruog!");
//     })
// })

describe("analyzeArray",() => {
    it("return object",() => {
        expect(typeof analyzeArray([])).toBe("object");
    })

    it("return average,min,max,length",() => {
        expect(analyzeArray([]).hasOwnProperty("average")).toBe(true);
        expect(analyzeArray([]).hasOwnProperty("length")).toBe(true);
        expect(analyzeArray([]).hasOwnProperty("min")).toBe(true);
        expect(analyzeArray([]).hasOwnProperty("max")).toBe(true);
    })

    it("accept only array (1)",() => {
        expect(analyzeArray("shivane")).toBe("not an array");
    })

    it("accept only array (2)",() => {
        expect(analyzeArray(132131)).toBe("not an array");
    })
    
    it("get correct value (1)",() => {
        const arr = [1,2,3,4,5];
        expect(analyzeArray(arr).min).toBe(1);
        expect(analyzeArray(arr).max).toBe(5);
        expect(analyzeArray(arr).length).toBe(5);
        expect(analyzeArray(arr).average).toBe(3);
    })

    it("get correct value (2)",() => {
        const arr = [1,-2,3,44,5,100];
        expect(analyzeArray(arr).min).toBe(-2);
        expect(analyzeArray(arr).max).toBe(100);
        expect(analyzeArray(arr).length).toBe(6);
        expect(analyzeArray(arr).average).toBe(25);
    })
})