const container=document.querySelector('.container');
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
    if(target.classList.value=='col') target.classList.add('colour');
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
        changeSquareNumber(num);
    }
})