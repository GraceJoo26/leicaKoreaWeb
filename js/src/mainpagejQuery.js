
 //slideBanner만들기

 (function($){
    var pictureBoxUl = $('.pictureBox');
    var mainPicLi = pictureBoxUl.children('li');

    var newMainPicLi = mainPicLi.eq(-1).clone(true);
    pictureBoxUl.prepend(newMainPicLi);
    var newLiLen = pictureBoxUl.children('li').length;
    console.log(newLiLen);

    pictureBoxUl.css({'position':'relative','left':'-100%','width':(newLiLen*100)+'%'});
    mainPicLi.css({'width':(100/newLiLen)+'%'});

})(jQuery);