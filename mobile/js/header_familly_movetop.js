
$(document).ready(function() {
   	
	// $('.family .arrow').click(function(){
	// 	$('.family .aList').fadeIn('slow');			  
	// });

	// $('.family .aList').mouseleave(function(){
	// 	$(this).fadeOut('fast');			  
	// });
  
	// fadein = slidedown
	$('.family .arrow').toggle(function(){
		$('.family .aList').fadeIn('slow');
		$(this).children('span').html('<span class="material-symbols-outlined">expand_more</span>');	
		},function(){
	$('.family .aList').fadeOut('fast');	
		$(this).children('span').html('<span class="material-symbols-outlined">expand_less</span>');
		
	});

	//tab키 처리
	  $('.family .arrow').on('focus', function () {        
              $('.family .aList').fadeIn('slow');	
       });
       $('.family .aList li:last a').on('blur', function () {        
              $('.family .aList').fadeOut('fast');
       });
 
});



// move_top 버튼 script

$(window).on('scroll',function(){ //스크롤 값의 변화가 생기면
	var scroll = $(window).scrollTop(); //스크롤의 거리
   	// $('.text').text(scroll);
    // console.log(scroll);

	if(scroll>600){ //300이상의 거리가 발생되면
		$('.movetop').show();  //top보여라~~~~
	}else{
		$('.movetop').fadeOut('fast');//top안보여라~~~~
	}
});

$('.movetop').click(function(e){
   e.preventDefault();  //a태그엔 꼭 넣어줄것
	//상단으로 스르륵 이동합니다.
   $("html,body").stop().animate({"scrollTop":0},1000);   //해당위치로 스크롤탑 값을 부드럽게 이동시키는 코드
}); 




$(window).on('scroll',function(){//스크롤의 거리가 발생하면
    var smh=$('.visual').height();  //비주얼 이미지의 높이를 리턴한다   900px
    var on_off=false;  //false(안오버)  true(오버)
    var scroll = $(window).scrollTop();  
    //스크롤의 거리를 리턴하는 함수
//    console.log(scroll);

    if(scroll>smh-80){//스크롤이 비주얼의 높이-header높이 까지 내리면
        $('#headerArea').css('background','#fff').css('box-shadow','1px 0 8px rgba(0, 0, 0, .4)');
        $('.dropdownmenu li.menu a.depth1').css('color','#333');
    }else{//스크롤 내리기 전 디폴트(마우스올리지않음)
        if(on_off==false){
            $('#headerArea').css('background','rgba(255,255,255,.5)').css('box-shadow','none');
            $('.dropdownmenu li.menu a.depth1').css('color','#333');
        }
    }; 
    
});