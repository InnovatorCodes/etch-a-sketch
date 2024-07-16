const container=document.querySelector('.container');
let randomizeColor=false;
let incrementing=false;
let squares=4;
for(let i=0;i<4;i++){
    const rowdiv=document.createElement('div');
    rowdiv.classList.add('row');
    rowdiv.setAttribute('id',`${i}`);
    for(let j=0;j<4;j++){
        const coldiv=document.createElement('div');
        coldiv.classList.add('col')
        coldiv.setAttribute('id',`${j}`)
        rowdiv.appendChild(coldiv);
    }
    container.appendChild(rowdiv);
}
container.addEventListener('mouseover',(event)=>{
    const target=event.target;
    if(target.classList.value=='col' && !target.classList.contains('colour')){
        target.classList.add('colour');
        let r=Math.floor(Math.random()*255);
        let g=Math.floor(Math.random()*255);
        let b=Math.floor(Math.random()*255);
        if(randomizeColor) target.style.backgroundColor='rgb('+r+','+g+','+b+')';
        if(incrementing) target.style.opacity='0.1';  
    } 
    else if(target.classList.contains('col') && parseFloat(target.style.opacity)<1){
        let op=parseFloat(target.style.opacity);
        op+=0.1;
        target.style.opacity=''+op;
    }

})
function changeSquareNumber(num){
    while(container.firstChild){
        container.removeChild(container.firstChild);
    }
    let ht=180*4/num;
    for(let i=0;i<num;i++){
        const rowdiv=document.createElement('div');
        rowdiv.classList.add('row');
        rowdiv.setAttribute('id',`${i}`);
        for(let j=0;j<num;j++){
            const coldiv=document.createElement('div');
            coldiv.classList.add('col')
            coldiv.setAttribute('id',`${j}`)
            coldiv.style.width=ht+'px';
            rowdiv.appendChild(coldiv);
        }
        rowdiv.style.height=ht+'px';
        container.appendChild(rowdiv);
    }
}
const changeButton=document.querySelector('button.change');
changeButton.addEventListener('click',()=>{
    num=Number(prompt('Enter New Number of Squares per Side (max 100 squares):'));
    if(num){
        num=(num>100)?100:num;
        squares=num;
        changeSquareNumber(num);
    }
})

const randcolour=document.querySelector('.random');
randcolour.addEventListener('click',()=>{
    randcolour.classList.toggle('clicked');
    randomizeColor=!randomizeColor;
})
const increment=document.querySelector('.increment');
increment.addEventListener('click',()=>{
    increment.classList.toggle('clicked');
    incrementing=!incrementing;
})