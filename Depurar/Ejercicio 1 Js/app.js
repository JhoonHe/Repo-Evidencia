let numbers = [10, 5, 8, 20, 3, 15];
let max = 0;

for (let i = 0; i < numbers.length; i++) {
    if (numbers[i] = max) { // Debería ser numbers[i] >= max
        max = numbers[i];
    }
}

console.log("El número mayor es:", max);
