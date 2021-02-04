/*(function($){

    /* //메뉴slide만들기
    const wrap = document.querySelector('#wrap');//전체 감싼 박스
    const titleUl = wrap.querySelector('.gnb');//제목들어간 Ul
    const gnbTitle = titleUl.querySelector('.gnb_title');//gnb제목
    const gnbMenu = document.querySelector('.gnb_menu'); //gnb메뉴박스
    const gnbMenuLi = gnbMenu.querySelectorAll('li');//숨긴메뉴들
 */
    //메뉴 slide만들기

   /* const gnbUl = $('.gnb');
    const gnbTitLi = gnbUl.children('.gnb_title');
    const gnbMenu = gnbTitLi.find('.gnb_menu');
    const gnbMuUl = gnbMenu.find('ul');
    const gnbMuLi = gnbMuUl.find('li');
    
    
    gnbTitLi.on('mouseover', function(e){
        e.preventDefault();
        gnbMenu.stop().show();
        let it = $(this);
        it.siblings('gnbMuUl').hide(); 
        });
    gnbTitLi.on('mouseleave',function(e){
        e.preventDefault();
        gnbMenu.stop().hide();
        let it = $(this);
        it.siblings('gnbMuUl').show();
        })
    
   
})(jQuery);*/



//dom_dropDown.js
'use strict';

 const domTitle = document.getElementsByClassName('gnb_title');
 const domMnudep2 = document.getElementsByClassName('depth2');
 const domInnerMnu = document.getElementsByClassName('inner_menu');
 const domMnuLi = document.getElementsByClassName('mnuLi');

 let i = 0;
 for (; i < domTitle.length ; i++){
     domTitle[i].setAttribute('tabindex', '0');
 };

 const DomMnuLiFn = function ( action ){
     let j = 0;
     for ( ; j < domMnudep2.length ; j++){
        domMnudep2[j].style.display = action;
     }
 };

 //DomMnuFn('block');
 
 //domTitle.onclick = function(){ DomMnuLiUl('block'); domTitle.style.color ="red";};
 //domTitle.onmouseleave = function(){ DomMnuUlFn('none');};

 
    this.addEventListener('mouseover', function(e){ 
        for (i=0; i < domTitle.length ; i++){
            if(e.target.parentNode == domTitle[i]){
                //console.log(e.target.parentNode.childNodes);
                let depth = e.target.parentNode.childNodes[3];
                //console.log(depth);
                depth.style.display = 'block';
                domTitle[i].style.color = 'red';
                domMnuLi[i].style.display = 'block';
            }
        }
    });


 domTitle[0].addEventListener('mouseleave', function(){ DomMnuLiFn('none'); domTitle[0].style.color = '#fff'; });
 domTitle[1].addEventListener('mouseleave', function(){ DomMnuLiFn('none'); domTitle[1].style.color = '#fff';});
 domTitle[2].addEventListener('mouseleave', function(){ DomMnuLiFn('none'); domTitle[2].style.color = '#fff';});
 
 domTitle[4].addEventListener('mouseleave', function(){ DomMnuLiFn('none'); domTitle[4].style.color = '#fff';});
 
 domTitle[0].addEventListener('focus', function(){ DomMnuLiFn('block'); });

