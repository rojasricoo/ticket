poster.addEventListener('mousemove', (e) => {
    let x = e.clientX - poster.offsetLeft;
    let y = e.clientY - poster.offsetTop;

    poster.style.transform = `rotateY(${x / 3}deg) rotateX(${-y / 3}deg)`;
});

poster.addEventListener('touchmove', (e) => {
    let x = e.touches[0].clientX - poster.offsetLeft;
    let y = e.touches[0].clientY - poster.offsetTop;

    poster.style.transform = `rotateY(${x / 3}deg) rotateX(${-y / 3}deg)`;
});  
