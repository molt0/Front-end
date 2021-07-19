$(document).ready(function() {
    $('.wrap').on( 'keyup', 'textarea', function (e){
      $(this).css('height', 'auto' );
      $(this).height( this.scrollHeight );
    });
    $('.wrap').find( 'textarea' ).keyup();
    
    var edit = 1; 
    $(".edit_btn").click(function(){
        if (edit == 1) {
            document.getElementById('lyrics').readOnly = false;
            $("textarea").css({'border':'1px solid #96d55249'});
            edit = 0;
        }else {
            document.getElementById('lyrics').readOnly = true;
            $("textarea").css({'border':'none'});
            edit = 1;
        }
        
    });
});