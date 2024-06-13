// JavaScript Document

$(document).ready(function() {

    var timeonoff;   //타이머 처리  홍길동 정보
    var imageCount=$('.gallery ul li').size();   //이미지 총개수
    var cnt=1;   //이미지 순서 1 2 3 4 5 1 2 3 4 5....(주인공!!=>현재 이미지 순서)
    var onoff=true; // true=>타이머 동작중 , false=>동작하지 않을때
    
    $('.btn1').css('background','#fff'); //첫번째 span 버튼 불켜
    $('.btn1').css('width','50px'); // 버튼의 너비 증가 10->50px
    
    $('.gallery .link1').fadeIn('fast'); //첫번째 이미지 보인다..
    $('.gallery .link1 span').css('left',300).css('opacity',0).delay(500).animate({left:400, opacity:1},'slow');
     //span이 2개이상일경우 애니메이션을 추가해주면 된다
 
    function moveg(){
      if(cnt==imageCount+1)cnt=1;
      if(cnt==imageCount)cnt=0;  //카운트 초기화 - nextback btn을 위해 넣음
      
      cnt++;  //카운트 1씩 증가.. 5가되면 다시 초기화 0  1 2 3 4 5 1 2 3 4 5..
     
    //  for(var i=1;i<=imageCount;i++){
    //         $('.gallery .link'+i).hide(); //모든 이미지를 보이지 않게.
    //  }  쌩스크립트일때는 for문을 사용해야한다
    
    $('.gallery li').hide(); //모든 이미지 안보인다.
     $('.gallery .link'+cnt).fadeIn('normal'); //자신만 이미지가 보인다..
	 		                    
    //  for(var i=1;i<=imageCount;i++){
    //       $('.btn'+i).css('background','#00f'); //버튼불다꺼!!
    //      $('.btn'+i).css('width','16'); // 버튼 원래의 너비
    //   } 제이쿼리가 아닌 쌩스크립트일때는 for문을 사용해야한다2
      
      $('.mbutton').css('border','1px solid #fff'); //버튼불다꺼!!
      $('.mbutton').css('background','none'); //버튼 비활성화시 불꺼
      $('.mbutton').css('width','10px'); // 버튼 원래의 너비
      $('.btn'+cnt).css('background','#fff'); //자신만 불켜
      $('.btn'+cnt).css('width','50px');    

      //이미지+텍스트 초기화 - 원래위치로 ㄱㄱ
      $('.gallery li span').css('left',300).css('opacity',0); 
      $('.gallery .link'+cnt).find('span').delay(500).animate({left:400, opacity:1},'slow'); 
       if(cnt==imageCount)cnt=0;  //카운트의 초기화 0
     }
     
    timeonoff= setInterval( moveg , 4000); // 타이머를 동작 1~5이미지를 순서대로 자동 처리
      //var 변수 = setInterval( function(){처리코드} , 4000);  //홍길동의 정보를 담아놓는다
      //clearInterval(변수); -> 살인마/사이코패스/살인청부업자


   $('.mbutton').click(function(event){  //각각의 버튼 클릭시  //이벤트담기
	     var $target=$(event.target); //클릭한 버튼 $target == $(this) //이벤트받은놈 가리키기 / 제이쿼리 변수는 앞에 '$'를 넣을수 있다. 'target'이라는 속성이 이미 존재하기 때문에 $입력해주면 변수로 인식하게 된다. '$'=제이쿼리라는 의미임!!!
       clearInterval(timeonoff); //타이머 중지 //클릭한 순간에 타이머'4s' 중지
	 
	    //  for(var i=1;i<=imageCount;i++){
	    //      $('.gallery .link'+i).hide(); //모든 이미지 안보인다.
      //    } 
	    $('.gallery li').fadeOut('normal'); //모든 이미지 안보인다.

		  if($target.is('.btn1')){  //첫번째 버튼 클릭??
				 cnt=1;  //클릭한 해당 카운트를 담아놓는다
		  }else if($target.is('.btn2')){  //두번째 버튼 클릭??
				 cnt=2; 
		  }else if($target.is('.btn3')){ 
				 cnt=3; 
		  }else if($target.is('.btn4')){
				 cnt=4; 
		  }else if($target.is('.btn5')){
				 cnt=5; 
		  } 

		  $('.gallery .link'+cnt).fadeIn('normal');  //클릭한 버튼(카운트를 담은) 자기 자신만 이미지가 보인다
		  
		  // for(var i=1;i<=imageCount;i++){
			//   $('.btn'+i).css('background','#00f'); //버튼 모두불꺼
      //   $('.btn'+i).css('width','16');
		  // }
      $('.mbutton').css('border','1px solid #fff'); //버튼 모두불꺼
      $('.mbutton').css('background','none'); //버튼 비활성화시 불꺼
      $('.mbutton').css('width','10px')
      $('.btn'+cnt).css('background','#fff');//자신 버튼만 불켜 
      $('.btn'+cnt).css('width','50px');
      
      $('.gallery li span').css('left',300).css('opacity',0);
      $('.gallery .link'+cnt).find('span').delay(500).animate({left:400, opacity:1},'slow');

      if(cnt==imageCount)cnt=0;  //카운트 초기화
     
      timeonoff= setInterval( moveg , 4000); //타이머의 부활!!! - 클릭으로 죽인 타이머를 다시 살리니까, 윗줄 -타이머 카운트를 초기화 시키기위한 코드이다
     
      if(onoff==false){ //중지상태냐?? -멈춘 상태에서 다시 클릭했을 시에 타이머가 돌아가게 해줘야해서 onoff 변수를 true로 적용시켜서 타이머를 부활시킨다.
            onoff=true; //동작~~
            $('.ps').html('<span class="hidden">stop</span><span class="material-symbols-rounded">stop_circle</span>');
      }
      
    });

  
    // 웹 접근성 부분 - 자동으로 재생되는것은 멈춤기능을 갖춰야 한다
	 //stop/play 버튼 클릭시 타이머 동작/중지
  $('.ps').click(function(){ 
     if(onoff==true){ // 타이머가 동작 중이냐??
	       clearInterval(timeonoff);   //살인마 고용 stop버튼 클릭시
		     $(this).html('<span class="hidden">stop</span><span class="material-symbols-rounded">play_circle</span>');
         //js파일에서는 경로의 기준이 html파일이 기준!!
         onoff=false;   
	   }else{  // false 타이머가 중지 상태냐??
		   timeonoff= setInterval( moveg , 4000); //play버튼 클릭시 - 타이머 부활!!
		   $(this).html('<span class="hidden">stop</span><span class="material-symbols-rounded">pause_circle</span>');
		   onoff=true; 
	   }
  });	

    //왼쪽/오른쪽 버튼 처리
    $('.visual .btn').click(function(){

      clearInterval(timeonoff); //살인마 - 방향키 클릭시 타이머 멈춰!

      if($(this).is('.btnRight')){ // 오른쪽 버튼 클릭
          if(cnt==imageCount)cnt=0;  //카운트가 마지막 번호(5)라면 초기화 0
          //if(cnt==imageCount+1)cnt=1;  
          cnt++; //카운트 1씩증가 12345 12345 ...
      }else if($(this).is('.btnLeft')){  //왼쪽 버튼 클릭
          if(cnt==1)cnt=imageCount+1;   // 1->6  최초..
          if(cnt==0)cnt=imageCount;    // 5->4로 가기위해 왼쪽버튼을 눌렀을 때 // 위에서 카운트 초기화를 시켰기 때문에(if(cnt==imageCount)cnt=0;  //카운트 초기화) 필요해진 if문이다
          cnt--; //카운트 감소 54321 54321 ...
      }



    
    // for(var i=1;i<=imageCount;i++){
    //     $('.gallery .link'+i).hide(); //모든 이미지를 보이지 않게.
    // }
    $('.gallery li').hide(); //모든 이미지를 보이지 않게.
    $('.gallery .link'+cnt).fadeIn('normal'); //자신만 이미지가 보인다..
                        
    $('.mbutton').css('border','1px solid #fff'); //버튼 모두불꺼
    $('.mbutton').css('background','none'); //버튼 비활성화시 불꺼
    $('.mbutton').css('width','10px');
    $('.btn'+cnt).css('background','#fff');//자신 버튼만 불켜 
    $('.btn'+cnt).css('width','50px');

    $('.gallery li span').css('left',300).css('opacity',0);
    $('.gallery .link'+cnt).find('span').delay(1000).animate({left:400, opacity:1},'slow');

    // if($(this).is('.btnRight')){
    //   if(cnt==imageCount)cnt=0;
    // }else if($(this).is('.btnLeft')){
    //   if(cnt==1)cnt=imageCount+1;
    // }

    timeonoff= setInterval( moveg , 4000); //타이머 부활

    if(onoff==false){  //중지된 상태였기때문에 true값을 다시 줘야함
      onoff=true;
      $('.ps').html('<span class="hidden">stop</span><span class="material-symbols-rounded">stop_circle</span>');
    }
  });


});




