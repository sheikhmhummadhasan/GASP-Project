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
        end:"bottom 20%",
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
        end:"bottom 20%",
        scrub:2,
    }
})
gsap.from(".happen .happy h3, .happy p, #hero",{
    y:-30,
    duration:1,
    opacity:0,
    stagger:0.6,
    scrollTrigger:{
        scroller:"body",
        trigger:".happy",
        start:"top 80%",
        end:"bottom 20%",
        scrub:2,
    }
})
gsap.from(".a,.case p, .csae h1",{
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
gsap.from(".footer-container,.f-card",{
    y:80,
    duration:1,
    opacity:0,
    // stagger:0.3,
    scrollTrigger:{
        scroller:"body",
        trigger:".footer-container",
        start:"top 90%",
        markers:true,
        end:"bottom 0%",
        scrub:2,
    }
})

