
window.onload = function() {
    const canvas = document.getElementsByClassName("canvas-box")
    console.log(canvas)
    canvas[0].width = 400
    canvas[0].height = 300
    const context = canvas[0].getContext("2d")
    context.moveTo(100, 100)
    context.lineTo(200, 200)
    context.lineWidth = 5
    context.strokeStyle = "#AA394C"
    context.stroke()
}

