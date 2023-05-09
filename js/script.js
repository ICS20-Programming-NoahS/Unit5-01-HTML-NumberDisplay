// Copyright (c) 2023 Noah Smith All rights reserved
//
// Created by: Noah Smith
// Created on: May 2023
// This file contains the JS functions for index.html

"use strict";

/**
 * This function displays all numbers between the user's mina nd max inclusive
 */
function NumberDisplay() {

  // initialize the numbers as an empty string
  let numbers = ""
    
  //get the user min
  let userMin = parseInt(document.getElementById("user-min").value)

  //get the user max
  let userMax = parseInt(document.getElementById("user-max").value)

  let counter = userMin

  // if min is bigger than max
  if (userMax < userMin) {
    numbers = "Please make your min smaller than your max"
  }

  //use a while loop to display the numbers from 0 up to the user number
  while (counter <= userMax) {
    
    // build the string of numbers with a linebreak each time
    numbers = numbers + counter + "<br>"

    // increment the counter
    counter = counter + 1
  }
  
  // return the string of numbers back to html
  document.getElementById("result").innerHTML = numbers;
}