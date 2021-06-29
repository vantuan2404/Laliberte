$(document).ready(()=>{
    ///scroll header
    let scrollHeader = ()=>{
        let scroll = document.documentElement.scrollTop;
        let header = $('header');
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
    }
    let Remove = ()=>{
        let header = $('header');
        header.removeClass('headerActive');
    }
})