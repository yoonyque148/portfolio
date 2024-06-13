$(document).ready(function(){
    $('.gallery_big').css('background','url(./images/content1/img1_big.jpg)'); 
    $('.gallery_big').css('background-size','1000px 700px');
    $('.gallery_big').hide().fadeIn('fast');
    $('.gallery li:eq(0) a').children().css('filter','brightness(100%)');
  

    $('.gallery li a').click(function(e){
        e.preventDefault();
        var ind = $(this).index('.gallery li a');  
        // console.log(ind);// 0 1 2 3 

        $('.gallery_big').css('background','url(./images/content1/img'+(ind+1)+'_big.jpg)');  //클릭한 버튼의 해당 index 번호에 맞는 배경이미지를 가져오렴
        $('.gallery_big').css('background-size','1000px 700px');
        $('.gallery_big').hide().fadeIn('fast');   //페이드 효과

        $('.gallery li a').children().css('filter','brightness(50%)');
        $(this).children().css('filter','brightness(100%)');
        
    });
});

    var cnt=0;  // 0 1 2 3  
    var total=7;  //이미지의 총개수 7

    $('.gallery_big').fadeIn('fast'); //첫번째 이미지 보여라

      function change(){
         $('.gallery_big').css('background','url(./images/content1/img'+(cnt+1)+'_big.jpg)');
         $('.gallery_big').hide().fadeIn('fast');
      }

    $('.img_button .next').click(function(e){
        e.preventDefault();
        cnt++;  // 0 1 2 3  0 1 2 3  0 1 2 3
        if(cnt==total){
        cnt=0;
        }
        change();
        
        $('.gallery_big').css('background','url(./images/content1/img'+(cnt+1)+'_big.jpg)'); 
        $('.gallery_big').hide().fadeIn('fast');

        $('.gallery li a').children().css('filter','brightness(50%)');
        $('.gallery li a:eq('+cnt+')').children().css('filter','brightness(100%)');
        
        
    });

    $('.img_button .prev').click(function(e){
        e.preventDefault();
        cnt--;  // 3 2 1 0   3 2 1 0   3 2 1 0
        if(cnt==-1){
        cnt=total-1;
        }
        change();
        $('.gallery_big').css('background','url(./images/content1/img'+(cnt+1)+'_big.jpg)');
        $('.gallery_big').hide().fadeIn('fast');
        
        $('.gallery li a').children().css('filter','brightness(50%)');
        $('.gallery li a:eq('+cnt+')').children().css('filter','brightness(100%)');
    });



$(document).ready(function(){
    $('.gallery2_big').css('background','url(./images/content1/img11_big.jpg)'); 
    $('.gallery2_big').css('background-size','1000px 700px');
    $('.gallery2_big').hide().fadeIn('fast');
    $('.gallery2 li:eq(0) a').children().css('filter','brightness(100%)');
  

    $('.gallery2 li a').click(function(e){
        e.preventDefault();
        var ind = $(this).index('.gallery2 li a');  
        // console.log(ind);// 0 1 2 3 

        $('.gallery2_big').css('background','url(./images/content1/img'+(ind+11)+'_big.jpg)');  //클릭한 버튼의 해당 index 번호에 맞는 배경이미지를 가져오렴
        $('.gallery2_big').css('background-size','1000px 700px');
        $('.gallery2_big').hide().fadeIn('fast');   //페이드 효과

        $('.gallery2 li a').children().css('filter','brightness(50%)');
        $(this).children().css('filter','brightness(100%)');
        
    });
});


    var cnt=0;  // 0 1 2 3  
    var total=7;  //이미지의 총개수 7

    $('.gallery2_big').fadeIn('fast'); //첫번째 이미지 보여라

    function change(){
        $('.gallery2_big').css('background','url(./images/content1/img'+(cnt+1)+'_big.jpg)');
        $('.gallery2_big').hide().fadeIn('fast');
    }

    $('.img_button2 .next').click(function(e){
        e.preventDefault();
        cnt++;  // 0 1 2 3  0 1 2 3  0 1 2 3
        if(cnt==total){
        cnt=0;
        }
        change();
        $('.gallery2_big').css('background','url(./images/content1/img'+(cnt+11)+'_big.jpg)');
        $('.gallery2 li a').children().css('filter','brightness(50%)');
        $('.gallery2 li a:eq('+cnt+')').children().css('filter','brightness(100%)');
    });

    $('.img_button2 .prev').click(function(e){
        e.preventDefault();
        cnt--;  // 3 2 1 0   3 2 1 0   3 2 1 0
        if(cnt==-1){
        cnt=total-1;
        }
        change();
        $('.gallery2_big').css('background','url(./images/content1/img'+(cnt+11)+'_big.jpg)');
        $('.gallery2 li a').children().css('filter','brightness(50%)');
        $('.gallery2 li a:eq('+cnt+')').children().css('filter','brightness(100%)');
    });