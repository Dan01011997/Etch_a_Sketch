const container=document.querySelector(".gridBox");
const button = document.createElement("button");
button.style.height=`${window.innerHeight}px`;
button.style.flex=1;
button.textContent="GRID";
button.style.fontSize="90px";
let flag=1;
if(flag==1){
    makeGrid(16);
    makeSketch();
    flag++;
console.log("hey")
}
button.addEventListener("click",takeGridNumber)
function takeGridNumber(){

    let gridValue=prompt("Enter the grid segmentation.",16);

    if(gridValue && gridValue<=100){
        flag++;
       removeprevGrid();
    makeGrid(gridValue);
    makeSketch();
   
}
else
{
    takeGridNumber();
}
}


document.body.appendChild(button)
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
           e.target.style.backgroundColor="black";
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