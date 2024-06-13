document.addEventListener('DOMContentLoaded', (event) => {
    // 모달 가져오기
    var modal = document.getElementById("myModal");

    // 이미지 가져오기 및 모달에 이미지 삽입 - 이미지의 "alt" 텍스트를 캡션으로 사용
    var modalImg = document.getElementById("img01");
    var captionText = document.getElementById("caption");
    var images = document.querySelectorAll('.swiper-slide img');
    
    images.forEach((img) => {
        img.onclick = function () {
            modal.style.display = "block";
            modalImg.src = this.src;
            captionText.innerHTML = this.alt;
            // 배경 스크롤 방지
            // document.body.style.overflow = 'hidden';
        }
    });

    // 모달을 닫는 <span> 요소 가져오기
    var span = document.getElementsByClassName("close")[0];

    // 사용자가 <span> (x)를 클릭하면 모달 닫기
    span.onclick = function () {
        modal.style.display = "none";
        // 배경 스크롤 복원
        document.body.style.overflow = 'auto';
    }
    
    // 사용자가 모달 이미지 외부를 클릭하면 모달 닫기
    modal.onclick = function(event) {
        if (event.target == modal) {
            modal.style.display = "none";
            // 배경 스크롤 복원
            document.body.style.overflow = 'auto';
        }
    }
});