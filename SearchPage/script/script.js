$(document).ready(function(){
  $('.more_vert_horiz> img').click(function(){
    $(this).removeClass('more_on');
    $(this).siblings().addClass('more_on');

    if($(this).index() == 0){
      $('.contant_body').addClass('horizontal');
      $('.contant_body').removeClass('vertical');
    }
    else{
      $('.contant_body').addClass('vertical');
      $('.contant_body').removeClass('horizontal');
    }
    
  })
})