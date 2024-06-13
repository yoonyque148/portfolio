$(document).ready(function() {
    // 메뉴 항목 클릭 시 활성화 상태 변경 및 스크롤 애니메이션
    $('.mapNav a').on('click', function(event) {
        event.preventDefault();
        var targetId = $(this).attr('href');
        var targetSection = $(targetId);

        // 모든 메뉴 항목에서 'active' 클래스를 제거
        $('.mapNav a').removeClass('active');

         // 클릭된 항목에 'active' 클래스 추가
        $(this).addClass('active');

        // Scroll to the target section
        $('html, body').animate({
            scrollTop: targetSection.offset().top - $('.mapNav').outerHeight()+120
        }, 1500);
    });

    
    // 스크롤 이벤트 핸들러
    $(window).on('scroll', function() {
        var videoBoxBottom = $('.videoBox').offset().top + $('.videoBox').outerHeight();
        if ($(window).scrollTop() >= videoBoxBottom) {
            $('.mapNav').addClass('visible');
        } else {
            $('.mapNav').removeClass('visible');
        }
  

    // 섹션 위치 감지 및 네비게이션 링크 활성화
    var currentScroll = $(window).scrollTop();
        $('section').each(function() {
            var sectionTop = $(this).offset().top - $('.mapNav').outerHeight();
            var sectionBottom = sectionTop + $(this).outerHeight();

            if (currentScroll >= sectionTop && currentScroll < sectionBottom) {
                var currentId = $(this).attr('id');
                $('.mapNav a').removeClass('active');
                $('.mapNav a[href="#' + currentId + '"]').addClass('active');
            }
        });
    });

    // 초기화: 페이지 로드 시 스크롤 위치에 따라 활성화 상태 설정
    $(window).trigger('scroll');
});