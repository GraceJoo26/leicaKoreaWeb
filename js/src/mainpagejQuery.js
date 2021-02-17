
 //slideBanner만들기

 (function($){
    const pictureBoxUl = $('.pictureBox');
    const mainPicLi = pictureBoxUl.children('li');
    const indiUl = $('.localNav_01');
    const indiLi = indiUl.children('li');
    const indiA = indiLi.children('a');


    const newMainPicLi = mainPicLi.eq(-1).clone(true);
    pictureBoxUl.prepend(newMainPicLi);
    const newLiLen = pictureBoxUl.children('li').length;

    pictureBoxUl.css({'position':'relative','left':'-100%','width':(newLiLen*100)+'%'});
    mainPicLi.css({'width':(100/newLiLen)+'%'});

    let slideN = 0;
    let permission = true;
    let timed = 2000;      
           
    indiA.on('mouseenter focus click', function(e){
                e.preventDefault();
                
                let it = $(this);
                let slideN = it.parent('li').index();
                
                indiLi.eq(slideN).addClass('on');
                indiLi.eq(slideN).siblings().removeClass('on');
                slideN+=1;
                
                if( e.type == 'focus' || e.type == 'mouseenter'){
                    pictureBoxUl.stop().animate({'marginLeft': ((slideN-1) * -100) +'%'});
                }
    });    
        
   let timer = setInterval(function(){
        indiLi.eq(slideN).addClass('on');
        indiLi.eq(slideN).siblings().removeClass('on');
       pictureBoxUl.stop().animate({'marginLeft': ((slideN) * -100) +'%'});
       slideN +=1;
       if(slideN >= 5){
        slideN = 0;
       }
   },timed);
   

})(jQuery);
