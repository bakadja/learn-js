// Global scope
var globalVar = "I'm a global variable";
let globalLet = "I'm also global, but scoped with let";
const globalConst = "I'm a global constant";


{
// Block scope
var blockVar = "I'm a block-scoped var";
let blockLet = "I'm a block-scoped let";
const blockConst = "I'm a block-scoped const";
}

// Global scope
console.log(globalVar); // Output: "I'm a global variable"
console.log(globalLet); // Output: "I'm also global, but scoped with let"
console.log(globalConst); // Output: "I'm a global constant"


//Block Scope
console.log(blockVar); // I'm a block-scoped var
// console.log(blockLet); // Uncaught ReferenceError: blockLet is not defined

/**
 * A ReferenceError occurs when code attempts to use a variable 
 * that has not been declared or is outside of its scope, preventing proper access 
 * or execution.
 */

function show(){
    var functionVar = "I'm a block-scoped var";
    let functionLet = "I'm a block-scoped let";
    const functionConst = "I'm a block-scoped const";
    }
    show();
    
    // console.log(functionVar); // Throws ReferenceError
    // console.log(functionLet); // Throws ReferenceError
    // console.log(functionConst); // Throws ReferenceError


    {
        let myLet = "hello";
        const myConst = "world";
        var myVar = "!";
        
        // reassign these variables
        myLet = "hi";
        // myConst = "my Friend" // TypeError: Assignment to constant variable.
        myVar = ":)"
    }

     //  reassign the same variables outside the block
        
        myLet = 1;
        myConst = 2 ;
        myVar = 3 ;
    
    // global scope variables, work fine wihtout strict mode, with strict mode it will throw an error    
        console.log(myLet, myConst, myVar); // 1 2 3 
    