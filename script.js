let display = document.querySelector('.display') ;
let buttons = document.querySelector('.buttons');
let boxes = document.querySelectorAll('.nums') ;
let initial = 0 ;
display.innerText = initial ;
// print = initial ;

function handler(el){
    if(el.classList.contains('clear')){
        display.innerText = initial ;
        return ;
    }if(el.classList.contains('exp')){
        display.innerText += "**" ;
        return ;
    }if(el.classList.contains('cal')){
        display.innerText = eval(display.innerText) ;
        return ;
    }if(display.innerText==initial){
        display.innerText = el.innerText ;
        // return ;
    }else{
        display.innerText += el.innerText ;
        // return ;
    }
}

boxes.forEach((elem)=>{
    elem.addEventListener('click',()=>{
        handler(elem) ;
    })
})