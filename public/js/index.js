function go() {
    window.location.href = "./goods-info.html"
}
var swiper = new Swiper('.swiper-container', {
    slidesPerView: 3,
    spaceBetween: 20,
    pagination: {
        el: '.swiper-pagination',
        clickable: true,
    },
    on: {
        tap: function(event) {
            var index = $(event.target).attr("data");
            // if (true) {
            //     swiper.slideTo(index, 1000, false);
            //     swiper.setTranslate(-($(event.target).width()) * index + 20);
            // }
            goSlide(swiper, index)
        },
    },
    // initialSlide: 0,
    // observer: true, //修改swiper自己或子元素时，自动初始化swiper
    // observeParents: true, //修改swiper的父元素时，自动初始化swiper
    // onSlideChangeEnd: function(swiper) {　　　
    //     swiper.update();　　　
    //     swiper.startAutoplay();　　
    //     swiper.reLoop();
    // }
});


//跳转到指定的slide，并且在页面最中间
function goSlide(swiper, index) {
    swiperWidth = $(".swiper-wrapper").width()
    maxTranslate = swiper.maxTranslate();
    maxWidth = -maxTranslate + swiperWidth / 2;
    console.log(swiperWidth + "   " + maxTranslate + "   " + maxWidth);

    slide = swiper.slides[index];
    slideLeft = slide.offsetLeft;
    slideWidth = slide.clientWidth;
    slideCenter = slideLeft + slideWidth / 2

    if (index <= $(".swiper-slide").length - 2) {
        swiper.slideTo(index, 1000, false);
        if (slideCenter < swiperWidth / 2) {
            swiper.setTranslate(0);
        } else if (slideCenter > maxWidth) {
            swiper.setTranslate(maxTranslate);
        } else {
            nowTlanslate = slideCenter - swiperWidth / 2
            swiper.setTranslate(-nowTlanslate);
        }
    }
}


$(document).ready(function() {

    $(".swiper-slide").width("2rem");
    $('.swiper-container>.swiper-wrapper>.swiper-slide').click(function() {
        var id = $(this).attr("id");
        $(".goods-list").hide();
        $("#" + id + "-view").attr("style", "display:flex;");
        $(this).addClass("active").siblings().removeClass("active");
    });


    //获取浏览器参数，跳转到指定的nav
    var current = GetQueryString("type");
    if (current) {
        $("#" + current).addClass("active").siblings().removeClass("active");
        var currentIndex = $("#" + current).attr("data");
        goSlide(swiper, currentIndex)
    }
})