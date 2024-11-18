const months = ['March', 'Jan', 'Feb', 'Dec'];
months.sort();
console.log(months);
const numbers = [1, 30, 4, 21, 100000];
numbers.sort((a,b) => b - a);
console.log(numbers);
const words = ['réservé', 'premier', 'communiqué', 'café', 'adieu', 'éclair', 'banana'];
words.sort((a,b) => a.localeCompare(b));
console.log(words);
const orders = [
    {
      customerName: "Nicolas",
      total: 600,
      delivered: true,
    },
    {
      customerName: "Zulema",
      total: 120,
      delivered: false,
    },
    {
      customerName: "Santiago",
      total: 1840,
      delivered: true,
    },
    {
      customerName: "Valentina",
      total: 240,
      delivered: true,
    },
];
orders.sort((a,b) => b.total - a.total);
console.log(orders);


// Exercise: Sort dates from most recent to oldest
const dates = [
    new Date(2022, 5, 15), // 15 junio 2022
    new Date(2020, 2, 23), // 23 marzo 2020
    new Date(2024, 10, 1), // 1 noviembre 2024
    new Date(2019, 8, 9),  // 9 septiembre 2019
    new Date(2021, 11, 25), // 25 diciembre 2021
    new Date(2023, 7, 5), // 5 agosto 2023
    new Date(2018, 1, 14), // 14 febrero 2018
    new Date(2022, 3, 30), // 30 abril 2022
    new Date(2024, 0, 1), // 1 enero 2024
    new Date(2021, 6, 12), // 12 julio 2021
];

dates.sort((a, b) => b - a);
console.log(dates);