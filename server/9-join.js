const elements = ["Fire", "Air", "Water"];

let rtaFinal = '';
const separator = '--';
for (let index = 0; index < elements.length; index++) {
    const element = elements[index];
    rtaFinal = rtaFinal + element + separator;
}

const rta = elements.join('--')
console.log('for', rtaFinal);
console.log('join', rta);

const title = 'Curso de manipulación de arrays';

const urlFinal = title.split(' ').join('-').toLowerCase();
console.log(urlFinal);


// Exercise
function parseToURL(title) {
    console.log(title.split(' ').join('-').toLowerCase());
}

parseToURL("La forma de correr Python");

// Exercise: Count words
const phrases = [
    "Beautiful is better than ugly",
    "Explicit is better than implicit",
    "Simple is better than complex",
    "Complex is better than complicated",
]

function countWords(array){
    return array.join(" ").split(" ").length
}

console.log(countWords(phrases));