$(document).ready(()=>{
    ///scroll header
    $(this).on('scroll',()=>{
        let scroll = document.documentElement.scrollTop;
        let header = $('header');
        (scroll >= 100)?
        header.addClass('headerActive'):
        header.removeClass('headerActive');
    })

    let btnMenu = ()=>{
        $('header .mobile .mobile__top-hambuger')
        .on('click',function(){
            $(this).toggleClass('btnActive');
            $('header .mobile__nav').toggleClass('navActive');
        })
    }
    btnMenu();

    let slideHome = ()=>{
        new Splide( '.splide', {
            type   : 'loop',
            perPage: 3,
            perMove: 1,
        } ).mount();
    }
    slideHome();
})