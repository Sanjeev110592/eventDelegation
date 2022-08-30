/*   ---FirstBox---   */
let firstBox = document.querySelectorAll('.first li') ;

function handler(el,ind,event){
    event.target.innerText = ind+1 ;
    setTimeout(() =>{
        event.target.innerText = "" ;
    },2000) ;
}


firstBox.forEach((elem,index) => {
    elem.addEventListener('click',function(event){
        handler(elem,index,event) ;
    })
});

/*   ---secondBox---   */


let secondBox = document.querySelector('.second') ;

secondBox.addEventListener('click',(event) =>{
    event.target.innerText = event.target.dataset.text ;
    setTimeout(() =>{
        event.target.innerText = "" ;
    },2000) ;
})