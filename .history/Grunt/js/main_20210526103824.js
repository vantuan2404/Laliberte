$(document).ready(()=>{
    ///scroll header
    $(this).on('scroll',()=>{
        let scroll = document.documentElement.scrollTop;
        let header = $('header');
        (scroll >= 100){
            header.addClass('headerActive');
        }
        else{
            header.removeClass('headerActive');
        }
    })
})