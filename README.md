# w3_jscript
This file is being prepared as the basis for me to learn about JavaScript and HTML but mostly JavaScript.
The course itself is from the W3 School which offers various courses for free including JavaScript and HTML.

## Lesson 1: What JavaScript do?

In this lesson focus on overview just do as the example told me to do.
The file is what_can_js_do.html while it has some resources namely:
  1. res\pic_bulboff.gif
  2. res\pic_bulbon.gif
  which are used to simulate the on/off switches of a bulb.

  Then the JavaScript file used in this session are:
  1. script\myScript.js which covers most of the script in  action
  2. script\bulb.js which covers the light bulb control case.

  These two scripts files are here to simulate multiple JavaScript file used for the same HTML file.

Note: this code also being cloned into other PC for git course testing.

## Lesson 2 : Javascript Data Types
The objective of this course firstly to show what if a number plus string
TODO: this is still not working while using external script file.
      only when using number plus number the result can be displayed
      SOLVED: the problem is in the HTML code (js_data_type.html) that the buttons called
      the function using attribute onclick = "data_types(16, 32, "Seat")" thus it creates
      conflicting "" between the onclick attribute.
      It has beed fixed to onclick = ""data_types(16, 32, 'Seat')""
