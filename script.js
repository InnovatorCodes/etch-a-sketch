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