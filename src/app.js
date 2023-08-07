document.addEventListener('mousemove', ev => {
    Object.assign(document.documentElement, {
        style: `
        --move-x: ${(ev.clientX - window.innerWidth / 2) * -.005}deg;
        --move-y:${(ev.clientY - window.innerHeight / 2) * -.01}deg;
        `
        // обратные кавычки нужны для того, чтобы по средству интерполяции передать переменные
    })
})
