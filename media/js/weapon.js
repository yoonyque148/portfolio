$(function(){
    $.ajax({
        url: './weapon.json',
        dataType: 'json',
        success: function(data){
            var useData = data.wp_AR;

            // console.log(data.wp_AR);

            function dataPrint(){

                var txt = '<ul class="swiper-wrapper">';
                for(var i in useData){
                    var $Img = useData[i].Img;
                    var $Gun = useData[i].Gun;
                    var $Bullet = useData[i].Bullet;

                    txt+='<li class="swiper-slide">';
                    txt+='<img src="'+ $Img +'" alt="'+$Gun+'">';
                    txt+='<dl>';
                    txt+='<dt>'+$Gun+'</dt>'; 
                    txt+='<dd>'+$Bullet+'</dd>';
                    txt+='</dl>';
                    txt +='</li>';
                }
                
                txt += '</ul>';
                txt += '<div class="swiper-scrollbar"></div>';

                $('.ar_li').html(txt);


                var swiper1 = new Swiper('.swiper1', {
                    direction: "vertical",
                    slidesPerView: 2,
                    spaceBetween: 10,
                    mousewheel: true,
                    grid: {
                        rows: 4,
                        fill: "row",
                      },
                    scrollbar: {
                      el: ".swiper1 .swiper-scrollbar",
                      hide: false,
                      draggable: true,
                    },
                    breakpoints: {
                        1600: {
                            slidesPerView: 2,
                            grid: {
                                rows: 4, 
                                fill: 'row' 
                            }
                        },
                        1024: {
                            slidesPerView: 2,
                            grid: {
                                rows: 3, 
                                fill: 'row' 
                            }
                        },
                        768: {
                            slidesPerView: 2,
                            grid: {
                                rows: 2, 
                                fill: 'row' 
                            }
                        },
                        640: {
                            slidesPerView: 2,
                            grid: {
                                rows: 3, 
                                fill: 'row' 
                            }
                        },
                        400: {
                            slidesPerView: 2,
                            grid: {
                                rows: 3, 
                                fill: 'row' 
                            }
                        },
                    },
                });

                // 클릭 전 첫번쨰 li 활성하기
                $('.ar_li ul li:eq(0)').addClass('active');

                // 클릭 이벤트 추가
                $('.ar_li').on('click', 'li', function(){
                var $clickedImgSrc = $(this).find('img').attr('src');
                var $clickedGun = $(this).find('dt').text();
                var $clickedBullet = $(this).find('dd').text();

                // 모든 li 요소에서 active 클래스 제거
                $('.ar_li ul li').removeClass('active');
                    
                // 클릭된 li 요소에 active 클래스 추가
                $(this).addClass('active');
                
               // ar_big 클래스 안의 이미지와 텍스트를 부드럽게 교체
                $('.ar_big img').fadeOut(300, function(){
                    $(this).attr('src', $clickedImgSrc).fadeIn(300);
                });
                $('.ar_big dt, .ar_big dd').fadeOut(300, function(){
                    $('.ar_big dt').text($clickedGun);
                    $('.ar_big dd').text($clickedBullet);
                    $(this).fadeIn(300);
                });
                });

            };
            dataPrint(useData);
        }
    });
});


$(function(){
    $.ajax({
        url: './weapon.json',
        dataType: 'json',
        success: function(data){
            var useData = data.wp_DMR;

            // console.log(data.wp_DMR);

            function dataPrint(){

                var txt = '<ul class="swiper-wrapper">';
                for(var i in useData){
                    var $Img = useData[i].Img;
                    var $Gun = useData[i].Gun;
                    var $Bullet = useData[i].Bullet;

                    txt+='<li class="swiper-slide">';
                    txt+='<img src="'+ $Img +'" alt="'+$Gun+'">';
                    txt+='<dl>';
                    txt+='<dt>'+$Gun+'</dt>'; 
                    txt+='<dd>'+$Bullet+'</dd>';
                    txt+='</dl>';
                    txt +='</li>';
                }
                
                txt += '</ul>';
                txt += '<div class="swiper-scrollbar"></div>';

                $('.dmr_li').html(txt);


                var swiper2 = new Swiper('.swiper2', {
                    direction: "vertical",
                    slidesPerView: 2,
                    spaceBetween: 10,
                    mousewheel: true,
                    grid: {
                        rows: 3,
                        fill: "row",
                      },
                    scrollbar: {
                      el: ".swiper2 .swiper-scrollbar",
                      hide: false,
                      draggable: true,
                    },
                    breakpoints: {
                        1024: {
                            slidesPerView: 2,
                            grid: {
                                rows: 3, 
                                fill: 'row' 
                            }
                        },
                        768: {
                            slidesPerView: 2,
                            grid: {
                                rows: 2, 
                                fill: 'row' 
                            }
                        },
                        640: {
                            slidesPerView: 2,
                            grid: {
                                rows: 2, 
                                fill: 'row' 
                            }
                        },
                        400: {
                            slidesPerView: 2,
                            grid: {
                                rows: 3, 
                                fill: 'row' 
                            }
                        },
                    },
                });

                // 클릭 전 첫번쨰 li 활성하기
                $('.dmr_li ul li:eq(0)').addClass('active');

                // 클릭 이벤트 추가
                $('.dmr_li').on('click', 'li', function(){
                var $clickedImgSrc = $(this).find('img').attr('src');
                var $clickedGun = $(this).find('dt').text();
                var $clickedBullet = $(this).find('dd').text();

                // 모든 li 요소에서 active 클래스 제거
                $('.dmr_li ul li').removeClass('active');
                    
                // 클릭된 li 요소에 active 클래스 추가
                $(this).addClass('active');
                
               // dmr_big 클래스 안의 이미지와 텍스트를 부드럽게 교체
                $('.dmr_big img').fadeOut(300, function(){
                    $(this).attr('src', $clickedImgSrc).fadeIn(300);
                });
                $('.dmr_big dt, .dmr_big dd').fadeOut(300, function(){
                    $('.dmr_big dt').text($clickedGun);
                    $('.dmr_big dd').text($clickedBullet);
                    $(this).fadeIn(300);
                });
                });

            };
            dataPrint(useData);
        }
    });
});


$(function(){
    $.ajax({
        url: './weapon.json',
        dataType: 'json',
        success: function(data){
            var useData = data.wp_SMG;

            // console.log(data.wp_SMG);

            function dataPrint(){

                var txt = '<ul class="swiper-wrapper">';
                for(var i in useData){
                    var $Img = useData[i].Img;
                    var $Gun = useData[i].Gun;
                    var $Bullet = useData[i].Bullet;

                    txt+='<li class="swiper-slide">';
                    txt+='<img src="'+ $Img +'" alt="'+$Gun+'">';
                    txt+='<dl>';
                    txt+='<dt>'+$Gun+'</dt>'; 
                    txt+='<dd>'+$Bullet+'</dd>';
                    txt+='</dl>';
                    txt +='</li>';
                }
                
                txt += '</ul>';
                txt += '<div class="swiper-scrollbar"></div>';

                $('.smg_li').html(txt);


                var swiper3 = new Swiper('.swiper3', {
                    direction: "vertical",
                    slidesPerView: 2,
                    spaceBetween: 10,
                    mousewheel: true,
                    grid: {
                        rows: 3,
                        fill: "row",
                      },
                    scrollbar: {
                      el: ".swiper3 .swiper-scrollbar",
                      hide: false,
                      draggable: true,
                    },
                    breakpoints: {
                        1024: {
                            slidesPerView: 2,
                            grid: {
                                rows: 3, 
                                fill: 'row' 
                            }
                        },
                        768: {
                            slidesPerView: 2,
                            grid: {
                                rows: 2, 
                                fill: 'row' 
                            }
                        },
                        640: {
                            slidesPerView: 2,
                            grid: {
                                rows: 2, 
                                fill: 'row' 
                            }
                        },
                        400: {
                            slidesPerView: 2,
                            grid: {
                                rows: 3, 
                                fill: 'row' 
                            }
                        },
                    },
                });

                // 클릭 전 첫번쨰 li 활성하기
                $('.smg_li ul li:eq(0)').addClass('active');

                // 클릭 이벤트 추가
                $('.smg_li').on('click', 'li', function(){
                var $clickedImgSrc = $(this).find('img').attr('src');
                var $clickedGun = $(this).find('dt').text();
                var $clickedBullet = $(this).find('dd').text();

                // 모든 li 요소에서 active 클래스 제거
                $('.smg_li ul li').removeClass('active');
                    
                // 클릭된 li 요소에 active 클래스 추가
                $(this).addClass('active');
                
               // smg_big 클래스 안의 이미지와 텍스트를 부드럽게 교체
                $('.smg_big img').fadeOut(300, function(){
                    $(this).attr('src', $clickedImgSrc).fadeIn(300);
                });
                $('.smg_big dt, .smg_big dd').fadeOut(300, function(){
                    $('.smg_big dt').text($clickedGun);
                    $('.smg_big dd').text($clickedBullet);
                    $(this).fadeIn(300);
                });
                });

            };
            dataPrint(useData);
        }
    });
});


$(function(){
    $.ajax({
        url: './weapon.json',
        dataType: 'json',
        success: function(data){
            var useData = data.wp_SR;

            // console.log(data.wp_SR);

            function dataPrint(){

                var txt = '<ul class="swiper-wrapper">';
                for(var i in useData){
                    var $Img = useData[i].Img;
                    var $Gun = useData[i].Gun;
                    var $Bullet = useData[i].Bullet;

                    txt+='<li class="swiper-slide">';
                    txt+='<img src="'+ $Img +'" alt="'+$Gun+'">';
                    txt+='<dl>';
                    txt+='<dt>'+$Gun+'</dt>'; 
                    txt+='<dd>'+$Bullet+'</dd>';
                    txt+='</dl>';
                    txt +='</li>';
                }
                
                txt += '</ul>';
                txt += '<div class="swiper-scrollbar"></div>';

                $('.sr_li').html(txt);


                var swiper4 = new Swiper('.swiper4', {
                    direction: "vertical",
                    slidesPerView: 2,
                    spaceBetween: 10,
                    mousewheel: true,
                    grid: {
                        rows: 2,
                        fill: "row",
                      },
                    scrollbar: {
                      el: ".swiper4 .swiper-scrollbar",
                      hide: false,
                      draggable: true,
                    },
                    breakpoints: {
                        400: {
                            slidesPerView: 2,
                            grid: {
                                rows: 2, 
                                fill: 'row' 
                            }
                        },
                    },
                    
                });

                // 클릭 전 첫번쨰 li 활성하기
                $('.sr_li ul li:eq(0)').addClass('active');

                // 클릭 이벤트 추가
                $('.sr_li').on('click', 'li', function(){
                var $clickedImgSrc = $(this).find('img').attr('src');
                var $clickedGun = $(this).find('dt').text();
                var $clickedBullet = $(this).find('dd').text();

                // 모든 li 요소에서 active 클래스 제거
                $('.sr_li ul li').removeClass('active');
                    
                // 클릭된 li 요소에 active 클래스 추가
                $(this).addClass('active');
                
               // sr_big 클래스 안의 이미지와 텍스트를 부드럽게 교체
                $('.sr_big img').fadeOut(300, function(){
                    $(this).attr('src', $clickedImgSrc).fadeIn(300);
                });
                $('.sr_big dt, .sr_big dd').fadeOut(300, function(){
                    $('.sr_big dt').text($clickedGun);
                    $('.sr_big dd').text($clickedBullet);
                    $(this).fadeIn(300);
                });
                });

            };
            dataPrint(useData);
        }
    });
});


$(function(){
    $.ajax({
        url: './weapon.json',
        dataType: 'json',
        success: function(data){
            var useData = data.wp_throw;

            // console.log(data.wp_throw);

            function dataPrint(){

                var txt = '<ul class="swiper-wrapper">';
                for(var i in useData){
                    var $Img = useData[i].Img;
                    var $Gun = useData[i].Gun;
                    var $Bullet = useData[i].Bullet;

                    txt+='<li class="swiper-slide">';
                    txt+='<img src="'+ $Img +'" alt="'+$Gun+'">';
                    txt+='<dl>';
                    txt+='<dt>'+$Gun+'</dt>'; 
                    txt+='<dd>'+$Bullet+'</dd>';
                    txt+='</dl>';
                    txt +='</li>';
                }
                
                txt += '</ul>';
                txt += '<div class="swiper-scrollbar"></div>';

                $('.throw_li').html(txt);


                var swiper5 = new Swiper('.swiper5', {
                    direction: "vertical",
                    slidesPerView: 2,
                    spaceBetween: 10,
                    mousewheel: true,
                    grid: {
                        rows: 3,
                        fill: "row",
                      },
                    scrollbar: {
                      el: ".swiper5 .swiper-scrollbar",
                      hide: false,
                      draggable: true,
                    },
                    breakpoints: {
                        768: {
                            slidesPerView: 2,
                            grid: {
                                rows: 3, 
                                fill: 'row' 
                            }
                        },
                        640: {
                            slidesPerView: 2,
                            grid: {
                                rows: 2, 
                                fill: 'row' 
                            }
                        },
                        400: {
                            slidesPerView: 2,
                            grid: {
                                rows: 3, 
                                fill: 'row' 
                            }
                        },
                    },
                });

                // 클릭 전 첫번쨰 li 활성하기
                $('.throw_li ul li:eq(0)').addClass('active');

                // 클릭 이벤트 추가
                $('.throw_li').on('click', 'li', function(){
                var $clickedImgSrc = $(this).find('img').attr('src');
                var $clickedGun = $(this).find('dt').text();
                var $clickedBullet = $(this).find('dd').text();

                // 모든 li 요소에서 active 클래스 제거
                $('.throw_li ul li').removeClass('active');
                    
                // 클릭된 li 요소에 active 클래스 추가
                $(this).addClass('active');
                
               // throw_big 클래스 안의 이미지와 텍스트를 부드럽게 교체
                $('.throw_big img').fadeOut(300, function(){
                    $(this).attr('src', $clickedImgSrc).fadeIn(300);
                });
                $('.throw_big dt, .throw_big dd').fadeOut(300, function(){
                    $('.throw_big dt').text($clickedGun);
                    $('.throw_big dd').text($clickedBullet);
                    $(this).fadeIn(300);
                });
                });

            };
            dataPrint(useData);
        }
    });
});


$(function(){
    $.ajax({
        url: './weapon.json',
        dataType: 'json',
        success: function(data){
            var useData = data.wp_etc;

            // console.log(data.wp_etc);

            function dataPrint(){

                var txt = '<ul class="swiper-wrapper">';
                for(var i in useData){
                    var $Img = useData[i].Img;
                    var $Gun = useData[i].Gun;
                    var $Bullet = useData[i].Bullet;

                    txt+='<li class="swiper-slide">';
                    txt+='<img src="'+ $Img +'" alt="'+$Gun+'">';
                    txt+='<dl>';
                    txt+='<dt>'+$Gun+'</dt>'; 
                    txt+='<dd>'+$Bullet+'</dd>';
                    txt+='</dl>';
                    txt +='</li>';
                }
                
                txt += '</ul>';
                txt += '<div class="swiper-scrollbar"></div>';

                $('.etc_li').html(txt);


                var swiper6 = new Swiper('.swiper6', {
                    direction: "vertical",
                    slidesPerView: 2,
                    spaceBetween: 10,
                    mousewheel: true,
                    grid: {
                        rows: 3,
                        fill: "row",
                      },
                    scrollbar: {
                      el: ".swiper6 .swiper-scrollbar",
                      hide: false,
                      draggable: true,
                    },
                    breakpoints: {
                        768:{
                            slidesPerView: 2,
                            grid: {
                                rows: 3, 
                                fill: 'row' 
                            }
                        },
                        640: {
                            slidesPerView: 2,
                            grid: {
                                rows: 2, 
                                fill: 'row' 
                            }
                        },
                        400: {
                            slidesPerView: 2,
                            grid: {
                                rows: 3, 
                                fill: 'row' 
                            }
                        },
                    
                    },
                });

                // 클릭 전 첫번쨰 li 활성하기
                $('.etc_li ul li:eq(0)').addClass('active');

                // 클릭 이벤트 추가
                $('.etc_li').on('click', 'li', function(){
                var $clickedImgSrc = $(this).find('img').attr('src');
                var $clickedGun = $(this).find('dt').text();
                var $clickedBullet = $(this).find('dd').text();

                // 모든 li 요소에서 active 클래스 제거
                $('.etc_li ul li').removeClass('active');
                    
                // 클릭된 li 요소에 active 클래스 추가
                $(this).addClass('active');
                
               // etc_big 클래스 안의 이미지와 텍스트를 부드럽게 교체
                $('.etc_big img').fadeOut(300, function(){
                    $(this).attr('src', $clickedImgSrc).fadeIn(300);
                });
                $('.etc_big dt, .etc_big dd').fadeOut(300, function(){
                    $('.etc_big dt').text($clickedGun);
                    $('.etc_big dd').text($clickedBullet);
                    $(this).fadeIn(300);
                });
                });

            };
            dataPrint(useData);
        }
    });
});