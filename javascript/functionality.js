
let width = 16;
let height = 16;
let tmpdiv;
let tmpchild;
let modificarGrid = false;
let rawText = "";
let txtGridSize;
let divs;

createDivs(16, 16);

function random_rgba() {
    var o = Math.round, r = Math.random, s = 255;
    return 'rgba(' + o(r()*s) + ',' + o(r()*s) + ',' + o(r()*s) + ',' + r().toFixed(1) + ')';
}

function createDivs(height, width){

    

    document.querySelectorAll('.container').forEach(element => {
        element.remove();
    });


    for(let i = 0; i < height; i++){

        tmpdiv = document.createElement('div');
        tmpdiv.classList.add('container');
        document.body.appendChild(tmpdiv);
        
        for (let j=0; j < width; j++){

            tmpchild = document.createElement('div')
            tmpchild.classList.add('borderDiv');
            tmpdiv.appendChild(tmpchild);
            
        }
    }

    divs = document.querySelectorAll('.borderDiv');

    
    divs.forEach(d => {

        d.addEventListener('mouseover', changeColor);

    });
}

function changeColor(event)
{
    var hoveredDiv = event.target;
    let color = random_rgba();
    hoveredDiv.style.backgroundColor = color;

}

const btn = document.querySelector('#btnTamanio');



btn.addEventListener('click', () => {
    rawText = prompt("Enter the grid size separated by a comma.");

    txtGridSize = rawText.split(',');

    if(txtGridSize == null){
        createDivs(16,16);
    }
    else
    {
        if(parseInt(txtGridSize[0]) < 100 && parseInt(txtGridSize[1]) < 100){
            createDivs(parseInt(txtGridSize[0]),parseInt(txtGridSize[1]));
        }else
            createDivs(parseInt(16),parseInt(16));
        
    }
})



