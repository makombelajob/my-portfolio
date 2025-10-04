
window.onload = function () {
    particlesJS('particles-js', {
        "particles": {
            "number": { "value": 80, "density": { "enable": true, "value_area": 800 } },
            "color": { "value": "#ffffff" },
            "shape": {
                "type": "triangle",
                "stroke": { "width": 0, "color": "#000000" }
            },
            "opacity": { "value": 0.7 },
            "size": { "value": 6, "random": true },
            "line_linked": { "enable": true, "distance": 150, "color": "#ffffff", "opacity": 0.4, "width": 1 },
            "move": { "enable": true, "speed": 2 }
        },
        "interactivity": {
            "events": {
                "onhover": { "enable": true, "mode": "repulse" },
                "onclick": { "enable": true, "mode": "push" }
            },
            "modes": { "repulse": { "distance": 100 }, "push": { "particles_nb": 4 } }
        },
        "retina_detect": true
    });
    particlesJS('particles-skills', {
        "particles": {
            "number": { "value": 40, "density": { "enable": true, "value_area": 600 } },
            "color": { "value": "#00ffcc" },
            "shape": {
                "type": "circle", // On change le style, par ex. des cercles
                "stroke": { "width": 0, "color": "#00ffcc" }
            },
            "opacity": { "value": 0.6 },
            "size": { "value": 5, "random": true },
            "line_linked": { "enable": true, "distance": 120, "color": "#00ffcc", "opacity": 0.3, "width": 1 },
            "move": { "enable": true, "speed": 2 }
        },
        "interactivity": {
            "events": {
                "onhover": { "enable": true, "mode": "grab" },
                "onclick": { "enable": true, "mode": "push" }
            },
            "modes": { "grab": { "distance": 150, "line_linked": { "opacity": 0.5 } }, "push": { "particles_nb": 4 } }
        },
        "retina_detect": true
    });
    

    particlesJS('particles-contact', {
        "particles": {
            "number": { "value": 30, "density": { "enable": true, "value_area": 500 } },
            "color": { "value": "#ff66cc" },
            "shape": { "type": "circle", "stroke": { "width": 0, "color": "#ff66cc" } },
            "opacity": { "value": 0.6 },
            "size": { "value": 4, "random": true },
            "line_linked": { "enable": true, "distance": 100, "color": "#ff66cc", "opacity": 0.4, "width": 1 },
            "move": { "enable": true, "speed": 1, "direction": "none", "random": true, "straight": false, "bounce": false }
        },
        "interactivity": {
            "events": {
                "onhover": { "enable": true, "mode": "grab" },
                "onclick": { "enable": true, "mode": "push" }
            },
            "modes": { "grab": { "distance": 120, "line_linked": { "opacity": 0.6 } }, push: { "particles_nb": 4 } }
        },
        "retina_detect": true
    });
}