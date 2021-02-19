
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
   const camLiLen = camSlideUl.children('li').length;
   let slideM = 0;
   const camSlideLiLen = camSlideUl.children('li').length;
   setInterval (function(){
       camSlideUl.stop().animate({ 'marginLeft' : ((slideM) * -645+'px') });
       camSlideUl.css({'width':camLiLen * 100 + '%'});
       slideM += 1;
       if(slideM > camSlideLiLen-4 ){
           slideM = 0;
       }
   },timed);

   //== AKADEMIE SCHDULE SCROLL BANNER

   const classDiv = $('.leica_classBox');
   const classUl = $('.leica_classEachBox');
   const classLi = classUl.children('li');

/*  classDiv.on('mouseover',function(e){
     e.preventDefault();
     let slideO = 0;

     classUl.stop().animate({'margin-top':slideO * 20 +'px'});
     slideO +=1;
 }) */

   let classOH = classDiv.outerHeight();

  

   classDiv.on("wheel", function (event) {
       event.preventDefault();
       console.log(classOH);
    // 이벤트 핸들러: window 객체에 이벤트가 발생하면 실행할 기능
    // → 마우스 휠을 굴리면 window 객체에서 wheel 이벤트가 발생한다.

    // 이벤트 객체의 deltaY 속성을 통해 마우스 휠 버튼을 어느 방향으로 얼마만큼 굴렸는지 확인
    // → 마우스 휠 버튼을 아래쪽으로 굴렸을 때 : deltaY 속성은 양수
    // → 마우스 휠 버튼을 위쪽으로 굴렸을 때 : deltaY 속성은 음수
    console.log("deltaY = " + event.originalEvent.deltaY);
    if (event.originalEvent.deltaY < 0) {
        // wheeled up
        classUl.animate({ scrollTop: -100   +'px'});
    }
      else {
        // wheeled down
        classUl.animate({ scrollTop: +100 + 'px' });
      }
});



})(jQuery);
