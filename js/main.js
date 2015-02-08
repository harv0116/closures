document.addEventListener("DOMContentLoaded", function(){
  //PART A
  //Build 6 paragraphs with filler text inside #main. When you click on the paragraph
  //the index number of the paragraph becomes the innerHTML. Eg:  1, 2, 3, 4, 5, 6
  //Use the numbers 1  - 6, not 0 - 5
 	(function clickPara ( ){ 
  		for(var p=1; p < 7; p++){   
			var para = document.createElement("p");	
    		para.innerHTML = "Whatever banh mi messenger bag vinyl american apparel readymade, VHS scenester lo-fi vegan single-origin coffee 8-bit put a bird on it. ";
    		$("#main").append(para); 
    		para.addEventListener("click", (function(innerPVariable){
      			return function( ){	
					this.innerHTML = innerPVariable;		
      			}	  
    		})(p) );
  		}
	})();

  //PART B 
  //after the user clicks on the heading inside #second, start adding list items to the
  //unordered list #theList. Use a for loop and a setTimeout. The delay for the first list item to appear
  //is one second, two second delay for the second one, three second delay for the third and so on.
  //Add a total of five list items to the ul.
	(function clickTwo ( ){	
		var h2 = document.querySelectorAll("h2")[1];

		for (var l=1; l < 6; l++) {		
			h2.addEventListener("click", (function(liVariable) {
				return function () {
					setTimeout(function() {
							var li = document.createElement("li");
							li.innerHTML = 'List Item # ' + liVariable;
							$("#theList").append(li);
					}, (1000 * liVariable));
				}
			})( l ) );
		}
	})();
 
});