
$(document).ready(function() {

   var smh=$('.visual').height();  //비주얼 이미지의 높이를 리턴한다   900px
   var on_off=false;  //false(안오버)  true(오버)
   
    $('#headerArea').mouseenter(function(){
        // var scroll = $(window).scrollTop();
        $(this).css('background','#fff');
        $('.dropdownmenu li.menu a.depth1').css('color','#333'); 
        $('.dropdownmenu li.menu ul li a').css('color','#777'); 
        
        //헤더영역의 텍스트 색상과 로고이미지 경로 등을 교체
        on_off=true;
    });

    $('#headerArea').mouseleave(function(){
        var scroll = $(window).scrollTop();  //스크롤의 거리
        
        if(scroll<smh-50 ){
            $(this).css('background','rgba(255,255,255,.5)').css('box-shadow','none'); 
            $('.dropdownmenu li.menu a.depth1').css('color','#333'); //비주얼이전 영역에서 마우스리브 후
        }else{
            $(this).css('background','#fff'); 
            $('.dropdownmenu li.menu a.depth1').css('color','#333'); //비주얼이후 영역에서 마우스리브 후
        }
        on_off=false;    
    });

    $(window).on('scroll',function(){//스크롤의 거리가 발생하면
        var scroll = $(window).scrollTop();  
        //스크롤의 거리를 리턴하는 함수
    //    console.log(scroll);

        if(scroll>smh-100){//스크롤이 비주얼의 높이-header높이 까지 내리면
            $('#headerArea').css('background','#fff').css('box-shadow','1px 0 8px rgba(0, 0, 0, .4)');
            $('.dropdownmenu li.menu a.depth1').css('color','#333');
        }else{//스크롤 내리기 전 디폴트(마우스올리지않음)
            if(on_off==false){
                $('#headerArea').css('background','rgba(255,255,255,.5)').css('box-shadow','none');
                $('.dropdownmenu li.menu a.depth1').css('color','#333');
            }
        }; 
        
    });

  
    //2depth 열기/닫기
    $('ul.dropdownmenu').hover(
       function() { 
          $('ul.dropdownmenu li.menu ul').fadeIn(100,function(){$(this).stop();}); //모든 서브를 다 열어라
          $('#headerArea').animate({height:300},100).clearQueue();
        },function() {
          $('ul.dropdownmenu li.menu ul').hide(); //모든 서브를 다 닫아라
          $('#headerArea').animate({height:100},100).clearQueue();
    });

  
    
     //1depth 효과
    $('ul.dropdownmenu li.menu').hover(
       function() { 
            $('.depth1',this).css('color','#8E684C');
        },function() {
            $('.depth1',this).css('color','#333');
    });
     

    //  2depth 효과
    $('ul.dropdownmenu .menu ul li').hover(
        function() { 
             $('a',this).css('color','#8E684C').css('font-weight','600');
         },function() {
             $('a',this).css('color','#777').css('font-weight','');;
    });

     //tab 처리
     $('ul.dropdownmenu li.menu .depth1').on('focus', function () {        
        $('ul.dropdownmenu li.menu ul').slideDown('fast');
        $('#headerArea').animate({height:300},'fast').clearQueue();
     });

    $('ul.dropdownmenu li.m6 li:last').find('a').on('blur', function () {        
        $('ul.dropdownmenu li.menu ul').slideUp('fast');
        $('#headerArea').animate({height:100},'fast').clearQueue();
    });
});
