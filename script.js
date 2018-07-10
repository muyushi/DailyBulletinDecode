$("document").ready(function(){
    $("button").click(function(){
        var content = $("#content").val();
        decode(content);
    });
});


function decode(content){
    //var alphabet = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];
    var decoded="";
    for(var i = 0;i < content.length; i++){
        var res = content.charCodeAt(i);
       
        if((res > 97 && res <= 122)||(res > 65 && res <= 90)){
            res = res -1;
        }
        else if(res == 97){
            alert("test1");
            res = res + 25;
        }else if(res == 65){
            res = res + 25;
        }
        else{}
        var destiny = String.fromCharCode(res);
        decoded += destiny;
      
    }
   
    $("#decoded").text(decoded);

}

$(".body-copy").attr("class","body-copy");
var loop = $(".body-copy p").length;
for(var j = 1; j <= loop+1; j++){
    
    var decoded = "";
    for(var i = 0;i < $(".body-copy p:nth-child(" + j + ")").text().length; i++){
        var res = $(".body-copy p:nth-child(" + j + ")").text().charCodeAt(i);
        if((res > 97 && res <= 122)||(res > 65 && res <= 90)){
            
            res = res -1;
        }
        else if(res == 97){
            res = res + 25;
        }else if(res == 65){
            res = res + 25;
        }
        else{}
        var destiny = String.fromCharCode(res);
        decoded += destiny;
      
    }
    $(".body-copy p:nth-child("+j+")").text(decoded);

}

