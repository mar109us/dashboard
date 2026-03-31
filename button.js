let button_array = []

class Button {
    constructor(x, y, w, h) {
        this.x = x
        this.y = y
        this.w = w
        this.h = h

        this.canvas = document.createElement('canvas')
        this.button_canvas = this.canvas.getContext('2d')

        /* this.canvas.style.position = "absolute" */

        this.canvas.style.left = `${this.x}px`
        this.canvas.style.top = `${this.y}px`
/*      this.canvas.width = this.w
        this.canvas.height = this.h */

        this.canvas.style.zIndex = "10"

        document.body.appendChild(this.canvas)

        button_array.push(this)
    }

    render_button() {
        let button = this.button_canvas

        let x = this.x
        let y = this.y
/*         let w = this.w
        let h = this.h */

        let array_position = button_array.indexOf(this) + 1

        /* this.canvas.style.left = `${g.grid_x * array_position}px` */


        if (array_position > max_elements_x && array_position <= max_elements_x * 2) {
            this.canvas.style.left = `${g.grid_x * (array_position - max_elements_x)}px`
        }

        if (array_position > max_elements_x * 2 && array_position <= max_elements_x * 3) {
            this.canvas.style.left = `${g.grid_x * (array_position - max_elements_x * 2)}px`
        }

        if (array_position > max_elements_x * 3 && array_position <= max_elements_x * 4) {
            this.canvas.style.left = `${g.grid_x * (array_position - max_elements_x * 3)}px`
        }

/*         //  shadow
        button.fillStyle = "rgb(232, 222, 212)"
        button.beginPath()
        button.roundRect(15, 15, 200, 80, 30)
        button.fill()

        //  highlight
        button.fillStyle = "rgb(250, 244, 234)"
        button.beginPath()
        button.roundRect(5, 5, 200, 80, 30)
        button.fill() */



        //  shadow light
        button.fillStyle = "rgb(233, 234, 234)"
        button.beginPath()
        button.roundRect(30, 30, 200, 80, 30)
        button.fill()

        //  shadow mid
        button.fillStyle = "rgb(231, 232, 232)"
        button.beginPath()
        button.roundRect(25, 25, 200, 80, 30)
        button.fill()

        //  shadow dark
        button.fillStyle = "rgb(229, 230, 230)"
        button.beginPath()
        button.roundRect(20, 20, 200, 80, 30)
        button.fill()


        //  highlight dark
        button.fillStyle = "rgb(237, 238, 238)"
        button.beginPath()
        button.roundRect(0, 0, 200, 80, 30)
        button.fill()

        //  highlight mid
        button.fillStyle = "rgb(239, 240, 240)"
        button.beginPath()
        button.roundRect(5, 5, 199, 79, 30)
        button.fill()

        //  highlight light
        button.fillStyle = "rgb(241, 242, 242)"
        button.beginPath()
        button.roundRect(8, 8, 198, 78, 30)
        button.fill()

        //  shadow inner
        button.fillStyle = "rgb(231, 232, 232)"
        button.beginPath()
        button.roundRect(10, 10, 198, 78, 30)
        button.fill()

        //  highlight inner
        button.fillStyle = "rgb(239, 240, 240)"
        button.beginPath()
        button.roundRect(14, 14, 198, 78, 30)
        button.fill()

        //  center
        button.fillStyle = "rgb(235, 236, 236)"
        button.beginPath()
        button.roundRect(12, 12, 198, 78, 30)
        button.fill()


        // text highlight
        button.fillStyle = "rgb(255, 250, 250)"
        button.font = "60px helvetica"
        button.fillText("hello", 49, 69)

        // text shadow
        button.fillStyle = "rgb(200, 200, 210)"
        button.font = "60px helvetica"
        button.fillText("hello", 51, 71)

        // text 
        button.fillStyle = "rgb(233, 233, 233)"
        button.font = "60px helvetica"
        button.fillText("hello", 50, 70)


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


            
