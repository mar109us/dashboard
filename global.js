window.global = {

    min_width: 0,
    max_width: window.innerWidth,

    min_height: 0,
    max_height: window.innerHeight,

    fps_30: 1000 / 30,
    fps_60: 1000 / 60,
    fps_90: 1000 / 90,
    fps_120: 1000 / 120,

};

setInterval(global_test, global.fps_60)


function global_test() {

console.log(
    global.min_width,
    global.max_width,
    global.min_height,
    global.max_height
)





}