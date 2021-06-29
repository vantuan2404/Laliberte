$(document).ready(()=>{
    ///scroll header
    let scrollHeader = ()=>{
      
    }
    scrollHeader();

    let scrollHeader = ()=>{
        let scroll = document.documentElement.scrollTop;
        let header = $('header');
        if(scroll >= 100){
            header.addClass('headerActive');
        }
    }
    scrollHeader();
})