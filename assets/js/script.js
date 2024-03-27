//ハンバーガー開閉
"use strict";
{
    const hamburger = document.querySelector('.hamburger');
    const nav = document.querySelector('.nav-in_hamburger');

    hamburger.addEventListener('click', function() {
    hamburger.classList.toggle('open');
    nav.classList.toggle('open');
    });
}

//ハンバーガー内メニュークリック時ハンバーガー閉じる
$(function () {
    $(".nav_item").click(function () {
    $(".hamburger").removeClass("open");
    $(".nav-in_hamburger").removeClass("open");
    });
    // function
});

//マカロンスライダー
window.addEventListener("DOMContentLoaded", () => {
    const infiniteSlider = new Swiper(".infinite-slider", {
        autoplay: {
            delay: 0,
                disableOnInteraction: false, //ユーザーがスワイプなどの操作しても止まらない
                reverseDirection: true, // 逆方向有効化
    },
    loop: true,
    //loopedSlides: 2,
    slidesPerView: "auto",
    speed: 8000,
    autoplay: {
        delay: 0,
        disableOnInteraction: false,
    },
    });
});

//logoの表示
$(window).on('load',function(){
    $("#splash").delay(1500).fadeOut('slow');//ローディング画面を1.5秒（1500ms）待機してからフェードアウト
    $("#splash_logo").delay(1200).fadeOut('slow');//ロゴを1.2秒（1200ms）待機してからフェードアウト
});

AOS.init({
    duration: 1500,
    once: true
});