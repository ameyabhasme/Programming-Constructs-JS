let numb1 = 1;
let numb2 = 10;

//To check the condition  for Prime
console.log("Prime Numbers between given range ");
for (let i = numb1; i <= numb2; i++) {
    let isPrime = true;

    for (let j = 2; j <= i; j++) {
        if (i % j == 0 && j != i) {
            isPrime = false;
        }
    }

    if (isPrime == true) {
        console.log(i);
    }
}