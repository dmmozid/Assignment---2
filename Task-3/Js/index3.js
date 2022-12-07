document.write("<h3> function showing addition. </h3>");
let num1 = Number(prompt("Enter the first number: "));
let num2 = Number(prompt("Enter the second number: "));
let num3 = Number(prompt("Enter the third number: "));
function addition(num1, num2, num3) {
  document.write(num1 + "+" + num2 + "+" + num3 + "=" + (num1 + num2 + num3));
}
function subraction(num1, num2, num3) {
  document.write(
    "<br/>" + num3 + "-" + num2 + "-" + num1 + "=" + (num3 - num2 - num1)
  );
}

function multiplication(num1, num2, num3) {
  document.write(
    "<br/>" + num3 + "*" + num2 + "*" + num1 + "=" + num3 * num2 * num1
  );
}
function division(num1, num2, num3) {
  document.write(
    "<br/>" +
      "(" +
      num3 +
      "/" +
      num2 +
      ")" +
      "/" +
      num1 +
      "=" +
      num3 / num2 / num1
  );
}
addition(num1, num2, num3);
subraction(num1, num2, num3);
multiplication(num1, num2, num3);
division(num1, num2, num3);

document.write("<h2>Thank You!</h2>");