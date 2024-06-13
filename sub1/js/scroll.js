$(document).ready(function () {
        
    $('.historyNav li:eq(0)').find('a').addClass('spy');
    //첫번째 서브메뉴 활성화
    
    // $('.history').find('.his2020s','.his2010s',
    // '.his2000s','.his1990s','.his1980s','.his1970s').removeClass('boxMove');
    
    $('.history').find('.his2020s').addClass('boxMove')

    var smh= $('.historyNav').offset().top;  //메인 비주얼의 높이
    var h1= $('.his2010s').offset().top-300;
    var h2= $('.his2000s').offset().top-300;
    var h3= $('.his1990s').offset().top-300;
    var h4= $('.his1980s').offset().top-300;
    var h5= $('.his1970s').offset().top-300;
    
    //sticky
    
    $(window).on('scroll',function(){
        var scroll = $(window).scrollTop();
        //스크롤top의 좌표를 담는다
        // $('.text').text(scroll);
        
        //sticky menu 처리
        if(scroll>smh-50){ 
            $('.historyNav').addClass('navOn'); //아까의 가상클래스를 달아주기
            $('header').hide(); //헤더가 사라져라~
        }else{//다시 올라가면 
            $('.historyNav').removeClass('navOn');
            $('header').show();//헤더를 다시 보여주고
        }
        //여기까지가 스티키 

    
    //spy
    $('.historyNav li').find('a').removeClass('spy');
    //모든 서브메뉴 비활성화
    
        //스크롤의 거리의 범위를 처리
         if(scroll>=0 && scroll<h1){ //첫번째 섭메뉴 어디서부터 활성화 시킬지 숫자를 적어줌
            $('.historyNav li:eq(0)').find('a').addClass('spy');
            //첫번째 서브메뉴 활성화
            $('.his2020s').addClass('boxMove');
            //첫번째 내용 콘텐츠 애니메이션
        }else if(scroll>=h1 && scroll<h2){
            $('.historyNav li:eq(1)').find('a').addClass('spy');
            //두번째 서브메뉴 활성화
            $('.his2010s').addClass('boxMove');
        }else if(scroll>=h2 && scroll<h3){
            $('.historyNav li:eq(2)').find('a').addClass('spy');
            //세번째 서브메뉴 활성화
            $('.his2000s').addClass('boxMove');
        }else if(scroll>=h3 && scroll<h4){
            $('.historyNav li:eq(3)').find('a').addClass('spy');
            //세번째 서브메뉴 활성화
            $('.his1990s').addClass('boxMove');
        }else if(scroll>=h4 && scroll<h5){
            $('.historyNav li:eq(4)').find('a').addClass('spy');
            //다섯번째 서브메뉴 활성화
            $('.his1980s').addClass('boxMove');
        }else if(scroll>=h5){
            $('.historyNav li:eq(5)').find('a').addClass('spy');
            //여섯번째 서브메뉴 활성화
            $('.his1970s').addClass('boxMove');
        }
        
        });

        $('.historyNav ul li a').click(function(e){ //슬라이드메뉴에 있는 a를 클릭하면 
            e.preventDefault(); //href="#" 속성을 막아주는 메소드
    
            var value=0; //이동할 스크롤의 거리
    
            if($(this).hasClass('link1')){   //첫번째 메뉴를 클릭했냐?   if($(this).is('#link1')){
                value= $('.his2020s').offset().top-50;  // 해당 콘텐츠의 상단의 거리~~ //off변경 set 이 컨텐츠 위에 거리를 알아서 계산해주는게 .offset().top을 기억해두렴!
            }else if($(this).hasClass('link2')){
                value= $('.his2010s').offset().top-50;
            }else if($(this).hasClass('link3')){
                value= $('.his2000s').offset().top-50; 
            }else if($(this).hasClass('link4')){
                value= $('.his1990s').offset().top-50; 
            }else if($(this).hasClass('link5')){
                value= $('.his1980s').offset().top-50; 
            }else if($(this).hasClass('link6')){
                value= $('.his1970s').offset().top-50; 
            }
    
            // value-=100 바로 위 말고 조금 위로 보이게 하고 싶으면 value-=100 이렇게 앞에 -붙이면 됨
    
            $("html,body").stop().animate({"scrollTop":value},1000); //스크롤의 거리를 계산해서 알아서 움직여라잇 스크롤 탑에value넣어주면 이동한다~
        });

        
        

});