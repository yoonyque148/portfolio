// JavaScript Document
$(document).ready(function () {
	var list = $('.ethical .list'); //모든 li들..(질문답변들...)
		
  $('.ethical .list .trigger').click(function(e){   //각각의 질문을 클릭하면
      e.preventDefault();   //<a href="#"> 태그 링크 처리

	var mylist = $(this).parents('.list');  //클릭한 해당 메뉴에 li(리스트) 
	
	if(mylist.hasClass('hide')){   //클릭한 해당 리스트가 닫혀있냐??
	    list.find('.text').slideUp(300); // 모든 리스트의 답변을 닫아라
        list.removeClass('show').addClass('hide'); //모든 리스트의 클래스 hide로 바꾼다
		list.find('.btn').html('<span class="material-symbols-outlined">expand_more</span>');
	    
		mylist.removeClass('hide').addClass('show');  // 클래스를 show로 바꾼다
	    mylist.find('.text').slideDown(600);  //해당 리스트의 답변을 열어라~~~
		mylist.find('.btn').html('<span class="material-symbols-outlined">expand_less</span>');

	 } else {  //클릭한 해당 리스트가 열려있냐?? (show)
	   mylist.removeClass('show').addClass('hide');  //클래스 hide로 바꾼다
	   mylist.find('.text').slideUp(100);   //해당 리스트의 답변을 닫아라~~~
	   mylist.find('.btn').html('<span class="material-symbols-outlined">expand_more</span>');
	}  
  });      


//   //모두여닫기
//   $('.all').toggle(function(e){
// 	    e.preventDefault(); 
// 		list.find('.text').slideDown(100);
// 		list.removeClass('hide').addClass('show');
// 		//$(this).text('모두닫기');
// 		$(this).html('<span class="hidden">모두닫기</span><i class="fas fa-chevron-circle-up"></i>');
// 	},function(e){ 
// 		e.preventDefault();
// 		list.find('.text').slideUp(100);
// 		list.removeClass('show').addClass('hide');
// 		//$(this).text('모두열기');
// 		$(this).html('<span class="hidden">모두열기</span><i class="fas fa-chevron-circle-down"></i>');
// 	});

}); 

