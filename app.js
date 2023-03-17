const img=document.querySelector('img');
const container=document.querySelector(".container");

img.addEventListener("mouseenter",()=>{
    img.classList.add('clip-animation');
})

container.addEventListener("mouseleave",(e)=>{
    if(!container.contains(e.relatedTarget)){
        img.classList.remove('clip-animation');
        
        
    }
})