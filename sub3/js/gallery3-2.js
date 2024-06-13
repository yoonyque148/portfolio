// JavaScript Document
$(document).ready(function() {
    var position=0;  //최초위치
    //var movesize=1200; //이미지 하나의 너비
    var movesize=$('.galleryImg ul li').width();
    //console.log(movesize);
    var timeonoff;
   
    $('.galleryImg ul').after($('.galleryImg ul').clone());
 
    function moveG() {
        position-=movesize;  // 1200씩 감소
        $('.galleryImg').animate({left:position}, 'fast',
            function(){							
            if(position<=-13200){
                $('.galleryImg').css('left',-1200);
                position=-1200;
            }
        }).clearQueue();
    }

   // timeonoff= setInterval(moveG, 3000);
  
    
        //슬라이드 갤러리를 한번 복제
  var lastClickTime = 0;      
 
  $('.btn').click(function(e){
     e.preventDefault();

     var currentTime = new Date().getTime();
    console.log(currentTime);


     var timeDiff = currentTime - lastClickTime;  // 오차 = 현재클릭한시간 - 전에클릭한 시간
     // 일정 시간(예: 500ms) 이내에 다시 클릭한 경우 이벤트를 무시
     if (timeDiff < 500) {
         e.preventDefault();
         return false; // 계산을 종료해라! 
     }

     lastClickTime = currentTime;

    // clearInterval(timeonoff);
     
     if($(this).is('.prev')){  //이전버튼 클릭
         
          position-=movesize;  // 1200씩 감소
         $('.galleryImg').animate({left:position}, 'fast',function(){
            if(position<=-13200){
                $('.galleryImg').css('left',-1200);
                position=-1200;
            }
         }).clearQueue();  

     }else if($(this).is('.next')){  //다음버튼 클릭
           if(position>=0){
                $('.galleryImg').css('left',-12000);
                position=-12000;
            }
 
            position+=movesize; // 1200씩 증가
            $('.galleryImg').animate({left:position}, 'fast',
                function(){							
                    if(position>=0){
                        $('.galleryImg').css('left',-12000);
                        position=-12000;
                    }
                }).clearQueue();
  
      }
   });
});

