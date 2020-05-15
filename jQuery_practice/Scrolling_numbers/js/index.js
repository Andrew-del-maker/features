var first_num = 4;
var second_num = 0;

function timer(){ 
    
    if (second_num <= 0){
        second_num = 10;
        first_num = first_num - 1;  
        if (first_num >= 0)
            $("#counter #first_num").animate({top: "50px", opacity: 0.0}, 100)
                .animate({top: "-50px"}, 200, function(){$(this).html(first_num);})
                .animate({top: "0px", opacity: 1}, 100)
                .animate({top: "0px"} , 200);
    } 
        
    if (first_num <= -1){
        second_num = 0;
        first_num = first_num + 1;
    }
        
    if (first_num == 0 && second_num == 0){
        
    }
        
    else{
        second_num = second_num - 1;
        $("#counter #second_num").animate({top: "50px", opacity: 0.0}, 100)
        .animate({top: "-50px"}, 200, function(){$(this).html(second_num);})
        .animate({top: "0px", opacity: 1}, 100)
        .animate({top: "0px"} , 200);           
        setTimeout("timer()", 1000);
    }
    
}
$(document).ready(function() {
    $("#counter #first_num").html(first_num);
    $("#counter #second_num").html(second_num);
    timer();
});