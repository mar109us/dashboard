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

        this.canvas.style.zIndex = "10"
        this.canvas.style.left = `${this.x}px`
        this.canvas.style.top = `${this.y}px`
        this.canvas.width = this.w
        this.canvas.height = this.h


        this.content = document.createElement('canvas')
        this.content_canvas = this.content.getContext('2d')

        this.content.style.zIndex = "100"
        this.content.style.position = "absolute"
        this.content.style.left = `${25}px`
        this.content.style.top = `${125}px`
        this.content.width = g.max_width - 50
        this.content.height = g.max_height - 150

        this.content_visible = false

        this.canvas.addEventListener("click", () => {this.content_visible = !this.content_visible}) 

        this.content_set_show = this.content.style.display = "none"

        this.content_set_hide = this.content.style.display = "block"




        document.body.appendChild(this.canvas)
        document.body.appendChild(this.content)

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
        button.roundRect(22, 22, w, 80, 30)
        button.fill()

        //  shadow mid
        button.fillStyle = "rgb(229, 230, 230)"
        button.beginPath()
        button.roundRect(18, 18, w, 80, 30)
        button.fill()

        //  shadow dark
        button.fillStyle = "rgb(223, 224, 224)"
        button.beginPath()
        button.roundRect(15, 15, w, 80, 30)
        button.fill()

        //  highlight dark
        button.fillStyle = "rgb(237, 238, 238)"
        button.beginPath()
        button.roundRect(0, 0, w, 80, 30)
        button.fill()

        //  highlight mid
        button.fillStyle = "rgb(241, 242, 242)"
        button.beginPath()
        button.roundRect(2, 2, w - 1, 79, 30)
        button.fill()

        //  highlight light
        button.fillStyle = "rgb(246, 247, 247)"
        button.beginPath()
        button.roundRect(5, 5, w - 2, 78, 30)
        button.fill()

        //  shadow inner
/*         button.fillStyle = "rgb(231, 232, 232)" */
        button.fillStyle = "rgb(211, 212, 212)"

        button.beginPath()
        button.roundRect(10, 10, w - 2, 78, 30)
        button.fill()

        //  highlight inner
/*         button.fillStyle = "rgb(239, 240, 240)" */
        button.fillStyle = "rgb(254, 255, 255)"
        button.beginPath()
        button.roundRect(14, 14, w - 2, 78, 30)
        button.fill()

        //  center
        const gradient = button.createLinearGradient(20, 20, 60, 90)
        gradient.addColorStop(0, "rgb(185, 188, 190)")
        /* gradient.addColorStop(0.9, "rgb(210, 210, 215)") */
        gradient.addColorStop(1, "rgb(222, 223, 223)")
        button.fillStyle = gradient

        /* button.fillStyle = "rgb(235, 236, 236)" */
        button.beginPath()
        button.roundRect(12, 12, w - 2, 78, 30)
        button.fill()

        // text highlight
        button.fillStyle = "rgb(245, 245, 245)"
        button.font = "60px helvetica"
        button.fillText(this.text, 49, 69)

        // text shadow
        button.fillStyle = "rgb(185, 185, 190)"
        button.font = "60px helvetica"
        button.fillText(this.text, 52, 72)

        // text 
        button.fillStyle = "rgb(231, 231, 230)"
        button.font = "60px helvetica"
        button.fillText(this.text, 50, 70)

        let content_canvas = this.content_canvas

        let button_clicked = this.content_visible

        let content_get_show = this.content_set_show

        let content_get_hide = this.content_set_hide

        let content_w = this.content.width
        let content_h = this.content.height



        function content_is_show() {
            content_get_show
            console.log("show")
        }

        function content_is_hide() {
            content_get_hide
            console.log("hide")
        }

        if (button_clicked) {
            content_is_show()   
            /* content_canvas.fillStyle = "rgb(185, 185, 190)" */
                    const gradient = content_canvas.createLinearGradient(0, 500, 1060, 1090)
        gradient.addColorStop(0, "rgb(185, 188, 190)")
        /* gradient.addColorStop(0.9, "rgb(210, 210, 215)") */
        gradient.addColorStop(1, "rgb(222, 223, 223)")
        content_canvas.fillStyle = gradient

            content_canvas.beginPath()
            content_canvas.roundRect(0, 0, content_w, content_h, 75)
            content_canvas.fill()
/*             content_canvas.fillRect(0, 0, content_w, content_h) */

/*         button.fillStyle = "rgb(231, 231, 230)"
        button.font = "60px helvetica"
        button.fillText("text text text text text text text ", 50, 70) */
        }

        else {
            content_is_hide()
        }



        if (typeof this.onRenderContent === 'function') {
            this.onRenderContent (
                button,
                content_canvas
            )
        }    
    }
}


            
