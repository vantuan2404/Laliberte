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
            pagination:false,
            autoplay: true,
            drag:true
        } ).mount();

        function getIndexDotted(){
            let arrayDotted = [];
            document.querySelectorAll('.sec-4 .dotted li')
            .forEach(x=>{
                let data = x.getAttribute('data-list');
                arrayDotted.push(data)
            })
            return arrayDotted;
        }

       setInterval(()=>{
            splide.on('moved',i=>{
                getIndexDotted().map(x=>{
                    if((i+1) == x){
                        $('.sec-4 .dotted li.active').removeClass('active');
                        document.querySelectorAll('.sec-4 .dotted li')[i]
                        .classList.add('active');
                    }
                })
            })
       },1000)


    }
    slideHome();
})