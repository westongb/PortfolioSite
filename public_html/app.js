const resumeIntro = document.querySelector(".resumeTextBox");



const tl = new TimelineMax();

tl.fromTo(resumeIntro, 1, {height: "0%"}, {height: "40%",  overwrite: 0 })