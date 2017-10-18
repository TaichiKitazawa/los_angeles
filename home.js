//top page slide show

$(function(){
  $('body').vegas({ //背景画像でスライドショーしたい場所の設定
    slides: [
     { src: 'images/day1/day1_3.jpg' }, //スライドする画像を配列で設定
     { src: 'images/day1/day1_6.jpg' },
     { src: 'images/day1/day1_9.jpg' },
     { src: 'images/day2/day2_1.jpg' },
     { src: 'images/day2/day2_3.jpg' },
        { src: 'images/day2/day2_7.jpg' },
        { src: 'images/day2/day2_8.jpg' },
        { src: 'images/day2/day2_9.jpg' },
        { src: 'images/day2/day2_15.jpg' },
        { src: 'images/day2/day2_18.jpg' },
        { src: 'images/day2/day2_21.jpg' },
        { src: 'images/day3/day3_1.jpg' },
        { src: 'images/day3/day3_6.jpg' },
        { src: 'images/day3/day3_13.jpg' },
        { src: 'images/day4/day4_5.jpg' },
        { src: 'images/day4/day4_7.jpg' },
        { src: 'images/day4/day4_14.jpg' },
        { src: 'images/day4/day4_17.jpg' },
        { src: 'images/day5/day5_3.jpg' },
        { src: 'images/day5/day5_4.jpg' },
        { src: 'images/day5/day5_5.jpg' },
        { src: 'images/day5/day5_8.jpg' },
        { src: 'images/day5/day5_10.jpg' },
        { src: 'images/day5/day5_17.jpg' },
        { src: 'images/day6/day6_7.jpg' },
        { src: 'images/day6/day6_10.jpg' },
        { src: 'images/day6/day6_12.jpg' },
        { src: 'images/day6/day6_15.jpg' },
        { src: 'images/day6/day6_18.jpg' },
        { src: 'images/day6/day6_20.jpg' },
        { src: 'images/day6/day6_23.jpg' },
        { src: 'images/day6/day6_25.jpg' },
    ],
      shuffle: true,
     delay: 5000, //スライドまでの時間ををミリ秒単位で設定
     timer: true, //タイマーバーの表示/非表示を切り替え
     overlay: '', //オーバーレイする画像の設定
     animation: 'random', //スライドのアニメーションを設定
     transition: 'blur', //スライド間のエフェクトを設定
     transitionDuration: 1000, //エフェクト時間をミリ秒単位で設定
      loop: true
  });
});

//top page slide show
