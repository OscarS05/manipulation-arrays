const letters = ['a', 'b', 'c'];

const newLetters = letters.map(item => item + '++');

console.log(letters);
console.log(newLetters);

// Exercise: Calculate the final price with taxes
// You have a list of products with their original prices and you want to calculate the final price of each product after applying a 19% tax.

const products = [
    { name: "Laptop", price: 1200 },
    { name: "Teléfono", price: 800 },
    { name: "Audífonos", price: 150 },
    { name: "Monitor", price: 300 },
];

const productsWithTax = products.map(item => ({
    ...item,
    finalPrice: item.price + (item.price * .19),
}));

console.log(products);
console.log(productsWithTax);


// Other exercise
// Tienes un array de números, tu reto es retornar los números de ese array multiplicados por dos 
// Input: [2, 4, 5, 6, 8] Output: [4, 8, 10, 12, 16]

function multiplyElements(array) {
    // return array.map(item => item * 2);
    console.log(array.map(item => item * 2));
}

multiplyElements([2, 4, 5, 6, 8])


// Other exercise
//Tu reto es agregar y calcular una nueva propiedad llamada "taxes", los impuestos deben ser del 19% con base al precio base y debes tener en cuenta que como resultado se debe dejar un valor entero, sin decimales.

function addNewAttr(array) {
    console.log(array.map(item => ({
      ...item,
      taxes: Math.trunc(item.price * .19),
    })));
}

addNewAttr(
    [
        {
          name: "Product 1",
          price: 1000,
          stock: 10
        },
        {
          name: "Product 2",
          price: 2000,
          stock: 20
        }
      ]
);