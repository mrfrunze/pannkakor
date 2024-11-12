// ScrollReveal animations
ScrollReveal({ 
    reset: true,
    distance:"60px",
    duration: 2500,
    delay: 100
});

ScrollReveal().reveal(".recipe-title", {delay:300, origin: "top"});
ScrollReveal().reveal(".description", {delay:500, origin: "top"});
ScrollReveal().reveal(".ingredients-list", {delay:300, origin: "left"});
ScrollReveal().reveal(".steps-list", {delay:300, origin: "right"});
ScrollReveal().reveal(".fst--elem", {delay:300, origin: "left"});
ScrollReveal().reveal(".snd--elem", {delay:300, origin: "right"});

