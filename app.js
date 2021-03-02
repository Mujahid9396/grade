var num = prompt("Enter your number :");

if (num >= 100 || num <= 0) {
  document.write("Please Enter a valid Number");
} else if (num >= 80) {
  document.write(" <h1> You have got A+ </h1>");
} else if (num >= 70 && num <= 80) {
  document.write(" <h1> You have got A </h1>");
} else if (num >= 60 && num <= 70) {
  document.write(" <h1> You have got A- </h1>");
} else if (num >= 50 && num <= 60) {
  document.write(" <h1> You have got B </h1>");
} else if (num >= 40 && num <= 50) {
  document.write(" <h1> You have got C </h1>");
} else if (num >= 33 && num <= 40) {
  document.write(" <h1> You have got D </h1>");
} else {
  document.write(" <h1 style='color:red'> You are faild! Try agin. </h1>");
}
