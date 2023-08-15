gsap.from(".skill img" ,{
    scale: 0,
    delay:1,
    duration:1.2,
    stagger:0.32,
    scrollTrigger:{
        trigger: ".skill img",
        scroller: "body"
    }
})

gsap.from(".edu-sec" ,{
    scale: 0,
    delay:1,
    duration:1.2,
    stagger:0.32,
    scrollTrigger:{
        trigger: ".edu-sec",
        scroller: "body"
    }
})

gsap.from(".cards a" ,{
    scale: 0,
    delay:1,
    duration:2,
    stagger:0.5,
    scrollTrigger:{
        trigger: ".cards a",
        scroller: "body"
    }
})