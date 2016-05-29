// // When clicked, the main headers display a paragraph below them.
// MY CODE ATTEMPTS BELOW
// //BELOW:create a variable named clk.  Its value will be the class called "BigHeadings", from the document.
// var clk = document.getElementsByClassName('BigHeadings');
// var para = document.querySelector('HiddenParagraphs');
//
// // for (var 1=0;1<bigHeadings.length;i++){
//
//
// clk.addEventListener('click', function() { //for this new clk variable, "listen" for whenever a user clicks
//
//         };

// THE CODE FROM JUSTIN'S REDDIT MENTOR:

var accordItems = document.getElementsByClassName("AccordionItems");

for (var i = 0; i < accordItems.length; ++i) {
  accordItems[i].addEventListener("click", function(){

    var ParagraphSmallHeaders = this.nextElementSibling;
    var currentStyle = window.getComputedStyle(ParagraphSmallHeaders);
    //accordion show/hide controls
    if(currentStyle.display === 'none'){ //content is hidden
      ParagraphSmallHeaders.style.display = 'initial';//content is shown
    } else {
      ParagraphSmallHeaders.style.display = 'none';
      //content is hidden
    };
 });
}

var x = "Is this working?";
console.log(x);
