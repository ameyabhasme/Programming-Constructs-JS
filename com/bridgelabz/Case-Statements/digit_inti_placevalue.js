let numb = 1;

switch (parseInt(numb)) {
    case 1:
        console.log("Unit");
        break;
    case 10:
        console.log("Tens");
        break;
    case 100:
        console.log("Hundered");
        break;
    case 1000:
        console.log("Thousand");
        break;
    default:
        console.log("Invalid Digit!");
        break;
}