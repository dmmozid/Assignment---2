document.write("<h3>This is created by Make a letter grade</h3>");
let mark = Number(prompt("Enter Your mark:"));
mark = parseInt(mark / 10);
switch (mark) {
  case 10:
  case 9:
  case 8:
    document.write("Congralutation! You have got A+");
    break;
  case 7:
    document.write("Congralutation! You have got A");
    break;
  case 6:
    document.write("Congralutation! You have got A-");
    break;
  case 5:
    document.write("You have got B");
    break;
  case 4:
    document.write("You have got C");
    break;
  default:
    document.write("Sorry! You have Failed!!.");
}

document.write("<h2>Thank You!</h2>");
