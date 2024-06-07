var index=0;
function changeColors(){
    var colors=["red","green","orange","green","purple","pink"];
    document.getElementsByTagName("body")[0].style.background=colors[index++];
    
    if(index>colors.length-1){
        index=0;
    }
}
let b=document.querySelector(".btn").addEventListener("click",changeColors);

