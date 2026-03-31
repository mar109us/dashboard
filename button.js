let button_array = []

class Button {
    constructor(text, x, y, w, h) {
        this.text = text
        this.x = x
        this.y = y
        this.w = w
        this.h = h

        this.canvas = document.createElement('canvas')
        this.button_canvas = this.canvas.getContext('2d')

        this.canvas.style.left = `${this.x}px`
        this.canvas.style.top = `${this.y}px`
        this.canvas.width = this.w
        this.canvas.height = this.h

        this.canvas.style.zIndex = "10"

        document.body.appendChild(this.canvas)

        button_array.push(this)
    }

    render_button() {



        let w = this.w - 30

        let button = this.button_canvas

        let array_position = button_array.indexOf(this) + 1

        if (array_position > max_elements_x && array_position <= max_elements_x * 2) {
            this.canvas.style.left = `${g.grid_x * (array_position - max_elements_x)}px`
        }

        if (array_position > max_elements_x * 2 && array_position <= max_elements_x * 3) {
            this.canvas.style.left = `${g.grid_x * (array_position - max_elements_x * 2)}px`
        }

        if (array_position > max_elements_x * 3 && array_position <= max_elements_x * 4) {
            this.canvas.style.left = `${g.grid_x * (array_position - max_elements_x * 3)}px`
        }

        //  shadow light
        button.fillStyle = "rgb(233, 234, 234)"
        button.beginPath()
        button.roundRect(30, 30, w, 80, 30)
        button.fill()

        //  shadow mid
        button.fillStyle = "rgb(231, 232, 232)"
        button.beginPath()
        button.roundRect(25, 25, w, 80, 30)
        button.fill()

        //  shadow dark
        button.fillStyle = "rgb(229, 230, 230)"
        button.beginPath()
        button.roundRect(20, 20, w, 80, 30)
        button.fill()

        //  highlight dark
        button.fillStyle = "rgb(237, 238, 238)"
        button.beginPath()
        button.roundRect(0, 0, w, 80, 30)
        button.fill()

        //  highlight mid
        button.fillStyle = "rgb(239, 240, 240)"
        button.beginPath()
        button.roundRect(5, 5, w - 1, 79, 30)
        button.fill()

        //  highlight light
        button.fillStyle = "rgb(241, 242, 242)"
        button.beginPath()
        button.roundRect(8, 8, w - 2, 78, 30)
        button.fill()

        //  shadow inner
        button.fillStyle = "rgb(231, 232, 232)"
        button.beginPath()
        button.roundRect(10, 10, w - 2, 78, 30)
        button.fill()

        //  highlight inner
        button.fillStyle = "rgb(239, 240, 240)"
        button.beginPath()
        button.roundRect(14, 14, w - 2, 78, 30)
        button.fill()

        //  center
        button.fillStyle = "rgb(235, 236, 236)"
        button.beginPath()
        button.roundRect(12, 12, w - 2, 78, 30)
        button.fill()

        // text highlight
        button.fillStyle = "rgb(245, 245, 245)"
        button.font = "60px helvetica"
        button.fillText(this.text, 49, 69)

        // text shadow
        button.fillStyle = "rgb(190, 190, 190)"
        button.font = "60px helvetica"
        button.fillText(this.text, 53, 71)

        // text 
        button.fillStyle = "rgb(225, 225, 225)"
        button.font = "60px helvetica"
        button.fillText(this.text, 50, 70)


        if (typeof this.onRenderContent === 'function') {
            this.onRenderContent (
                button,
            )
        }    
    }
}


            
