$(document).ready(function() {
    const map = [
        {imgsrc:'img1.jpg', bran: '1호점', shop:'신성할망식당', addr:'제주시 신대로7길 23', tel:'064-753-3976', left:'40%', top:'1%'},
        {imgsrc:'img2.jpg', bran: '2호점', shop:'동동차이나', addr:'서귀포시 남원읍 태위로689번길 7', tel:'064-764-6659', left:'60%', top:'28%'},
        {imgsrc:'img3.jpg', bran: '3호점', shop:'메로식당', addr:'서귀포시 중정로91번길 16', tel:'064-762-7899', left:'47%', top:'32%'},
        {imgsrc:'img4.jpg', bran: '4·7호점', shop:'보말과풍경', addr:'서귀포시 대정읍 하모중앙로 17', tel:'064-792-5400', left:'14%', top:'31%'},
        {imgsrc:'img5.jpg', bran: '6호점', shop:'진미네식당', addr:'제주시 수덕5길 42', tel:'064-743-1349', left:'38%', top:'2%' },
        {imgsrc:'img6.jpg', bran: '9호점', shop:'해성도뚜리', addr:'제주시 애월읍 애월해안로 682', tel:'064-713-6321', left:'28%', top:'3%'},
        {imgsrc:'img7.jpg', bran: '10호점', shop:'천보식당', addr:'서귀포시 중앙로 89번길 13', tel:'064-762-1232', left:'44%', top:'32%'},
        {imgsrc:'img8.jpg', bran: '8·11호점', shop:'행복맛집', addr:'제주시 진남로6길 32', tel:'064-758-6788', left:'50%', top:'-2%'},
        {imgsrc:'img9.jpg', bran: '12호점', shop:'청춘테이블', addr:'제주시 동문로 89', tel:'064-757-4747', left:'48%', top:'-2%'},
        {imgsrc:'img10.jpg', bran: '13호점', shop:'낭쿰낭쿰', addr:'서귀포시 중앙로79번길 4', tel:'064-901-7944', left:'45%', top:'32%'},
        {imgsrc:'img11.jpg', bran: '14호점', shop:'제주돔베막국수', addr:'제주시 한경면 고산로 35', tel:'064-773-2147', left:'8%', top:'23%'},
    ];

    const map2  = [
        {imgsrc:'img12.jpg', bran: '16호점', shop:'제주콩순옥', addr:'서귀포시 대정읍 신영로 129-2', tel:'064-792-8585', left:'15%', top:'32%'},
        {imgsrc:'img13.jpg', bran: '17호점', shop:'함덕쉼팡', addr:'제주시 조천읍 조합해안로 584', tel:'064-784-3949', left:'60%', top:'-3%'},
        {imgsrc:'img14.jpg', bran: '18호점', shop:'세평맛집', addr:'제주시 구좌읍 세평항로 1', tel:'064-782-8188', left:'77%', top:'2%'},
        {imgsrc:'img15.jpg', bran: '19호점', shop:'차이나마씸', addr:'서귀포시 칠십리로 474', tel:'064-732-7155', left:'50%', top:'32%'},
        {imgsrc:'img16.jpg', bran: '20호점', shop:'시니어손맛 아리랑', addr:'제주시 동광로 2길 7', tel:'064-753-9288', left:'47%', top:'-1%'},
        {imgsrc:'img17.jpg', bran: '21호점', shop:'엄블랑디', addr:'서귀포시 일주동로 8713', tel:'064-762-2285', left:'46%', top:'31%'},
        {imgsrc:'img18.jpg', bran: '22호점', shop:'뉴 남원분식', addr:'서귀포시 남원읍 태위로 679번길 2', tel:'064-764-5007', left:'61%', top:'29%'},
        {imgsrc:'img19.jpg', bran: '23호점', shop:'혜자이모네', addr:'제주시 다랑곶길 7', tel:'064-743-7800', left:'39%', top:'1%'},
        {imgsrc:'img20.jpg', bran: '24호점', shop:'비양도식당', addr:'제주시 한림읍 한림로 167', tel:'064-796-4030', left:'11%', top:'16%'},
        {imgsrc:'img21.jpg', bran: '25호점', shop:'동문칼국수', addr:'제주시 동문로 33', tel:'0507-1336-2614', left:'42%', top:'0%'},
        {imgsrc:'img22.jpg', bran: '26호점', shop:'용담생국수', addr:'제주시 용담로 95', tel:'064-743-2503', left:'41%', top:'0%'},
    ];

    function branchListHover() {
        $('.restaurant ul li dt:eq(0)').css('background', '#8E684C').css('color', '#fff').css('transition', '.3s ease');
        $('.restaurant ul li dd:eq(0)').css('font-weight', 600).css('transition', '.3s ease');
        
        function resetStyles() {
            $('.restaurant ul li dt').css('background', '').css('color', '').css('transition', '.3s ease');
            $('.restaurant ul li dd').css('font-weight', '').css('transition', '.3s ease');
        }


        $('.restaurant .list1 ul li').hover(
            function() {
                resetStyles();
                let ind = $(this).index();
                $('.branch img').attr('src', './images/content1/' + map[ind].imgsrc).fadeIn('fast');
                $('.branch ul li:eq(0) span').html(map[ind].bran);
                $('.branch ul li:eq(0) strong').html(map[ind].shop);
                $('.branch ul li:eq(1)').html(map[ind].addr);
                $('.branch ul li:eq(2)').html(map[ind].tel);

                // 핀 위치 변경
                $('.map_left .pin').css({
                    'left': map[ind].left,
                    'top': map[ind].top
                });

                $('dt', this).css('background', '#8E684C').css('color', '#fff').css('transition', '.3s ease');
                $('dd', this).css('font-weight', 600).css('transition', '.3s ease');
            },
            function() {
                $('dt', this).css('background', '#f5e6da81').css('color', '#8E684C');
                $('dd', this).css('font-weight', 'normal');
            }
        );

        $('.restaurant .list2 ul li').hover(
            function() {
                resetStyles();
                let ind = $(this).index();
                $('.branch img').attr('src', './images/content1/' + map2[ind].imgsrc).fadeIn('normal');
                $('.branch ul li:eq(0) span').html(map2[ind].bran);
                $('.branch ul li:eq(0) strong').html(map2[ind].shop);
                $('.branch ul li:eq(1)').html(map2[ind].addr);
                $('.branch ul li:eq(2)').html(map2[ind].tel);

                $('.map_left .pin').css({
                    'left': map2[ind].left,
                    'top': map2[ind].top
                });
                
                $('dt', this).css('background', '#8E684C').css('color', '#fff').css('transition', '.3s ease');
                $('dd', this).css('font-weight', 600).css('transition', '.3s ease');
            },
            function() {
                $('dt', this).css('background', '#f5e6da81').css('color', '#8E684C');
                $('dd', this).css('font-weight', 'normal');
        
            }
        );
    }

    // AJAX 요청으로 데이터를 로드한 후, hover 이벤트를 초기화
    $.ajax({
        url: './data/rest.json',
        dataType: 'json',
        success: function(data) {
            var useData1 = data.rest1;
            var useData2 = data.rest2;

            function dataPrint(dataArray, selector) {
                var txt = '<ul>';
                for (var i in dataArray) {
                    var $Num = dataArray[i].Num;
                    var $Shop = dataArray[i].Shop;

                    txt += '<li>';
                    txt += '<dl>';
                    txt += '<dt>' + $Num + '</dt>';
                    txt += '<dd>' + $Shop + '</dd>';
                    txt += '</dl>';
                    txt += '</li>';
                }
                txt += '</ul>';
                $(selector).html(txt);
            }

            dataPrint(useData1, '.restaurant .list1');
            dataPrint(useData2, '.restaurant .list2');

            // 비동기로 추가된 요소들에 대해 hover 이벤트를 초기화
            branchListHover();
        }
    });

    // 초기 페이지 로드 시 hover 이벤트 초기화~
    branchListHover();
});