const max_elements_x = 5

window.g = {

    min_width: 0,
    max_width: window.innerWidth,

    min_height: 0,
    max_height: window.innerHeight,

    data_update_interval: 1000,

    fps_2: 1000 / 2,
    fps_30: 1000 / 30,
    fps_60: 1000 / 60,
    fps_90: 1000 / 90,
    fps_120: 1000 / 120,
    
    grid_x: window.innerWidth / (max_elements_x + 2)

};

const global_fps = g.fps_60 

function update_window_size() {
    g.max_width = window.innerWidth
    g.max_height = window.innerHeight

    g.grid_x = window.innerWidth / (max_elements_x + 2)
}

let console_prints = 0

function check_global_value() {

    if (console_prints >= 50) {
        console.clear()
        console_prints = 0
    }

    console.log(
        "max_width:", g.max_width,
        "max_height:", g.max_height,
        "button count:", button_array.length,
        "array pos:", button_array[Button],
        "g.grid_x:", g.grid_x,

    )

    console_prints += 1


}
