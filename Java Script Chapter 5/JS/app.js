
// ================Java Script 5th chapter Assignment=============================

// 1. Write a program that take two numbers & add them in a 
// new variable. Show the result in your browser

// let num1= +prompt("Enter first number");
// let num2= +prompt("Enter second number");
// let result=num1 + num2;
// document.write("Sum of  "+  num1 +" and  "+  num2 + " is " + result);


// ===================================================================================================
// 2. Repeat task1 for subtraction, multiplication, division &
// modulus.

// let num_1 = +prompt("Enter First number");
// let num_2 = +prompt("Enter second number");
// document.write("The Sum of " , num_1 , " and " , num_2 , " is " , num_1+num_2 + "<br>");
// if (num_1>num_2){
// document.write("The Subtraction of " , num_1 , " and " , num_2 , " is " , num_1-num_2 + "<br>");
// }
// else{
//     document.write("The Subtraction of " , num_1 , " and " , num_2 , " is  -" , num_2-num_1 + "<br>");
// }
// document.write("The multiplication of " + num_1 + " and " + num_2 + " is " + num_1*num_2 + "<br>");
// document.write("The module of " + num_1 + " and " + num_2 + " is " + num_1%num_2 + "<br>");


// ===================================================================================================
// 3. Do the following using JS Mathematic Expressions
// a. Declare a variable.
// b. Show the value of variable in your browser like “Value
// after variable declaration is: ??”.
// c. Initialize the variable with some number.
// d. Show the value of variable in your browser like “Initial
// value: 5”.
// e. Increment the variable.
// f. Show the value of variable in your browser like “Value
// after increment is: 6”.
// g. Add 7 to the variable.
// h. Show the value of variable in your browser like “Value after addition is: 13”.
// i. Decrement the variable.
// j. Show the value of variable in your browser like “Value
// after decrement is: 12”.
// k. Show the remainder after dividing the variable’s value 
// by 3. 
// l. Output : “The remainder is : 0”.
// let value 
//  document.write("value after variable declaration is ", value, "<br>")
// value = +prompt("Enter number");
//  document.write("Initial value : ", value, "<br>")
// ++value;
//  document.write("Value after increment is : ", value, "<br>")
// value = value +7;
// document.write("Value after adding 7 is : ", value, "<br>")
// --value;
// document.write("Value after decrement is : ", value, "<br>")
// value = value%3;
// document.write("The remainder  is : ", value, "<br>")


// // =========================================================================================
// 4. Cost of one movie ticket is 600 PKR. Write a script to 
// store
// ticket price in a variable & calculate the cost of buying 5 
// tickets
// to a movie. Example output

// let price = +prompt("Enter price of one ticket");
// let calculation =  +prompt("How many tickets u want to buy?");
// document.write("Total price of buying ", calculation, " tickets is ", price * calculation);


// // =========================================================================================
// 5. Write a script to display multiplication table of any 
// number in your browser. E.g

// let number = +prompt("Enter number");
//  document.write("Table of ",number,  " <br> ");
// for (let i =1; i<=10;i++)
//  document.write(number + " X  "+  i+ " = "+ + number*i+ " <br> ")


// // =========================================================================================
// 6. The Temperature Converter: It’s hot out! Let’s make a 
// converter based on the steps here.
// a. Store a Celsius temperature into a variable.
// b. Convert it to Fahrenheit & output “NNoC is NNoF”.
// c. Now store a Fahrenheit temperature into a variable.
// d. Convert it to Celsius & output “NNoF is NNoC”

// let celcius = +prompt("Enter Tempertaure in Celsius");
// let fahrenhite = +prompt("Enter Tempertaure in Fahrenhite");

// document.write("Temperature ",celcius, " in Fahrenhite is ", ((celcius*(9/5))+32), "<sup>o</sup> F <br>");
// document.write("Temperature ",fahrenhite, " in Celsius is ", ((fahrenhite-32)*(5/9)), "<sup>o</sup> C");

// // =========================================================================================
// 7. Write a program to implement checkout process of a 
// shopping cart system for an e-commerce website. Store 
// the following in variables
// MATH EXPRESSIONS | JAVASCRIPT
// Page 5 of 9
// a. Price of item 1
// b. Price of item 2
// c. Ordered quantity of item 1
// d. Ordered Quantity of item 2
// e. Shipping charges
// Compute the total cost & show the receipt in your browser.

// let price1 = 500;
//   let quantity1 = +prompt("Enter Ordered quantity of item 1");
//   let price2 = 100;
//   let quantity2 = +prompt("Enter Ordered quantity of item 2");
//   let shippingcharges = 100;
//   document.write("Price of item 1 is: ",price1, "<br>");
//   document.write("Price of item 2 is: ",price2, "<br>");
//   document.write("Quantity of item 1 is: ",quantity1, "<br>");
//   document.write("Quantity of item 2 is: ",quantity2, "<br>");
//  document.write("Shipping price is: ",shippingcharges, "<br>");
//   document.write("Total cost of your order is : ",(price1*quantity1)+(price2*quantity2)
// +shippingcharges, "<br>");




// // // =========================================================================================
// // 8. Store total marks & marks obtained by a student in 2 
// // variables. Compute the percentage & show the result in 
// // your browser

// let tM = +prompt("Enter Total Marks");
// let oM = +prompt("Enter Obtained Marks");
// let per = (oM*100)/tM;
//  document.write("Total marks are: ",tM, "<br>");
// document.write("Otained marks are: ",oM, "<br>");
// document.write("Percentage is: ",per, "%");

// // =========================================================================================
// 9. Assume we have 10 US dollars & 25 Saudi Riyals. Write a 
// script to convert the total currency to Pakistani Rupees. 
// Perform all calculations in a single expression.
// (Exchange rates : 1 US Dollar = 104.80 Pakistani Rupee 
// and 1 Saudi Riyal = 28 Pakistani Rupee)

// let dollar = +prompt("Enter How many dollars you want to convert?");
// let riyal = +prompt("Enter How many riyals you want to convert?");
// let conversion = (dollar*104.80) + (riyal*28);
// document.write("<b> currency in PKR </b> <br><br>");
// document.write("Total currency in PKR : ", conversion)


// // =========================================================================================
// 10. Write a program to initialize a variable with some 
// number and do arithmetic in following sequence:
// a. Add 5
// b. Multiply by 10
// c. Divide the result by 2
// Perform all calculations in a single expression


// let number = +prompt("Enter a number");
// let formula=(((number+5)*10)/2);
// document.write(formula);

// // =========================================================================================

// 11. The Age Calculator: Forgot how old someone is? 
// Calculate it!
// a. Store the current year in a variable.
// b. Store their birth year in a variable.
// c. Calculate their 2 possible ages based on the stored 
// values.
// Output them to the screen like so: “They are either NN or NN
// years old”.

// let currentYear = +prompt("Enter Current year");
// let birthYear = +prompt("Enter Your Birth year");
//  let age = currentYear - birthYear ;
// document.write("Current Year: ", currentYear, " <br>")
// document.write("Birth Year: ", birthYear, " <br>")
// document.write("Your Age is: ", age)


// // =========================================================================================
// 12. The Geometrizer: Calculate properties of a circle.
// a. Store a radius into a variable.
// MATH EXPRESSIONS | JAVASCRIPT
// Page 8 of 9
// b. Calculate the circumference based on the radius, and
// output “The circumference is NN”.
// (Hint : Circumference of a circle = 2 π r , π = 3.142)
// Calculate the area based on the radius, and output “The 
// area is NN”. (Hint : Area of a circle = π r2, π = 3.142)

// let radius = 3.142
// let circumference = 2* Math.PI * radius;
// let area = Math.PI *(radius**2);
// document.write("Radius of a circle is: ", radius, " <br>");
// document.write("The Circumference is: ", circumference, " <br>");
// document.write("The Area is: ", area, " <br>")



// =========================================================================================

// 13. The Lifetime Supply Calculator: Ever wonder how
// much a “lifetime supply” of your favorite snack is? 
// Wonder no more.
// a. Store your favorite snack into a variable
// b. Store your current age into a variable.
// c. Store a maximum age into a variable.
// d. Store an estimated amount per day (as a number).
// e. Calculate how many would you eat total for the rest of
// your life.
// Output the result to the screen like so: “You will need 
// NNNN to last you until the ripe old age of NN”

// let favSnack = prompt("Enter your favourite snacks");
// let currentAge = +prompt("Enter your Current Age");
//  let maximumAge = +prompt("Enter your estimated max age");
// let snackPer_day =  +prompt("Enter estimated amount of snack you eat per day");
//  let value = 0;
//  let loop_value = (maximumAge - currentAge)*365;
//  for (let i=1;i<=loop_value;i++){
//      value = value+snackPer_day;
//  }
//  document.write("Favourite snacks : ",favSnack, " <br>");
// document.write("Current age : ",currentAge, " <br>");
// document.write("Estimated maximum age : ",maximumAge, " <br>");
// document.write("Amount of snacks per day : ",snackPer_day, " <br>");
// document.write("You will need : ",value, " snack to last you until the ripe old age of ", maximumAge , "<br>");
