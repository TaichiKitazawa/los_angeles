//top page slide show

$(function(){
  $('body').vegas({ //背景画像でスライドショーしたい場所の設定
    slides: [
     { src: 'images/day1/day1_1.jpg' }, //スライドする画像を配列で設定
     { src: 'images/day1/day1_2.jpg' },
     { src: 'images/day1/day1_3.jpg' }
    ],
     delay: 5000, //スライドまでの時間ををミリ秒単位で設定
     timer: true, //タイマーバーの表示/非表示を切り替え
     overlay: 'img/01.png', //オーバーレイする画像の設定
     animation: 'random', //スライドのアニメーションを設定
     transition: 'blur', //スライド間のエフェクトを設定
     transitionDuration: 1000 //エフェクト時間をミリ秒単位で設定
  });
});

//top page slide show
