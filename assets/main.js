$(document).ready(function(){
   $('.double-images').slick({  
   	 	prevArrow:"<img class='a-left control-c prev slick-prev arrow arrow--left' src='assets/images/arrow--right.svg'>",
     	nextArrow:"<img class='a-right control-c next slick-next arrow arrow--right' src='assets/images/arrow--left.svg'>",
     	infinite: false,
     	responsive: [{
	    	breakpoint: 768,
	      	settings: "unslick" 
	    }]
  });
});
