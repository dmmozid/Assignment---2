document.write("<h3> The multiplication table vertically from 1 to 8 </h3>");
document.write("<h3> Using for Loop. </h3>");
let i;
let j;
for (i = 1; i <= 8; i++) {
  for (j = 1; j <= 10; j++) {
    document.write(" " + i + "x" + j + "=" + i * j);
  }
  document.write("<br/> <br/>");
}
document.write("<h3> Using While Loop. </h3>");
i = 1;
while (i <= 8) {
  j = 1;
  while (j <= 10) {
    document.write(" " + i + "x" + j + "=" + i * j);
    j++;
  }
  document.write("<br/> <br/>");
  i++;
}
document.write("<h3> Using do while Loop. </h3>");
i = 1;
do {
  j = 1;
  do {
    document.write(" " + i + "x" + j + "=" + i * j);
    j++;
  } while (j <= 10);
  document.write("<br/> <br/>");
  i++;
} while (i <= 8);

document.write("<h2>Thank You!</h2>");