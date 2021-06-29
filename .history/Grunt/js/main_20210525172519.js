$(document).ready(()=>{
    ///scroll header
    let scrollHeader = ()=>{
        let scroll = document.documentElement.scrollTop;
        let header = $('header');
        if(scroll >= 100){
            header.addClass('headerActive');
        }
        else{
            header.removeClass('headerActive');
        }
    }
    scrollHeader();

    let Add = ()=>{
        let header = $('header');
    }
    let Remove = ()=>{
        let header = $('header');
        header.removeClass('headerActive');
    }
})