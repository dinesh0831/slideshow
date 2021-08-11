const image=["image\\image0.jpg","image\\image1.jpg","image\\image2.jpg","image\\image3.jpg","image\\image4.jpg","image\\image5.jpg",]
let index=0;
function img () 
{
    if(index==image.length)
    {
        index=0;
    }
    const imag=document.querySelector(".img");
    imag.setAttribute("src",`${image[index]}`)
    index++; 
}
let interval=setInterval(img,1000*2)
function backward()
{
   if(index==0)
    {
        index=image.length-1;
    }
    const imag=document.querySelector(".img");
    imag.setAttribute("src",`${image[index]}`)
    index--; 
    
    

}
function forward()
{
    if(index==image.length)
    {
        index=0;
    }
    const imag=document.querySelector(".img");
    imag.setAttribute("src",`${image[index]}`)
    index++;
    
}

function hover()
    {
        clearInterval(interval);
        
        
    }
// function start()
// {
    
// setInterval(img,1000*2)
// }



