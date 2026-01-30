let tl = gsap.timeline();

let tl2 = gsap.timeline();

tl.from(" nav h1 i,nav h1",{
    x:-30,
    duration:0.7,
    scrub:2,
    opacity:0,
    stagger:0.15
})
tl.from(".menu a,.prime-btn",{
    x:-30,
    opacity:0,
    duration:0.4,
    stagger:0.2,
})
tl.from(".info h1,.info p,.hero-btn",{
    y:30,
    opacity:0,
    duration:0.4,
    stagger:0.2
})
tl.from(".hero-Img img",{
    opacity:0,
    x:40,
    duration:1,
    stagger:0.2,
},"<")

gsap.from(".sponsor img",{
     x:-30,
    duration:1,
    stagger:0.3,
    opacity:0,
    scrollTrigger:{
        scroller:"body",
        trigger:".sponsor img",
        start:"top 80%",
        end:"bottom 20%",
        scrub:2
    }
})

gsap.from(".serv-btn,.serv p",{
    opacity:0,
    x:-40,
    duration:1,
    stagger:0.8,
    scrollTrigger:{
        scroller:"body",
        trigger:".serv-btn,.serv p",
        start:"top 70%",
        end:"bottom 20%",
        scrub:2,
    }
})

gsap.from(".container .card11",{
    x:-80,
    duration:1,
    opacity:0,
    scrollTrigger:{
        scroller:"body",
        trigger:".card11",
        start:"top 70%",
        end:"bottom 50%",
        scrub:2,
    }
})
gsap.from(".container .card22",{
    x:80,
    duration:1,
    opacity:0,
    scrollTrigger:{
        scroller:"body",
        trigger:".card22",
        start:"top 70%",
        end:"bottom 50%",
        scrub:2,
    }
})
gsap.from(".happen .happy h3, .happy p, .happy-btn",{
    y:-30,
    duration:0.3,
    opacity:0,
    stagger:0.2,
    scrollTrigger:{
        scroller:"body",
        trigger:".happy",
        start:"top 40%",
        // markers:true,
        end:"bottom 100%",
        scrub:2,
    }
})
gsap.from(".happy-img img",{
    x:70,
    duration:0.8,
    opacity:0,
    scrollTrigger:{
        scroller:"body",
        trigger:".happy-img img",
        start:"top 40%",
        // markers:true,
        end:"bottom 100%",
        scrub:2,
    }
})
gsap.from(".a,.case p, .csae h1 ,.f-card",{
    x:80,
    duration:1,
    opacity:0,
    stagger:0.3,
    scrollTrigger:{
        scroller:"body",
        trigger:".case",
        start:"top 70%",
        end:"bottom 20%",
        scrub:2,
    }
})
gsap.to(".banner",{
  xPercent: -50,
  duration: 1,
  ease: "linear",
  scrollTrigger:{
       trigger:".obj h1",
       scroller:"body",
       start:"top bottom",
       end:"bottom top",
       scrub:1,
  }
})

let curcer = document.querySelector(".curcer")
let body = document.querySelector("body,section")
let svg = document.querySelector("svg")
let path = "M 10 100 Q 90 100 1430 100";
let finalpath = "M 10 100 Q 90 100 1430 100";

svg.addEventListener("mousemove",function(gitter){
    path=`M 10 100 Q ${gitter.x} ${gitter.y} 1430 100`;

    gsap.to("svg path",{
        attr:{d:path},
        duration:0.4,
        ease:"power3.out"
    })
})
svg.addEventListener("mouseleave",function(){
    path=`M 10 100 Q 90 100 1430 100`;

    gsap.to("svg path",{
        attr:{d:path},
    })
})

body.addEventListener("mousemove",(mve)=>{
    gsap.to(curcer,{
        x:mve.x,
        y:mve.y,
        ease: "power3.out"

    })
})




