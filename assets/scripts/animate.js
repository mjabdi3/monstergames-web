
window.onload = (event) => {



    let tween0 = gsap.fromTo(".animated-big-monster", {scale:0.5, x:-2000} , { x: 0, scale: 1,  duration: 1, repeat: 0, delay: 2 , ease: "none", paused: false });
    let tween0_1 = gsap.to(".animated-big-monster", { x: 2000, scale: 0.5,  duration: 1, repeat: 0, delay: 4 , ease: "none", paused: false });



    let tween1 = gsap.to(".animated-monster1", {  y: 50, duration: 1, repeat: -1, yoyo: true, ease: "none", paused: false });

    let tween2 = gsap.to(".animated-howtoplay", {  y: -30, duration: 2, repeat: -1, yoyo: true, ease: "none", paused: false });

    let tween3 = gsap.to(".animated-passion", {  rotation: -1, x: -5, duration: 1, repeat: -1, yoyo: true, ease: "back.out(1.7)", paused: false });
   
    let tween4 = gsap.to(".animated-brawn", {  y: -5, x: -15, duration: 1.5, repeat: -1, yoyo: true, ease: "slow(0.7, 0.7, false)", paused: false });

    let tween5 = gsap.to(".animated-thrust", {  opacity: 0, duration: 5, repeat: -1, yoyo: true, ease: "bounce.out", paused: false });

    let tween6 = gsap.to(".animated-dexterity", {  x: -50, duration: 1, repeat: -1, yoyo: true, ease: "rough({ strength: 1, points: 20, template: none.out, taper: none, randomize: true, clamp: false })", paused: false });


    let tween7 = gsap.fromTo(".animated-rara", {rotation: 30 }, {  rotation: -30, y: -20, duration: 2, repeat: -1, yoyo: true, ease: "sine.out", paused: false }) 

    let tween8 = gsap.fromTo(".animated-roadmapq3", {rotation:-30}, { opacity:1,  x: 200, y: -50, rotation:20, duration: 1, repeat: -1, yoyo: true, ease: "elastic.out(1, 0.3)" , paused: false });

    let tween9 = gsap.to(".animated-dexterity2", {  x: 100, y: -500, opacity: 0 ,  duration: 3, repeat: -1, yoyo: false, ease: "power3.out", paused: false });


    setTimeout(() => {
        $(window).trigger('resize');
    }, 5000);

};


function scrollToElement (id) {
    var elmnt = document.getElementById(id);
    elmnt.scrollIntoView();
}
