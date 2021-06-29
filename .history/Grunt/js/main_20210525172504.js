$(document).ready(()=>{
    ///scroll header
    let scrollHeader = ()=>{
        let scroll = document.documentElement.scrollTop;
        if(scroll >= 100){
           Add();
        }
        else{
            Remove();
        }
    }
    scrollHeader();

    let Add = ()=>{
        let header = $('header');
        header.addClass('headerActive');
    }
    let Remove = ()=>{
        let header = $('header');
        header.removeClass('headerActive');
    }
})