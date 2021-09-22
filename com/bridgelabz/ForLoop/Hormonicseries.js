let n = 6;

let sum = 0;
for (let i = 1; i <= n; i++) {
    sum += sum + (1 / i);
}

console.log("Sum of Harmonic series: " + sum);