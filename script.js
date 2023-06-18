function init() {
    gsap.registerPlugin(ScrollTrigger);

    // Using Locomotive Scroll from Locomotive https://github.com/locomotivemtl/locomotive-scroll

    const locoScroll = new LocomotiveScroll({
        el: document.querySelector("#main"),
        smooth: true,
    });
    // each time Locomotive Scroll updates, tell ScrollTrigger to update too (sync positioning)
    locoScroll.on("scroll", ScrollTrigger.update);


    // tell ScrollTrigger to use these proxy methods for the "#main" element since Locomotive Scroll is hijacking things
    ScrollTrigger.scrollerProxy("#main", {
        scrollTop(value) {
            return arguments.length ? locoScroll.scrollTo(value, 0, 0) : locoScroll.scroll.instance.scroll.y;
        }, // we don't have to define a scrollLeft because we're only scrolling vertically.
        getBoundingClientRect() {
            return {
                top: 0,
                left: 0,
                width: window.innerWidth,
                height: window.innerHeight
            };
        },
        // LocomotiveScroll handles things completely differently on mobile devices - it doesn't even transform the container at all! So to get the correct behavior and avoid jitters, we should pin things with position: fixed on mobile. We sense it by checking to see if there's a transform applied to the container (the LocomotiveScroll-controlled element).
        pinType: document.querySelector("#main").style.transform ? "transform" : "fixed"
    });

    // each time the window updates, we should refresh ScrollTrigger and then update LocomotiveScroll. 
    ScrollTrigger.addEventListener("refresh", () => locoScroll.update());

    // after everything is set up, refresh() ScrollTrigger and update LocomotiveScroll because padding may have been added for pinning, etc.
    ScrollTrigger.refresh();

}

init()

//------------------nav bar effect-----------------------
gsap.to("#nav h1",{
    y:-50,
    scrollTrigger:{
        trigger:"#page1",
        scroller:"#main",
        // markers:true,
        scrub:1,
        start:"35% 28%",
        end:"20% 10%",
    },
    opacity:0,
})
//--------------------page2----------------------------------
var hh1 = document.querySelector("#h1");
var hh2 = document.querySelector("#h2");
var hh3 = document.querySelector("#h3");
hh1.addEventListener("mouseenter",function(){
    changeColor(hh2,hh3);
})
hh1.addEventListener("mouseleave",function(){
    changeColorBack(hh2,hh3);
})
hh2.addEventListener("mouseenter",function(){
    changeColor(hh1,hh3);
})
hh2.addEventListener("mouseleave",function(){
    changeColorBack(hh1,hh3);
})
hh3.addEventListener("mouseenter",function(){
    changeColor(hh1,hh2);
})
hh3.addEventListener("mouseleave",function(){
    changeColorBack(hh1,hh2);
})
function changeColor(p1,p2){
    p1.style.color = '#d6d6d6';
    p2.style.color = '#d6d6d6';
}
function changeColorBack(p1,p2){
    p1.style.color = '#d11f1f';
    p2.style.color = '#d11f1f';
}
//------page2 - image-eff-------
hh1.addEventListener("mouseenter",function(){
    In_up("#pz-up");
})
hh1.addEventListener("mouseleave",function(){
    Out_up("#pz-up");
})
hh2.addEventListener("mouseenter",function(){
    In_up("#breads-up");
})
hh2.addEventListener("mouseleave",function(){
    Out_up("#breads-up");
})
hh3.addEventListener("mouseenter",function(){
    In_up("#paws-up");
})
hh3.addEventListener("mouseleave",function(){
    Out_up("#paws-up");
})
function In_up(parm){
    gsap.to(`${parm}`,{
        y:"100%"
    })
}
function Out_up(parm){
    gsap.to(`${parm}`,{
        y:"0%"
    })
}

hh1.addEventListener("mouseenter",function(){
    In_down("#pz-down");
})
hh1.addEventListener("mouseleave",function(){
    Out_down("#pz-down");
})
hh2.addEventListener("mouseenter",function(){
    In_down("#breads-down");
})
hh2.addEventListener("mouseleave",function(){
    Out_down("#breads-down");
})
hh3.addEventListener("mouseenter",function(){
    In_down("#paw-down");
})
hh3.addEventListener("mouseleave",function(){
    Out_down("#paw-down");
})
function In_down(parm){
    gsap.to(`${parm}`,{
        y:"-100%"
    })
}
function Out_down(parm){
    gsap.to(`${parm}`,{
        y:"0%"
    })
}
//----------------------page5--------------------------------
// #wholebodyeffect (lupo)
gsap.from("#lupo-pg",{
    scrollTrigger:{
        trigger:"#page5",
        scroller:"#main",
        scrub:1,
        // markers:true,
        start:"10% 18%",
        end:"20% 0%",
    },
    y:"-50vh",
})
//img -effect
var a = document.querySelector("#b-h1");
var b = document.querySelector("#b-h2");
var c = document.querySelector("#b-h3");

a.addEventListener("mouseenter",function(){
    img_bounce_up("#img-1");
})
a.addEventListener("mouseleave",function(){
    img_bounce_down("#img-1");
})
b.addEventListener("mouseenter",function(){
    img_bounce_up("#img-2")
})
b.addEventListener("mouseleave",function(){
    img_bounce_down("#img-2");
})
c.addEventListener("mouseenter",function(){
    img_bounce_up("#img-3")
})
c.addEventListener("mouseleave",function(){
    img_bounce_down("#img-3");
})
function img_bounce_up(parm){
    gsap.to(`${parm}`,{
        y:"-90%"
    })
}
function img_bounce_down(parm){
    gsap.to(`${parm}`,{
        y:"0%",
    })
}
// hove-feffect-in-last-eff
var b_h1 = document.querySelector("#b-h1");
var b_h2 = document.querySelector("#b-h2");
var b_h3 = document.querySelector("#b-h3");
b_h1.addEventListener("mouseenter",function(){
    changeColor(b_h2,b_h3);
})
b_h1.addEventListener("mouseleave",function(){
    changeColorBack(b_h2,b_h3);
})
b_h2.addEventListener("mouseenter",function(){
    changeColor(b_h1,b_h3);
})
b_h2.addEventListener("mouseleave",function(){
    changeColorBack(b_h1,b_h3);
})
b_h3.addEventListener("mouseenter",function(){
    changeColor(b_h1,b_h2);
})
b_h3.addEventListener("mouseleave",function(){
    changeColorBack(b_h1,b_h2);
})
function changeColor(p1,p2){
    p1.style.color = '#d6d6d6';
    p2.style.color = '#d6d6d6';
}
function changeColorBack(p1,p2){
    p1.style.color = '#d11f1f';
    p2.style.color = '#d11f1f';
}




