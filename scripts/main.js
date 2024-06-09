const canvas = document.getElementById('canvas_background')
canvas.width = window.innerWidth
canvas.height= window.innerHeight

window.addEventListener('resize', () => {
    canvas.width = window.innerWidth
    canvas.height = window.innerHeight
})

const mouse = {
    x: undefined,
    y: undefined
}

const ctx = canvas.getContext('2d')

const allBirds = []
let hue = 0;
const birdCage = document.getElementById('bird_cage')
const originalBird = document.querySelector('.bird')

canvas.addEventListener('mousemove', (event) => {
    mouse.x = event.x
    mouse.y = event.y
    allBirds.push(new Bird())
    
})

const handleBirds = () => {
    for(let i = 0; i < allBirds.length; i++) {
        allBirds[i].draw()
        allBirds[i].update()
        if(allBirds[i].size < 0.3) {
            allBirds[i].remove()
            allBirds.splice(i, 1)
        }
    }
}

function animate() {
    ctx.clearRect(0, 0, canvas.width, canvas.height)
    handleBirds()
    hue++
    requestAnimationFrame(animate)
}

animate()