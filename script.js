
var crsr = document.querySelector("#cursor");
var crsr_blur = document.querySelector("#cursor-blur");

document.addEventListener("mousemove",function(dets){
    crsr.style.left = dets.x+"px";
    crsr.style.top = dets.y+"px";
    crsr_blur.style.left = dets.x-150+"px";
    crsr_blur.style.top = dets.y-150+"px";
});

var h4All = document.querySelectorAll("#nav h4");
h4All.forEach(function(elem){
        elem.addEventListener("mouseenter",function(){
            crsr.style.scale = 2;
            crsr.style.border = "1px solid #fff";
            crsr.style.backgroundColor = "transparent";
    })
        elem.addEventListener("mouseleave",function(){
            crsr.style.scale = 1;
            crsr.style.border = "none";
            crsr.style.backgroundColor = "rgba(128, 255, 0, 0.601";
    })
});
// h4All.forEach(function(elem){

// });


gsap.to("#nav",{
    backgroundColor: "#000",
    duration: 0.9,
    height: "90px",
    scrollTrigger:{
        trigger: "#nav",
        scroller: "body",
        markers: true,
        start: "top -10%",
        end: "top -11%",
        scrub: 1
    }
});

gsap.to("#main",{
    backgroundColor: "#000",
    scrollTrigger:{
        trigger: "#main",
        scroller: "body",
        // markers: true,
        start: "top -25%",
        end: "top -70%",
        scrub: 2
    }
});



gsap.to("#about_us img, #about",{
    y: 50,
    opacity: 0,
    duration: 1,
    // stagger: 0.4,
    scrollTrigger:{
        trigger: "#about_us",
        scroller: "body",
        start: "bottom 65%",
        end: "bottom 60%",
        scrub: 3
    }
});

// gsap.to("#carts-container, .cart",{
//     y: 50,
//     opacity: 0,
//     duration: 1,
//     stagger: 0.4,
//     scrollTrigger:{
//         trigger: "#carts-container",
//         scroller: "body",
//         start: "bottom 65%",
//         end: "bottom 60%",
//         scrub: 3
//     }
// });