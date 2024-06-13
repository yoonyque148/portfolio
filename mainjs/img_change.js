$(document).ready(function(){
    $('.comp_img').css('background','url(./mainimages/company_b1.jpg)'); 
    $('.comp_img').css('background-size','795px 550px');
    $('.comp_img').hide().fadeIn('fast');
    $('.company_img li:eq(0) a').css('border','3px solid rgba(255,0,0,1)').children().css('filter','grayscale(100%)');

    $('.gallery li a').click(function(e){
        e.preventDefault();
        var ind = $(this).index('.gallery li a');  
        // console.log(ind);// 0 1 2 3 

        $('.big').css('background','url(./images/big'+(ind+1)+'.jpg)');  //클릭한 버튼의 해당 index 번호에 맞는 배경이미지를 가져오렴
        $('.big').css('background-size','800px 533px');
        $('.big').hide().fadeIn('fast');   //페이드 효과

        $('.gallery li a').css('border','3px solid rgba(255,0,0,0)').children().css('filter','grayscale(0)');
        $(this).css('border','3px solid rgba(255,0,0,1)').children().css('filter','grayscale(100%)');
        
    });
});
