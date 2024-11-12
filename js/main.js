// ScrollReveal animations
ScrollReveal({ 
    reset: true,
    distance:"60px",
    duration: 2500,
    delay: 100
});

ScrollReveal().reveal(".recipe-title", {delay:300, origin: "top"});
ScrollReveal().reveal(".description", {delay:500, origin: "top"});
ScrollReveal().reveal(".section-title, .ingredient-item, .step-item", {delay:700, origin: "top", interval: 200});
ScrollReveal().reveal(".fst--elem", {delay:500, origin: "left"});
ScrollReveal().reveal(".snd--elem", {delay:500, origin: "right"});

