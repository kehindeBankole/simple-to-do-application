$(function(){
        $("#button").click(function(){
            var input = $("#txt").val();
           
            if(input !== ""){
                var elem = $("<li></li>").text(input);
                //  $(elem).append();

               var added =  $("#list").append(elem)
                $("#txt").val("");
            }
             

        })
    })
var enter = 13;
$(function(){
$("html").keydown(function(event){
    if(event.which == enter){
       
            var input = $("#txt").val();
           
            if(input !== ""){
                var elem = $("<li></li>").text(input);
                //  $(elem).append();

               var added =  $("#list").append(elem)
                $("#txt").val("");
            }
             

        
    }
})
})