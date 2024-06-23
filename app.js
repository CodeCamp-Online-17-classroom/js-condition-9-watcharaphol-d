// write code here
let input_number = [];
let check_empty = false;
let check_NaN = false;

for (let i = 0; i < 3; i++) {
    let input = prompt(`Please enter number ${i + 1}:`);
    if (input === "") {
        alert(`You are not enter number ${i + 1}`);
        check_empty = true;
        break;
    } else if (isNaN(input)) {
        alert(`The recived input '${input}' is not number`);
        check_NaN = true;
        break;
    } else input_number.push(+input);
}

if (!(check_empty || check_NaN)) {
    input_number.sort((a, b) => b - a);
    alert(`The sort number from High to Low is: ${input_number}`);
}
// การใช้คำสั่ง sort() ใน array https://www.borntodev.com/2021/08/30/%E0%B8%A3%E0%B8%A7%E0%B8%A1%E0%B9%80%E0%B8%97%E0%B8%84%E0%B8%99%E0%B8%B4%E0%B8%84-array-sort-%E0%B9%83%E0%B8%99-javascript/


// ========= Another version of code ========
// let input1 = prompt(`Please enter number 1:`);
// let input2 = prompt(`Please enter number 2:`);
// let input3 = prompt(`Please enter number 3:`);
// let temp = null;

// if (input1 === "" || input2 === "" || input3 === "")
//     alert(`You are not enter some number`);
// else if (isNaN(+input1) || isNaN(+input2) || isNaN(+input3))
//     alert(`The recived input is not number`);
// else {
//     input1 = +input1;
//     input2 = +input2;
//     input3 = +input3;
//     if (input1 < input2) {
//         temp = input1;
//         input1 = input2;
//         input2 = temp;
//     }
//     if (input1 < input3) {
//         temp = input1;
//         input1 = input3;
//         input3 = temp;
//     }
//     if (input2 < input3) {
//         temp = input2;
//         input2 = input3;
//         input3 = temp;
//     }
//     alert(`The sort number from High to Low is: ${input1 + ", " + input2 + ", " + input3}`);
// }