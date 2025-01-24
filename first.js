const scroll = new LocomotiveScroll({
  el: document.querySelector('#main'),
  smooth: true
});

function videoAnimaton(){
  var videocon=document.querySelector("#video-container")

var playbtn = document.querySelector("#play")

videocon.addEventListener("mouseenter",function(){
   gsap.to(playbtn,{
    scale:1,
    opacity:1
    })
})

videocon.addEventListener("mouseleave",function(){

gsap.to(playbtn,{
    scale:0,
    opacity:0
  })
})

videocon.addEventListener("mousemove",function(dets){

gsap.to(playbtn,{
  left:dets.x,
  top:dets.y
  })
})

}
videoAnimaton() 

function lodingAnimation(){
  gsap.from(".page1 h1 ",{
    y:-300,
    opacity:0,
    delay:0.4,
    duration:0.8,
    stagger:0.5,
    scale:0.9
    })
} 
lodingAnimation()

document.addEventListener("mousemove",function(dets){
gsap.to("#cursor",{       
  top:dets.y,
  left:dets.x
 })
})

document.querySelector("#main").addEventListener("mouseenter",function(){
  gsap.to("#cursor",{
    transform:'translate(-50%,-50%)scale(1)'
  })
})