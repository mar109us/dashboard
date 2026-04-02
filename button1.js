const code_button = new Button("code", 0, 0, 230, 120)

code_button.onRenderContent = code

let code_visible = true

code_button.canvas.addEventListener("click", () => {code_visible = !code_visible})

function code_show_content() {
    code_button.canvas.style.display = "block"
}

function code_hide_content() {
    code_button.canvas.style.display = "none"
    console.log("hello")
}


function code() {

    if (code_visible) {
        code_show_content()
    }

    else {
        code_hide_content()
    }

}
































const button_2_init = new Button("tools", 0, 0, 230, 120)
const button_3_init = new Button("other", 0, 0, 235, 120)

/* const button_1_init = new Button("js", 0, 0, 150, 120)
const button_2_init = new Button("html", 0, 0, 220, 120)
const button_3_init = new Button("git", 0, 0, 170, 120) */










