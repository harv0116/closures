document.addEventListener("DOMContentLoaded", function(){
  //Use CLOSURES to solve these two problems
  (function clickPara ( ){ 
  for(var p=1; p < 7; p++){
    
	var para = document.createElement("p");
    para.innerHTML = "Whatever banh mi messenger bag vinyl american apparel readymade, VHS scenester lo-fi vegan single-origin coffee 8-bit put a bird on it. Mustache art party etsy yr salvia gentrify echo park beard wes anderson, readymade synth cred DIY irony. Freegan twee fap, mixtape synth whatever tumblr vinyl butcher. Before they sold out put a bird on it cardigan tattooed mixtape scenester. Twee DIY thundercats tumblr salvia sustainable. Marfa food truck seitan messenger bag quinoa master cleanse. Cosby sweater irony helvetica cardigan cliche leggings.";
    $("#main").append(para); 
    para.addEventListener("click", (function(innerPVariable){
      return function( ){
      	this.innerHTML = innerPVariable;
      }	  
    })(p) );
  }
})();
  //PART A
  //Build 6 paragraphs with filler text inside #main. When you click on the paragraph
  //the index number of the paragraph becomes the innerHTML. Eg:  1, 2, 3, 4, 5, 6
  //Use the numbers 1  - 6, not 0 - 5
  
  
  //PART B 
  //after the user clicks on the heading inside #second, start adding list items to the
  //unordered list #theList. Use a for loop and a setTimeout. The delay for the first list item to appear
  //is one second, two second delay for the second one, three second delay for the third and so on.
  //Add a total of five list items to the ul.
  
});