// JavaScript Document

$(document).ready(function(){
    // var cnt=3;  //탭메뉴 개수 ***
    $('.tabmenu .contlist:eq(0)').show(); // 첫번째 탭 내용만 열어라
    $('.tabmenu .tab1').css('background','#8E684C').css('color','#fff'); 
    
    
    //첫번째 탭메뉴 활성화
               //자바스크립트의 상대 경로의 기준은 => 스크립트 파일을 불러들인 html파일이 저장된 경로 기준***
    /*
    $('.tabmenu .tab').each(function (index) {  // index=0 1 2
      $(this).click(function(e){  //각각의 탭메뉴를 클릭하면... 
          e.preventDefault();   // <a> href="#" 값을 강제로 막는다 

          $(".tabmenu .contlist").hide(); //모든 탭내용을 안보이게...
          //$(".tabmenu .contlist:eq("+index+")").show(); //클릭한 해당 탭내용만 보여라
          $(".tabmenu .contlist:eq("+index+")").fadeIn('slow');
          $('.tab').css('background','red').css('color','#fff'); //모든 탭메뉴를 비활성화
          $(this).css('background','green').css('color','#333'); // 클릭한 해당 탭메뉴만 활성화

     }); 
    });
    */

   

    $('.tabmenu .tab').click(function(e){
      e.preventDefault();   // <a> href="#" 값을 강제로 막는다  
      
      var ind = $(this).index('.tabmenu .tab');  // 클릭시 해당 index를 뽑아준다
      //console.log(ind);

      $(".tabmenu .contlist").hide();    //모든 탭내용을 안보이게...
      $(".tabmenu .contlist:eq("+ind+")").show();   //클릭한 해당 탭내용만 보여라
      
      $('.tab').css('background','none').css('color','#777');   //모든 탭메뉴를 비활성화
      $(this).css('background','#8E684C').css('color','#fff').css('font-weight','500');   // 클릭한 해당 탭메뉴만 활성화
   

    });
    
  });

 
    
  // $('.tabmenu .tab').hover(
  //   function(){
  //     $(".tab:eq("+ind+")").css('background','#FFF8F2').css('color','#8E684C')
  //   },
  //   function(){
  //     $(".tab:eq("+ind+")").css('background','red').css('color','#fff')
  //   }
  // ); 
    // $('선택자').hover(function(){ // 마우스엔터 시 처리코드};, function(){  //마우스 리브시 처리 코드});

    // $(selector).hover(
    //   function() {
    //     // 마우스가 요소 위로 올라갔을 때 실행할 코드
    //   },
    //   function() {
    //     // 마우스가 요소를 떠날 때 실행할 코드
    //   }
    // );