

$(document).ready(function(){


    var characters = [
        {
            imgsrc:'char01_x2.png',
            name:'Link', 
            information:'They are chosen by the Golden Goddesses to protect the land from evil whenever deemed necessary.', 
        },
        {
            imgsrc:'char02_x2.png',
            name:'Mike Wazowski', 
            information:'Sulley`s scare assistant, best friend, and roommate doesn`t want any interruptions in his life—especially in his relationships. ', 
        },
        {
            imgsrc:'char03_x2.png',
            name:'Boo', 
            information:'Boo has a vocabulary of about three words, but that doesn`t stop this curious human girl from stealing Sulley`s heart and overcoming her fear of Randall.', 
        },
        {
            imgsrc:'char04_x2.png',
            name:'Randall Boggs', 
            information:'Able to scare even his co-workers with his chameleon abilities, Randall is one of the most wicked monsters in Monstropolis. ', 
        },
        {
            imgsrc:'char05_x2.png',
            name:'Henry J', 
            information:'Monsters, Inc. has been in the Waternoose family for generations, and Henry J. Waternoose III will do anything to beat the scream shortage and make his company profitable again.', 
        },
        {
            imgsrc:'char06_x2.png',
            name:'Celia', 
            information:'The factory`s one-eyed, snake-haired receptionist must put her birthday celebration on hold as she gets caught in the middle of Sulley and Mike`s crazy predicament. Luckily.', 
        }
      ];
  
  
    // $('.characters .charbox img').attr('src','./images/char01_x2.png');
    $('.characters .charbox img').attr('src','./images/'+characters[0].imgsrc);
    $('.gallery-thumbs .title').html(characters[0].name);
    $('.gallery-thumbs .main_t').html(characters[0].information);
    $('.characters .gallery-thumbs ul li:eq(0) a').css('filter','grayscale(0)');  //클릭한 버튼만 컬러로 활성화

    $('.characters .gallery-thumbs a').click(function(e){
        e.preventDefault();
      
        var ind = $(this).index('.characters .gallery-thumbs a');  // 0~5
  
        $('.characters .charbox img').attr('src','./images/char0'+(ind+1)+'_x2.png');
        $('.characters .charbox img').hide().fadeIn('slow');
        $('.gallery-thumbs .title').html(characters[ind].name);
        $('.gallery-thumbs .main_t').html(characters[ind].information);

        $('.characters .gallery-thumbs ul li a').css('filter','grayscale(100%)'); // 모든버튼 비활성화 (흑백처리)
        $('.characters .gallery-thumbs ul li:eq('+ind+') a').css('filter','grayscale(0)');  // 클릭된 자신만 활성화
    });
  });
  
  