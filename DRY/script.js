const number = prompt('enter a number between 1 and 100');

if (number >= 1 && number <= 100) {
    if (number % 3 === 0 && number %5 != 0) {
        console.log('Wizz');
    } else if (number % 5 === 0 && number %3 != 0) {
        console.log('Zapp');
    } else if (number % 3 === 0 && number % 5 === 0) {
        console.log('WizzZapp');
    } else {
        console.log(number);
    }
} else {
    console.log('The number is not between 1 and 100 !');
}
