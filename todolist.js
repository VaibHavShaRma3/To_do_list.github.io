// maintain a variable to store the color of the row added 
var cur=1;
var InString="";
// get the new TO DO 
$("input").on("keypress",function(e){
	if(e.which===13){
		InString=$(this).val();
    
	 $(this).val("");
		// add the option in the list 
	$("div#container").append('<div class="com x "><span class="glyphicon glyphicon-erase" aria-hidden="true"></span>' +InString+"</div>");	
	}
})


//check out 
$("div#container").on("click","div.com",function(){ 
	$(this).toggleClass("effect");
	// console.log("div.com");

})
//delete todo 
$("div#container").on("click","span.glyphicon-erase",function(e){ // we cannot use the the id since that id is removed not the span 
	// console.log("span");
	$(this).parent().fadeOut(1000,function(){
		$(this).remove(); // Here this refers to the div and not the span . $("this")== $("this").parent() 
		// console.log("done fade out ") // only after alert is done 
	});
	e.stopPropagation(); //  pehle jo bhi events span par hai vo call honge , since span is inside div.com fir jo bhi  events div par hai vo call honge , fir 
	// container fir body = This is called Bubbling . So to prevent any other event to be called which is called on parent elemnt we use stop Propogation 


})
// $("body").on("click",function(e){
// 		console.log("body");
// 		alert("ggju");
	


// })
// $("#container").on("click",function(e){
// 	console.log("container");
// })
