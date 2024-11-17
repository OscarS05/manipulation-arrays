const totals = [1,2,3,4];

let sum = 0;
for (let index = 0; index < totals.length; index++) {
    const element = totals[index];
    sum = sum + element;
}
console.log(sum);

const rta = totals.reduce((sum, element) => sum + element, 0)
console.log('rta', rta);


// Other example: Reduce reloaded

const items = [1, 3, 2, 3];

const respuesta = items.reduce((obj, item) => {
    if (!obj[item]) {
        obj[item] = 1;
    } else {
        obj[item] = obj[item] + 1;
    }
    return obj;
}, {});

console.log('respuesta:', respuesta);


// Exercise: Histogram. How many numbers are there between 1-5, 6-8, 9-10?

const numbers = Array.from({ length: 20 }, () => Math.floor(Math.random() * 10) + 1);
console.log(numbers);

const histogram = numbers.reduce((obj, item) => {
    if(item <= 5){
        obj['1-5'] += 1
    } else if(item <= 8 && item >= 6){
        obj['6-8'] += 1
    } else if(item <= 10 && item >= 9){
        obj['9-10'] += 1
    }

    return obj;
}, {
    '1-5': 0,
    '6-8': 0,
    '9-10': 0
});
console.log(histogram);


