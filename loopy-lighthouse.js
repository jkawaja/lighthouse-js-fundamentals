/* Prints out 100 to 200, inclusive. So x = 100 to start. 
It's going to be an "IF" statement. 
If the number is a multiple of 3, print the string "Loopy" instead of the number.
If the number is a multiple of 4, print the string "Lighthouse" instead of the number.
If the number is a multiple of both 3 and 4, print the string "LoopyLighthouse" instead of the number.
if statements: x % 3 === 0 && x % 4 === 0; x % 3 === 0; if x % 4 ==== 0
while (x >= 100 && x <= 200) } starter. */
let x = 100;

while (x >= 100 && x <= 200) {
  if (x % 3 === 0 && x % 4 === 0) {
    console.log("LoopyLighthouse");
  } else if (x % 3 === 0) {
    console.log("Loopy");
  } else if (x % 4 === 0) {
    console.log("Lighthouse");
  } else {
    console.log(x);
  }
  x = x + 1
}