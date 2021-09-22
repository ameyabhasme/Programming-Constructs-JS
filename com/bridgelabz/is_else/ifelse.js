//Min max
let numb1 = Math.floor((Math.random() * 100) % 890 + 100);
let numb2 = Math.floor((Math.random() * 100) % 890 + 100);
let numb3 = Math.floor((Math.random() * 100) % 890 + 100);
let numb4 = Math.floor((Math.random() * 100) % 890 + 100);
let numb5 = Math.floor((Math.random() * 100) % 890 + 100);

let max = Math.max(numb1, numb2, numb3, numb4, numb5);
console.log("Max random number : " + max);

let min = Math.min(numb1, numb2, numb3, numb4, numb5);
console.log("Min random number : " + min);
console.log("..................");

// Flip The coin
let is_Head = 1;
let flip = Math.floor((Math.random() * 10) % 2);

if (flip == is_Head)
    console.log("HEADS");
else
    console.log("TAILS");
console.log("..................");