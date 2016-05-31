
//                 MY CODE ATTEMPTS BELOW
// create a variable named clk.  Its value will be the class called
// "BigHeadings", from the document.
// var clk = document.getElementsByClassName('BigHeadings');
// create a variable named para.  Its value will be the class called
// "HiddenParagraphs", from the document.
// var para = document.querySelector('HiddenParagraphs');
//
//  for (var 1=0;1<bigHeadings.length;i++){
//
// clk.addEventListener('click', function() {
//for this new clk variable, "listen" for whenever a user clicks
//         };

// THE CODE THAT I ENDED UP USING BELOW IS FROM Travis' REDDIT MENTOR http://codepen.io/birjolaxew/pen/ZOEBGv?editors=1010:

// Create a variable named accordItems. Set its value to be any element with
// the class name of AccordionItems
var accordItems = document.getElementsByClassName("AccordionItems");
// a for loop below- Start looking through the document for this variable "accordItems".
//  whenever one is clicked on, run the following function:
for (var i = 0; i < accordItems.length; ++i) {
  accordItems[i].addEventListener("click", function(){
// We'll need two more variables for this function. The value of the variable
// "ParagraphSmallHeaders" is assigned the value of the next element's class in
//the document directly below AccordionItems, which is also named "ParagraphSmallHeaders".
// The value of the variable "currentStyle" is assigned its value by looking in the
// currently open the window, and finding the CSS style for the class
// "ParagraphSmallHeaders"

    var ParagraphSmallHeaders = this.nextElementSibling;
    var currentStyle = window.getComputedStyle(ParagraphSmallHeaders);
  // If the display is set to none in CSS, run this function.
    if(currentStyle.display === 'none'){
// for the variable ParagraphSmallHeaders, set the display to
//  "initial" in CSS.  (which makes it visible - why?? Why use the word initial??)
      ParagraphSmallHeaders.style.display = 'initial';
    }
    // otherwise, if the display is NOT set to none in CSS, then set it to none
    // now, which makes it invisible.
    else {
      ParagraphSmallHeaders.style.display = 'none';

    };
 });
}

var x = "Is this working?";
console.log(x);
