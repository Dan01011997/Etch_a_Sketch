const container=document.querySelector(".gridBox");
const button = document.createElement("button");
button.style.height=`${window.innerHeight}px`;
button.style.flex=1;
button.textContent="GRID";
button.style.fontSize="90px";
let array=[256];
let flag=1;
if(flag==1){
    makeGrid(16);
    flag++;
console.log("hey")
}
button.addEventListener("click",()=>{
   

    let gridValue=prompt("Enter the grid segmentation.",16);

    if(gridValue){
        flag++;
       removeprevGrid();
    makeGrid(gridValue);
    array.push(gridValue*gridValue);}
})
document.body.appendChild(button)
function makeGrid(value){
    const computedWidth = window.getComputedStyle(container).width;

    for(let i=0;i<value*value;i++){
        /*if(value*value>=array[array.length-1]){
            if(i<array[array.length-1] && flag!==1){
                console.log(array[array.length-1])
               container.children[i].style.height=`${window.innerHeight/value}px`
    container.children[i].style.width=`${parseInt(computedWidth)/value}px`;
    
        
            }
            else{
            */
         
                
            //}
      //  }
          //  else
          //  {
                const div=document.createElement("div");
                div.classList.add(i);
                div.style.width=`${parseInt(computedWidth)/value}px`;
            
               
                div.style.height=`${window.innerHeight/value}px`
                container.appendChild(div);
            }
        

    }
    Array.from(container.children).forEach((div) => 
        {div.addEventListener("mouseenter",hover);
        div.addEventListener("mouseleave",resetDiv);
        });
    function hover(e){ 
           e.target.style.backgroundColor="gray";
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




