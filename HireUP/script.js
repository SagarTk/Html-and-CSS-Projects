gsap.from(".logo , .part1 , .part2 " , {
    y: -100 ,
    duration: 2 ,
    opacity: 0,
    stagger: 0.6,
})

gsap.from(".asset" , {
    y: -100 ,
    duration: 2 ,
    opacity: 0 ,
    stagger: 0.4 ,
    scrollTrigger:{
        trigger: ".asset" ,
        scroller: "body" ,
        start: "top 60%"
    }
})

gsap.from(".smart img" , {
    x: -50 ,
    duration: 1 ,
    opacity: 0 ,
    scrollTrigger:{
        trigger: ".smart img" ,
        scroller: "body" ,
        start: "top 50%"
    }
})

gsap.from(".why-data" , {
    x: 50 ,
    duration: 1.5 ,
    opacity: 0 ,
    scrollTrigger:{
        trigger: ".why-data" ,
        scroller: "body" ,
        start: "top 50%"
    }
})

gsap.from(".explore > h2 , .inner-data" , {
    x: -50 ,
    duration: 1.5 ,
    opacity: 0 ,
    stagger: 0.4 ,
    scrollTrigger:{
        trigger: ".explore > h2 , .inner-data" ,
        scroller: "body" ,
        start: "top 50%"
    }
})