class Bird {
    constructor(){
        this.bird = originalBird.cloneNode(true)
        this.bird.removeAttribute('id')
        this.birdBody = this.bird.querySelector('.body')
        this.wingsUp = this.bird.querySelector('.wings-down')
        this.wingsDown = this.bird.querySelector('.wings-up')

        birdCage.appendChild(this.bird)

        this.x = mouse.x
        this.y = mouse.y

        this.isWingUp = true

        this.flapWingCount = 0
        this.flapWingOn = 12

        this.speedX = (0.5 - Math.random()) * (5 + 2)
        this.speedY = (0.5 - Math.random()) * (5 + 2 )
        this.size = Math.random() * 50 + 100
        this.fillColor = `hsl(${hue}, 100%, 50%)`
        this.birdBody.style.fill = this.fillColor
        this.wingsDown.style.fill = this.fillColor
        this.wingsUp.style.fill = this.fillColor
        if(this.speedX > 0 ) {
            this.bird.style.transform = 'rotateY(-180deg)'
        }
    }
    update(){
        this.x += this.speedX
        this.y += this.speedY
        this.size -= 2
        if(this.flapWingCount % this.flapWingOn === 0) {
            this.isWingUp = !this.isWingUp
        }
        this.flapWingCount++
    }
    draw() {
        this.bird.style.left = this.x + 'px'
        this.bird.style.top = this.y + 'px'
        this.bird.style.height = this.size + 'px'
        this.bird.style.width = this.size + 'px'
        this.wingsUp.style.display = this.isWingUp ? 'block' : 'none'
        this.wingsDown.style.display = !this.isWingUp ? 'block' : 'none'
    }
    remove() {
        this.bird.remove()
    }
}