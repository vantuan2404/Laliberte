$(document).ready(()=>{
    ///scroll header
    let scrollHeader = ()=>{
        let scroll = document.documentElement.scrollTop;
        if(scroll >= 100){
           Add();
        }
        else{

        }
    }
    scrollHeader();

    let Add = ()=>{
        let header = $('header');
        header.addClass('headerActive');
    }
    et Add = ()=>{
        let header = $('header');
        header.addClass('headerActive');
    }
})