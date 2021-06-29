$(document).ready(()=>{
    ///scroll header
    $(this).on('scroll',()=>{
        let scroll = document.documentElement.scrollTop;
        let header = $('header');
        (scroll >= 100)?
        header.addClass('headerActive'):
        header.removeClass('headerActive');
    })

    /// toggle when click view Faq
    let toggleFaq = ()=>{
        let stackItem = $('.yatch .stack .stack__item .content-head');
        stackItem.on('click',function(){
            stackItem.next().stop().slideUp();
            $(this).next().stop().slideToggle();
            $(this).find('img').toggleClass('active');
        })
    }
    toggleFaq();

    /// btn menu mobile screen
    let btnMenu = ()=>{
        $('header .mobile .mobile__top-hambuger')
        .on('click',function(){
            $(this).toggleClass('btnActive');
            $('header .mobile__nav').toggleClass('navActive');
        })
    }
    btnMenu();

    let selectedFilterTour = ()=>{
        let btnFilter = $('.tour .filter .filter__btn');
        btnFilter.on('click',function(){
            $('.tour .filter .filter__select').next().stop().slideUp();
            $(this).next().stop().slideToggle();
            $(this).find('img').toggleClass('active');
            $(this).find('.current__select')
        })
}

selectedFilterTour();

    /// slide Home intro
    let slideHome = ()=>{
        var splide = new Splide( '.splide', {
            type   : 'loop',
            perPage: 3,
            perMove: 1,
            arrows:false,
            pagination:false,
            drag:true
        } ).mount();
    

        /// viewport 
        if($(window).width() < 768){
            splide._o.perPage = 1;
        }
        else{
            splide._o.perPage = 3;
        }


        function getIndexDotted(){
            let arrayDotted = [];
            document.querySelectorAll('.sec-4 .dotted li')
            .forEach(x=>{
                let data = x.getAttribute('data-list');
                arrayDotted.push(data)
            })
            return arrayDotted;
        }
        splide.on('moved',i=>{
            getIndexDotted().map(x=>{
                if((i+1) == x){
                    $('.sec-4 .dotted li.active').removeClass('active');
                    document.querySelectorAll('.sec-4 .dotted li')[i]
                    .classList.add('active');
                }
            })
        })

    }
    slideHome();

    /// select Travel homepage
    let selectedTravel = ()=>{
        let selectLocation = $('.home .banner .find-left');
        let selectPeople = $('.home .banner .find-right');

        selectLocation.on('click',function(){
            $('.home .find .location').stop().slideUp();
            $(this).find('.location').stop().slideToggle();
            $('.home .banner .find-left .down .arrow').toggleClass('active');
        })

        selectPeople.on('click',function(){
            $('.home .find .people').stop().slideUp();
            $(this).find('.people').stop().slideToggle();
            $('.home .banner .find-right .down .arrow').toggleClass('active');
        })
        
    }
    selectedTravel();


    
   
    

})