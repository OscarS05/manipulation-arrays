//flat
    // CHALLENGE: flat without method. flat with recursivity
const matriz2 = [
    [1,2,3],
    [4,5,6, [1,2, [1,2]]],
    [7,8,9]
];

const flatten = (arr) => arr.reduce((a, b) => a.concat(Array.isArray(b) ? flatten(b) : b), []); // Compact solution with reduce

function flatFunction(array){ // Solution without reduce
    let flattenedArray = [];

    array.forEach(item => {
        if(typeof item == 'number'){
            flattenedArray.push(item);

        } else if(Array.isArray(item)){
            // flattenedArray = flattenedArray.concat(flatFunction(item)); // Another option but a little less efficient
            flatFunction(item).forEach(subItem => flattenedArray.push(subItem));
        }
    });

    return flattenedArray;
}

console.log('FINAL RESULT', flatFunction(matriz2));
console.log('Compact solution', flatten(matriz2));


    // Iterative alternative. flat without recursivity. Seeking performance through large arrays.
    // --- ChatGPT code ---
function flattenArrayIteratively(array) {
    if (!Array.isArray(array)) {
        throw new TypeError("Input must be an array.");
    }

    const stack = [...array];
    const result = [];

    while (stack.length) {
        const current = stack.pop();

        if (Array.isArray(current)) {
            stack.push(...current); // Push back nested arrays to process later
        } else {
            result.unshift(current); // Add value to the result array
        }
    }

    return result;
}

console.log('FINAL RESULT', flattenArrayIteratively(matriz2));