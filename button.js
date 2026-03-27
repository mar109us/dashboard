class Button {
    constructor(x, y, w, h) {
        this.x = x
        this.y = y
        this.w = w
        this.h = h

        this.canvas = document.createElement('canvas')
        this.button = this.canvas.getContext('2d')

        this.canvas.style.position = "absolute"

        this.canvas.style.left = `${this.x}px`
        this.canvas.style.top = `${this.y}px`
        this.canvas.width = this.w
        this.canvas.height = this.h

        this.canvas.style.zIndex = "10"
    }

    button_loop() {
        let button = this.button

        let x = this.x
        let y = this.y
        let w = this.w
        let h = this.h

        
        
    }








}