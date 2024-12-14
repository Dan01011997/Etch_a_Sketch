const container=document.querySelector(".gridBox");
const buttonPannel=document.querySelector(".buttonpannel");
const buttonGrid = document.createElement("button");
const buttonEraser=document.createElement("button");
const buttonMarker=document.createElement("button");

buttonPannel.style.height=`${window.innerHeight}px`;
buttonPannel.style.flex=1;
buttonGrid.textContent="GRID";
buttonGrid.style.fontSize="60px";
buttonPannel.appendChild(buttonGrid);
buttonEraser.textContent="ERASER";
buttonEraser.style.fontSize="30px";
buttonPannel.appendChild(buttonEraser);
buttonMarker.textContent="MARKER";
buttonMarker.style.fontSize="30px";
buttonPannel.appendChild(buttonMarker);

let flag=1;
if(flag==1){
    makeGrid(16);
    makeSketch();
    flag++;
console.log("hey")
}
buttonGrid.addEventListener("click",takeGridNumber)
function takeGridNumber(){

    let gridValue=prompt("Enter the grid segmentation.",16);

    if(gridValue && gridValue<=100){
        flag++;
        flagEraser=0;
        flagMarker=0;
       removeprevGrid();
    makeGrid(gridValue);
    makeSketch();
   
}
else
{
    takeGridNumber();
}
}


function makeGrid(value){
    const computedWidth = window.getComputedStyle(container).width;

    for(let i=0;i<value*value;i++){

                const div=document.createElement("div");
                div.classList.add(i);
                div.style.width=`${parseInt(computedWidth)/value}px`;
            
               
                div.style.height=`${window.innerHeight/value}px`
                container.appendChild(div);
            }
        

    }
    function makeSketch(){
        Array.from(container.children).forEach((div) => 
            {
                console.log("yo")
    
           // div.addEventListener("mouseleave",resetDiv);
           div.addEventListener("mousedown",(e)=>{
            console.log("bdas")
            container.addEventListener("mousemove",hover);

           });

       // container.addEventListener("ontouchmove",hover); 

        });
    }

    function hover(e){ 
        e.preventDefault();
        console.log(e.buttons)
        if (e.buttons == 0) {
            container.removeEventListener("mousemove", hover);
          } 
           e.target.style.backgroundColor=getPen();
           console.log(`flageraser; ${flagEraser} flag marker: ${flagMarker}`)
           //`rgb(${Math.random()*(e.clientX+e.clientY)},${Math.random()*(e.clientX+e.clientY)},${Math.random()*(e.clientX+e.clientY)}`;
           if(e.target.style.opacity)
            e.target.style.opacity=`${Math.min(parseFloat(e.target.style.opacity)+0.1*parseFloat(e.target.style.opacity),1)}`;
          else
          e.target.style.opacity=0.55;
        console.log(e.target.style.opacity);
        } 
        
    function resetDiv(e){
            e.target.style.backgroundColor="beige";
    
           }

function removeprevGrid(){
    if(container.firstChild){
        container.firstChild.remove();
removeprevGrid();
    }
    return;
}
let flagMarker=0;
let flagEraser=0;
function choosePen(){
    buttonMarker.addEventListener("click",()=>{
        flagMarker=1;
        flagEraser=0;

        getPen();
    });
    buttonEraser.addEventListener("click",()=>{
        flagEraser=1;
        flagMarker=0;

        getPen();
        console.log('hey')
    });
}
function getPen(){
if(flagMarker===1){
buttonMarker.style.background="gray";
buttonEraser.style.background="beige";
    return "black";
    
}
if(flagEraser===1)
{
    buttonEraser.style.background="gray";
    buttonMarker.style.background="beige";


    return "beige";}
}
choosePen();