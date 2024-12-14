const container=document.querySelector(".gridBox");
const buttonPannel=document.querySelector(".buttonpannel");
const buttonGrid = document.createElement("button");
const buttonEraser=document.createElement("button");
const buttonMarker=document.createElement("button");
const buttonClear=document.createElement("button");

buttonPannel.style.height=`${window.innerHeight}px`;
buttonPannel.style.flex=1;
buttonGrid.textContent="GRID";
buttonGrid.style.fontSize="60px";
buttonPannel.appendChild(buttonGrid);

buttonEraser.textContent="ERASER";
buttonEraser.style.fontSize="25px";
buttonPannel.appendChild(buttonMarker);

buttonPannel.appendChild(buttonEraser);

buttonMarker.textContent="MARKER";
buttonMarker.style.fontSize="25px";

buttonClear.textContent="CLEAR";
buttonClear.style.fontSize="25px";
buttonPannel.appendChild(buttonClear);

let penMode;
let flag=1;
if(flag==1){
    makeGrid(16);
    makeSketch();
    flag++;
}
buttonGrid.addEventListener("click",takeGridNumber)
function takeGridNumber(){

    let gridValue=prompt("Enter the grid segmentation.",16);

    if(gridValue && gridValue<=100){
        flag++;
       penMode=null;
       removeprevGrid();
    makeGrid(gridValue);
    makeSketch();
    buttonPannel.firstChild.style.background="beige";
    buttonPannel.firstChild.nextSibling.style.background="beige";
   
}
else
{
    takeGridNumber();
}
}


function makeGrid(value){
    const computedWidth = window.getComputedStyle(container).width;
    console.log("hi")
    for(let i=0;i<value*value;i++){

                const div=document.createElement("div");
                div.classList.add(i);
                div.style.width=`${parseInt(computedWidth)/value}px`;
            
               
                div.style.height=`${window.innerHeight/value}px`
                container.appendChild(div);
            }
            choosePen(value);
        

    }
    function makeSketch(){
        Array.from(container.children).forEach((div) => 
            {
               
    
           // div.addEventListener("mouseleave",resetDiv);
           div.addEventListener("mousedown",(e)=>{
            container.addEventListener("mousemove",hover);

           });

       // container.addEventListener("ontouchmove",hover); 

        });
    }

    function hover(e){ 
        e.preventDefault();
        if (e.buttons == 0) {
            container.removeEventListener("mousemove", hover);
          } 
           e.target.style.backgroundColor=getPen();
           if(!getPen() || getPen()==="beige")
           {
            e.target.style.opacity=1;
            return;
           }
          // console.log(`flageraser; ${flagEraser} flag marker: ${flagMarker}`)
           //`rgb(${Math.random()*(e.clientX+e.clientY)},${Math.random()*(e.clientX+e.clientY)},${Math.random()*(e.clientX+e.clientY)}`;
           if(e.target.style.opacity)
            e.target.style.opacity=`${Math.min(parseFloat(e.target.style.opacity)+0.1*parseFloat(e.target.style.opacity),1)}`;
          else
          e.target.style.opacity=0.55;
       
        } 
        

function removeprevGrid(){
    while(container.firstChild){
        container.firstChild.remove();

    }
    return;
}

function choosePen(value){
    buttonMarker.addEventListener("click",()=>{
    
penMode="marker"
        getPen(value);
    });
    buttonEraser.addEventListener("click",()=>{
    
penMode="eraser"
        getPen(value);
    });
    buttonClear.addEventListener("click",()=>{
penMode="clear";
getPen(value)
    })
}

function getPen(value){
if(penMode==="marker"){
buttonMarker.style.background="gray";
buttonEraser.style.background="beige";
buttonClear.style.background="beige";

    return "black";
    
}
else if(penMode==="eraser")
{
    buttonEraser.style.background="gray";
    buttonMarker.style.background="beige";
    buttonClear.style.background="beige";



    return "beige";}
if(penMode==="clear"){
    buttonClear.style.background="gray";
    buttonMarker.style.background="beige";
    buttonEraser.style.background="beige";
    console.log(value)
    removeprevGrid();
    makeGrid(value)
return makeSketch();
}
}


