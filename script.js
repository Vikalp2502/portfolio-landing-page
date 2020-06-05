function myFunction(x){
    if(x.matches){
        document.body.style.zoom="100%";
    }else{
    	document.body.style.zoom="80%";
    }   
} 
if (matchMedia) {
	    const x = window.matchMedia("(max-width: 1020px)");
        x.addListener(myFunction);
        myFunction(x);
}


TweenMax.to(".loader", 2.2, {
    delay: 5,
    top: "-100%",
    ease: Expo.easeInOut
});

TweenMax.from(".logo", 2, {
    delay: 6.4,
    y: 20,
    opacity: 0,
    ease: Expo.easeInOut
});

TweenMax.from(".About", 2, {
    delay: 6.8,
    y: 20,
    opacity: 0,
    ease: Expo.easeInOut
});

TweenMax.from(".menu-btn", 2, {
    delay: 6.8,
    y: 20,
    opacity: 0,
    ease: Expo.easeInOut
});

TweenMax.from(".line", 2, {
    delay: 8.4,
    x: -30,
    opacity: 0,
    ease: Expo.easeInOut
});

TweenMax.from(".line2", 2, {
    delay: 8.4,
    x: -30,
    opacity: 0,
    ease: Expo.easeInOut
});

TweenMax.from(".line3", 2, {
    delay: 8.6,
    x: -30,
    opacity: 0,
    ease: Expo.easeInOut
});

TweenMax.from(".line3_1", 2, {
    delay: 8.4,
    x: -30,
    opacity: 0,
    ease: Expo.easeInOut
});

TweenMax.from(".scrollIndicator", 2, {
    delay: 10,
    y: -10,
    opacity: 0,
    ease: Expo.easeInOut
});

TweenMax.staggerFrom(
    ".social-media ul li",
    2,
    {
        delay: 9.4,
        opacity: 0,
        x: -20,
        ease: Power3.easeInOut
    },
    0.1
);

TweenMax.from(".buttons", 2, {
    delay: 8.4,
    opacity: 0,
    ease: Expo.easeInOut
});

var textWrapper = document.querySelector(".intro-title");
textWrapper.innerHTML = textWrapper.textContent.replace(
    /([^\x00-\x80]|\w)/g,
    "<span class='letter'>$&</span>"
);

anime
    .timeline({ loop: false })
    .add({
        targets: ".intro-title .letter",
        translateX: [140, 0],
        translateZ: 0,
        opacity: [0, 1],
        easing: "easeOutExpo",
        duration: 1400,
        delay: function(el, i) {
            return 500 + 50 * i;
        }
    })
    .add({
        targets: ".intro-title .letter",
        translateX: [0, -140],
        opacity: [1, 0],
        easing: "easeInExpo",
        duration: 1200,
        delay: function(el, i) {
            return 700 + 50 * i;
        }
    });
