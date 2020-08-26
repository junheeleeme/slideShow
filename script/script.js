setInterval(fnSlide, 3000);

function fnSlide(){
$("#slideShuttle").animate({"margin-left" : "-1000px"}, 1000, function(){

   $(this).css({"margin-left" : "0px"});
    $("#slideShuttle>a:first").insertAfter("#slideShuttle>a:last")



});
}

setInterval(fnshuttle2, 1500);

function fnshuttle2(){
    $("#slideShuttle2").animate({"margin-left" : "-1000px"}, 1000, function(){

    $(this).css({"margin-left": "0"});
  $("#slideShuttle2>a:first").insertAfter("#slideShuttle2>a:last");

})
}
