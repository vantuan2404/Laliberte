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
        const splide = new Splide( '.splide', {
            type   : 'loop',
            perPage: 3,
            perMove: 1,
            arrows:false,
            pagination:false
        } ).mount();

        // $('.sec-4 .slide .slide__list-item').each(i=>{
        //     $('.sec-4 .dotted ul').append('<li><span></span></li>')
        // })

        splide.on('moved',i=>{
            if(i === 0){
                $('.sec-4 .dotted ul li')[0].addClass('active')
            }
            else if(i === 1){
                $('.sec-4 .dotted ul li').addClass('active')
            }
        })


    }
    slideHome();
})