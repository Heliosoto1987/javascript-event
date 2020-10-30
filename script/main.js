'use strict'

function changeMargin(event){
    const selection = event.currentTarget;
    selection.classList.toggle('teacher--selected');
}

function changeSpan(event) {
    const selection = event.currentTarget;
    const select = selection.querySelector('.favorite');
    select.classList.toggle('lol')
    if(select.classList.contains('lol')){
    select.innerHTML = '<span>Quitar</span>'
    } else{
    select.innerHTML = '<span>Añadir</span>'    
    }
}
function funtions(event) {
    changeMargin(event);
    changeSpan(event);
    }


document.querySelector('.teacher--isra').addEventListener('click', funtions);
document.querySelector('.teacher--tuerto').addEventListener('click', funtions);
document.querySelector('.teacher--nasi').addEventListener('click', funtions,);
document.querySelector('.teacher--putis').addEventListener('click', funtions,);
