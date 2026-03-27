window.g = {

    min_width: 0,
    max_width: window.innerWidth,

    min_height: 0,
    max_height: window.innerHeight,

    fps_2: 1000 / 2,
    fps_30: 1000 / 30,
    fps_60: 1000 / 60,
    fps_90: 1000 / 90,
    fps_120: 1000 / 120,

};

setInterval(update_window_size, g.fps_2)

setInterval(check_value, g.fps_2)

function update_window_size() {
    g.max_width = window.innerWidth
    g.max_height = window.innerHeight
}

function check_value() {
    console.log(
        g.min_width,
        g.max_width,
        g.min_height,
        g.max_height
    )
}
