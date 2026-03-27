let button_array = []

class Button {
    constructor(x, y, w, h) {
        this.x = x
        this.y = y
        this.w = w
        this.h = h

        this.canvas = document.createElement('canvas')
        this.button_canvas = this.canvas.getContext('2d')

        this.canvas.style.position = "absolute"

        this.canvas.style.left = `${this.x}px`
        this.canvas.style.top = `${this.y}px`
        this.canvas.width = this.w
        this.canvas.height = this.h

        this.canvas.style.zIndex = "10"

        document.body.appendChild(this.canvas)

        button_array.push(this)
    }

    render_button() {
        let button = this.button_canvas

        let x = this.x
        let y = this.y
        let w = this.w
        let h = this.h

        let array_position = button_array.indexOf(this)

        

        if (array_position == 0) {
            this.canvas.style.left = `${g.grid_x}px`
        }
        else if (array_position == 1) {
            this.canvas.style.left = `${g.grid_x * 2}px`
        }
        if (array_position >= 2) {
            this.canvas.style.left = `${g.grid_x * this.array_position}px`
        }




        button.fillStyle = "black"
        button.fillRect(x, 0, w, h)

        if (typeof this.onRenderContent === 'function') {
            this.onRenderContent (
                button,
                x,
                y,
                w,
                h
            )
        }    
    }
}


            
