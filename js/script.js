// Copyright (c) 2023 Noah Smith All rights reserved
//
// Created by: Noah Smith
// Created on: May 2023
// This file contains the JS functions for index.html


"use strict";

/**
 * This function displays all numbers form 0 up to the user number
 */
function NumberDisplay() {
  
  //initialize the counter ot 0
  let counter = 0

  //initialize the numbers as an empty string
  let numbers = ""
    
  //get the user number
  let userNumber = parseInt(document.getElementById("user-number").value)

  //use a a while loop to display the numbers from 0 up to the user number
  while (counter <= userNumber) {

    // build the string of numbers with a linebreak each time
    numbers = numbers + counter + "<br>"

    // increment the counter
    counter = counter + 1
  }
  
  // return the string of numbers back to html
  document.getElementById("result").innerHTML = numbers;
}