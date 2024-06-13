
// var screenHeight = $(window).height();  //스크린의 높이

// 헤더 스크롤 처리
$(window).on('scroll',function(){//스크롤의 거리가 발생하면
    var smh=$('.videoBox').height();  //비디오 영역의 높이를 리턴한다
    var on_off=false;  //false(안오버)  true(오버)
    var scroll = $(window).scrollTop();  
    //스크롤의 거리를 리턴하는 함수
//    console.log(scroll);

    if(scroll>smh-50){//스크롤이 비주얼의 높이-header높이 까지 내리면
        $('#headerArea').css('background','rgba(0,0,0,.5)').css('backdrop-filter','blur(10px)');
    }else{//스크롤 내리기 전 디폴트(마우스올리지않음)
        if(on_off==false){
            $('#headerArea').css('background','transparent').css('backdrop-filter','none');
        }
    };
});


 
   //  네비높이 맞추기(페이지 로딩시 1회)
   var screenSize = $(window).width();
   var winh =  $(document).height();
 
   if( screenSize > 768){
     $("#gnb").height('auto');
   }else{
     $("#gnb").height(winh);
   }
   
   var current=0; // 0(해상도가 모바일), 1(소형 태블릿이상)
 
    $(window).resize(function(){ 
       var screenSize = $(window).width();  //가로 해상도
       if( screenSize > 768){  //소형 태블릿 이상이면
         $("#gnb").show();
         $("#gnb").height('auto');
             current=1; //소형 태블릿이상
       }
       if(current==1 && screenSize <= 768){
         $("#gnb").hide();
         $("#gnb").height(winh);
          current=0; //모바일
       }
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


     
// 모바일 - 메뉴 햄버거 버튼

$(document).ready(function() {

    var onoff = false; //false(메뉴열림) true(메뉴닫힘)
    $(".menuOpen").click(function(e){
       e.preventDefault();
       if(onoff == false){
         $("#gnb").slideDown('slow');
         $('#headerArea').addClass('mn_open');//메뉴모양변경
         onoff = true;
       }else{
         $("#gnb").slideUp('fast');
         $('#headerArea').removeClass('mn_open');
         onoff = false;
       }
    });
});