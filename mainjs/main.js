// 회사소개 img click

$(document).ready(function(){
    $('.comp_img').css('background','url(./mainimages/company_b1.jpg)'); 
    $('.comp_img').css('background-size','795px 550px');
    $('.comp_img').hide().fadeIn('slow');
    $('.company_img li:eq(0) a').css('filter','grayscale(0)').children().css('filter','grayscale(100%)');

    $('.company_img li a').click(function(e){
        e.preventDefault();
        var ind = $(this).index('.company_img li a');  
        // console.log(ind);// 0 1 2 3 

        $('.comp_img').css('background','url(./mainimages/company_b'+(ind+1)+'.jpg');  //클릭한 버튼의 해당 index 번호에 맞는 배경이미지를 가져오렴
        $('.comp_img').css('background-size','795px 550px');
        $('.comp_img').hide().fadeIn('slow');   //페이드 효과

        $('.company_img li a').children().css('filter','grayscale(0)');
        $(this).children().css('filter','grayscale(100%)');
        
    });
});




// 사업영역 img hover

$(document).ready(function(){


    var business = [
        {
            imgsrc:'business1.jpg',
            title:'호텔 사업', 
            text:'한국 전통이라는 지붕 위에 모더니즘적 디자인 요소를 가미하여,삶에 여유와 품격을 한층 높여주는 프리미엄 라이프스타일 공간으로 변화를 거듭해 나가고 있습니다.',
            link:'./sub2/sub2_1.html',
        },
        {
            imgsrc:'business2.jpg',
            title:'TR 사업', 
            text:'국내∙외 고객에게 최고의 쇼핑 경험과 차별화된 서비스를 효율적인 운영 노하우를 바탕으로 글로벌 시장의 면세유통 기업으로 성장하고 있습니다.',
            link:'./sub2/sub2_2.html',
        },
        {
            imgsrc:'business3.jpg',
            title:'SHP 사업', 
            text:'피트니스 클럽 운영 노하우와 최신 IT기술을 바탕으로 온·오프라인이 조화로운 스포츠 레저사업과 헬스케어 서비스 사업에 진출하여 디지털 신기술을 접목한 혁신을 이끌고 있습니다.', 
            link:'./sub2/sub2_3.html',
        },
        {
            imgsrc:'business4.jpg',
            title:'SBTM 사업', 
            text:'종합 여행관리 개념을 도입하여 항공, 호텔, 차량, F&B, 여행컨설팅 등의 기업 출장 서비스를 대행하는 사업으로 여행 서비스 시장 개척에 박차를 가하고 있습니다.', 
            link:'./sub2/sub2_4.html',
        },
      ];
  
  
    $('.business_text img').attr('src','./mainimages/'+business[0].imgsrc);
    $('.business_text dl dt').html(business[0].title);
    $('.business_text dd:eq(0)').html(business[0].text);
    $('.business_text dd:eq(1) a').attr('href','/sub2/sub2_'+business[0].link);
    // $('.business_text ul li:eq(0) a').css('filter','grayscale(0)');  //클릭한 버튼만 컬러로 활성화

    $('.business_menu ul li').mouseenter(function(e){
        e.preventDefault();
      
        var ind = $(this).index('.business_menu ul li');  // 0~3
  
        $('.business_text img').attr('src','./mainimages/business'+(ind+1)+'.jpg');
        $('.business_text img').hide().fadeIn('fast');
        $('.business_text dl dt').html(business[ind].title);
        $('.business_text dd:eq(0)').html(business[ind].text);
        $('.business_text dd:eq(1) a').attr('href','./sub2/sub2_'+(ind+1)+'.html');

        // $('.business .gallery-thumbs ul li a').css('filter','grayscale(100%)'); // 모든버튼 비활성화 (흑백처리)
        // $('.business .gallery-thumbs ul li:eq('+ind+') a').css('filter','grayscale(0)');  // 클릭된 자신만 활성화
    });
  });
  
  
