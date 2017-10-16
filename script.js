//each pages slide show

$(function () {
    $('.thumb-item').slick({
        infinite: true,
        fade: false,
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: true,
        fade: true,
        vertical: false,
        centerMode: true,
        asNavFor: '.thumb-item-nav' //サムネイルのクラス名
    });
    $('.thumb-item-nav').slick({
        arrow: true,
        infinite: true,
        slidesToShow: 10,
        slidesToScroll: 1,
        asNavFor: '.thumb-item', //スライダー本体のクラス名
        focusOnSelect: true,
    });
});

//each pages slide show