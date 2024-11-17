const numbers = [1,30,39,29,10,13];


let rta = true;
for (let index = 0; index < numbers.length; index++) {
    const element = numbers[index];
    if (element >= 40) {
        rta = false
    }
}
console.log('for', rta);
const rta2 = numbers.every(item => item <= 40)
console.log('rta2', rta2);


// Exercise. Validate if the team applicants are under 15 years old

const team = [
  {
    name: "Nicolas",
    age: 12,
  },
  {
    name: "Andrea",
    age: 8,
  },
  {
    name: "Zulema",
    age: 2,
  },
  {
    name: "Santiago",
    age: 18,
  },
];

const groupOfApplicants = team.every(item => item < 15);
console.log(groupOfApplicants, ' The group does not meet all the admission requirements');


// Other exercise: Return a boolean whether all numbers are even or not

function checkArray(array) {
    if(array.length !== 0){
        console.log(array.every(item => item % 2 === 0));
    } else {
        console.log(false);
    }
}

checkArray([])