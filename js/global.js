let accOpend = false;
let notiOpend = false;
function resetDropdowns(){
    notiOpend = false;
    accOpend = false;
    $(".notification-container").hide();
    $(".account-info-container").hide();
    $(".chat-container").hide();
}
resetDropdowns()


//Notification button click

$(".fa-bell").click(function(){
    if(notiOpend === false){
        resetDropdowns()
        $(".notification-container").slideDown("fast");
        notiOpend = true;
    }
    else{
        $(".notification-container").slideUp("fast");
        notiOpend = false;
    }
})
//Account Picture click

$(".account_pic img").click(function(){
    if(accOpend === false){
        resetDropdowns()
        $(".account-info-container").slideDown("fast");
        accOpend = true;
    }
    else{
        $(".account-info-container").slideUp("fast");
        accOpend = false;
    }
})

//Chat icon click
$(".fa-facebook-messenger").click(function(){
    $(".chat-container").slideDown("fast");
    chatPagesdetect();
})
$(".chat-header .close").click(function(){
    $(".chat-container").slideUp("fast");
})

function chatPagesdetect(){
    $(".chat-pagination").html("");
    let count = $(".chat-body").attr("data-detect")
    for(let i =0; i < count; i++){
        $(".chat-pagination").html($(".chat-pagination").html()+"<span></span>")
    }
}