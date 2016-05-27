// When clicked, the main headers display a paragraph below them.

//BELOW:create a variable named clk.  Its value will be the class called "BigHeadings", from the document.
var clk = document.querySelector('.BigHeadings');
var para = document.querySelector('.BigHeadingParagraphs');

clk.addEventListener('click', function () { //for this new clk variable, "listen" for whenever a user clicks
  display( para.value);//run a function that displays value of txt variable)
});
// WORK ON LINE 8






// I think I'll need a for loop to "scan through to detect when someone has clicked
// var bgHdrClk=document.getElementsByClassName('BigHeadings');
// for (var 1=0;1<bigHeadings.length;i++){
//
// }
