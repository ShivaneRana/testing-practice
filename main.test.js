const {capitalize,reverseString,calculator,caesarCipher} = require('./main.js');

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

describe("caesarCipher",() => {
    
    it("lower case(1)",() => {
        expect(caesarCipher("z",1)).toBe("a")
    })

    it("lower case(2)",() => {
        expect(caesarCipher("xyz",3)).toBe("abc");
    })

    it("upper case(1)",() => {
        expect(caesarCipher("Z",7)).toBe("G")
    })

    it("upper case(2)",() => {
        expect(caesarCipher("XYZ",2)).toBe("ZAB");
    })

    it("mixed case(1)",() => {
        expect(caesarCipher("ShiVane",1)).toBe("TijWbof");
    })

    it("check punctuation(1)",() => {
        expect(caesarCipher("Hello, World!",3)).toBe("Khoor, Zruog!");
    })
})