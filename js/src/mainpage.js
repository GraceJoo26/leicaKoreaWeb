(function($){

    /* //메뉴slide만들기
    const wrap = document.querySelector('#wrap');//전체 감싼 박스
    const titleUl = wrap.querySelector('.gnb');//제목들어간 Ul
    const gnbTitle = titleUl.querySelector('.gnb_title');//gnb제목
    const gnbMenu = document.querySelector('.gnb_menu'); //gnb메뉴박스
    const gnbMenuLi = gnbMenu.querySelectorAll('li');//숨긴메뉴들
 */
    //메뉴 slide만들기

    const gnbUl = $('.gnb');
    const gnbTitLi = gnbUl.children('.gnb_title');
    const gnbMenu = gnbTitLi.find('.gnb_menu');
    const gnbMuLi = gnbMenu.find('ul');

    gnbTitLi.on('mouseover hover', function(e){
        e.preventDefault();
        if (gnbMenu.css({display}) == 'none'){
            gnbMenu.show();
        }
    })
    
   
})(jQuery);
