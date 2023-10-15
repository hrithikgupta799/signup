var img=document.querySelector("img")
var next=document.querySelector("#next")
var back=document.querySelector("#back")
var h1=document.querySelector("h1")


var image=[
         { pic:"./image/team.jpg",
             pname:"Team India"},
         { pic:"./image/rohit.webp",
             pname:"Rohit Sharma"},
         { pic:"./image/shikhar.webp",
             pname:"Shikhar Dhawan"},
         { pic:"./image/Virat.avif",
             pname:"Virat Kohli"},
         { pic:"./image/suryakumar.jpg",
             pname:"Suryakumar Yadav"},
         { pic:"./image/hardik.jpg",
             pname:"Hardik Pandya"},
         { pic:"./image/dhoni.jpg",
             pname:"MS Dhoni"},
         { pic:"./image/jadeja.jpg",
             pname:"Ravindra Jadeja"},
         { pic:"./image/ashwin.jpg",
             pname:"Ravichandran Ashwin"},
         { pic:"./image/Bhuvneshwar.webp",
             pname:"Bhuvneshwar Kumar"},
         { pic:"./image/shami.webp",
             pname:"Mohammed Shami"},
         { pic:"./image/bumrah.webp",
             pname:"Jasprit Bumrah"}]
var index=0
// next.addEventListener("click",()=>{
//     index=(index+1)%storage.length
//     console.log(index)
//     img.src=`${image[index]}`
// })
back.addEventListener("click",()=>{
    index=(index+1)%image.length
    console.log(index)
    img.src=`${image[index].pic}`
    h1.innerHTML=`${image[index].pname}`
})

next.addEventListener("click",()=>{
    index=(index-1)%image.length
    if(index<0){
        index=image.length-1
        
    }
    console.log(index)
    img.src=`${image[index].pic}`
    h1.innerHTML=`${image[index].pname}`
})
// back.addEventListener("click",()=>{
//     index=(index-1)%storage.length
//     console.log(index)
//     img.src=`${image[index]}`
// })