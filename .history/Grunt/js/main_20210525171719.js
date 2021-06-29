$(document).ready(()=>{
    ///scroll header
    let scrollHeader = ()=>{
        let scroll = document.documentElement.scrollTop;
        let header = $('header');
        (scroll >= 100)?
        header.addClass('headerActive'):
        header.addClass('headerActive')

    }
    scrollHeader();
})