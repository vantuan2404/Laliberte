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

})