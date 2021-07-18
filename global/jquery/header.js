$(document).ready(function(){

    var sidevarInOut = 1;
    $(".hamburger").click(function(){
        if(sidevarInOut == 1){
            $(".Sidebar").css({'right':'0'});
            sidevarInOut = 0;
        }else {
            $(".Sidebar").css({'right':'-250px'});
            sidevarInOut = 1;
        }
    });   
    $(".SideBarOut_btn").click(function(){
        $(".Sidebar").css({'right':'-250px'});
    });
});
