const trickBtn = document.getElementById('trick');
const btnContainer = document.querySelector('.btn-container');

//setting it initially
btnContainer.style.flexDirection = 'row';

trickBtn.addEventListener('mouseover', (e) => {
    const currentDir = btnContainer.style.flexDirection;
    if(currentDir === 'row'){
        btnContainer.style.flexDirection ='row-reverse';
    }
    else{
        btnContainer.stle.flexDirection ='row'
    }
})

