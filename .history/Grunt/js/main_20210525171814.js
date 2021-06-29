$(document).ready(()=>{
    ///scroll header
    let scrollHeader = ()=>{
        let scroll = document.documentElement.scrollTop;
        let header = $('header');
        (scroll >= 100)?
        header.addClass('headerActive') :
        if(scroll >= 100){
        header.addClass('headerActive');

        }
        else{
        header.removeClass('headerActive');

        }
    }
    scrollHeader();
})