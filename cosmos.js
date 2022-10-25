const sun = document.querySelector('#sun')

const sunX = 800
const sunY = 450

const px = (n) => n + 'px'
const rad = (deg, speed) => deg * speed / 180

sun.style.left = px(sunX)
sun.style.top = px(sunY)


function setPlanet(id, radius, speed, startDeg=0, direction='noclock') {
    let deg = startDeg
    const planet = document.querySelector('#' + id)
    const increment = direction == 'noclock' ? -1 : 1
    setInterval(() => {
        const x = sunX + radius * Math.cos(rad(deg, speed))
        const y = sunY + radius * Math.sin(rad(deg, speed))
        planet.style.left = px(x)
        planet.style.top = px(y)
        deg += increment
    }, 10);
}

function setSatellite(id, planetId, radius, speed, startDeg=0, direction='noclock') {
    let deg = startDeg
    const satellite = document.querySelector('#' + id)
    const increment = direction == 'noclock' ? -1 : 1
    const planet = document.querySelector('#'+planetId)
    setInterval(() => {
        const planetX = Number(planet.style.left.slice(0, -2))
        const planetY = Number(planet.style.top.slice(0, -2))
        const x = planetX + radius * Math.cos(rad(deg, speed))
        const y = planetY + radius * Math.sin(rad(deg, speed))
        satellite.style.left = px(x)
        satellite.style.top = px(y)
        deg += increment
    }, 10);
}

setPlanet('earth', 200, 3, 200)
setPlanet('mercury', 100, 2, 100)
setPlanet('venera', 150, 2.5, 150)
setPlanet('mars', 270, 2.7, 350)
setPlanet('jupyter', 310, 2.6, 0)
setPlanet('saturn', 380, 1.8, 50)
setPlanet('uranus', 430, 1.3, 300)
setPlanet('neptun', 490, 2.2, 220)
setSatellite('moon', 'earth', 25, 10)


const stars = document.querySelector('#stars')
const screenWidth = stars.offsetWidth;
const screenHeight =stars.offsetHeight;
for (let i=0; i < 500; i++) {
    const star = document.createElement('div')
    star.classList.add('star')
    const x = Math.round(Math.random() * screenWidth)
    const y = Math.round(Math.random() * screenHeight)
    const delay = Math.round(Math.random() * 200) / 100
    const size = Math.floor(1 + Math.random() * 4)

    star.style.left = px(x)
    star.style.top = px(y)
    star.style.width = px(size)
    star.style.height = px(size)
    star.style.animationDelay = delay + 's'
    stars.append(star)
}

setTimeout(() => {
    const meteor = document.querySelector('.meteor')
    meteor.classList.add('meteor-action')
}, 3000);