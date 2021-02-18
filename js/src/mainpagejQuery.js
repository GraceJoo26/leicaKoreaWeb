
 //slideBanner만들기

 (function($){
    const pictureBoxUl = $('.pictureBox');
    const mainPicLi = pictureBoxUl.children('li');
    const indiUl = $('.localNav_01');
    const indiLi = indiUl.children('li');
    const indiA = indiLi.children('a');

    // == 할필요가 없었던 작업. slide clone은 오왼 버튼 있을 때 만들기
    const newMainPicLi = mainPicLi.eq(-1).clone(true);
    pictureBoxUl.prepend(newMainPicLi);
    const newLiLen = pictureBoxUl.children('li').length;

    pictureBoxUl.css({'position':'relative','left':'-100%','width':(newLiLen*100)+'%'});
    mainPicLi.css({'width':(100/newLiLen)+'%'});

    let slideN = 1;
    let permission = true;
    let timed = 3000;      
           
    //== ViewBox + indicator slide

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
       pictureBoxUl.stop().animate({ 'marginLeft' : ((slideN) * -100) +'%' });
       slideN +=1;
       if(slideN >= 5){
        slideN = 0;
       }
   },timed);
   
   
   
   //== 카메라 slide
   
   const camSlideUl = $('.slide');
   let slideM = 0;
   setInterval (function(){
       camSlideUl.stop().animate({ 'marginLeft' : ((slideM) * -100+'%') });
       slideM += 1;
       if(slideM > 5 ){
           slideM = 0;
       }
   },timed);


})(jQuery);
