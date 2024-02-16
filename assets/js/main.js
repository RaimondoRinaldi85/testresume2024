// animazione da sinistra
const imagesleft = document.querySelectorAll('.animleft');

observer = new IntersectionObserver((entries) => {

    entries.forEach(entry => {

        if (entry.intersectionRatio > 0) {
            entry.target.style.animation = `animleft .5s ${entry.target.dataset.delay} forwards ease-out`;
        }
        else {
            entry.target.style.animation = 'none';
        }
    })
})

imagesleft.forEach(image => {

    observer.observe(image)
})

// fadein
const imagesin = document.querySelectorAll('.fadein');

observer = new IntersectionObserver((entries) => {

    entries.forEach(entry => {

        if (entry.intersectionRatio > 0) {
            entry.target.style.animation = `fadein .5s ${entry.target.dataset.delay} forwards ease-out`;
        }
        else {
            entry.target.style.animation = 'none';
        }
    })
})

imagesin.forEach(image => {

    observer.observe(image)
})

// animazione da destra
const imagesright = document.querySelectorAll('.animright');

observer = new IntersectionObserver((entries) => {

    entries.forEach(entry => {

        if (entry.intersectionRatio > 0) {
            entry.target.style.animation = `animright .5s ${entry.target.dataset.delay} forwards ease-out`;
        }
        else {
            entry.target.style.animation = 'none';
        }
    })
})

imagesright.forEach(image => {

    observer.observe(image)
})
