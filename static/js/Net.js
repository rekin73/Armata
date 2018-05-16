function Net() {
    console.log("Net.js LOADED");


    var client = io();
    client.on("onconnect", function (data) {
        console.log(data.clientName)
    })
    $(document).on("mousemove", function (e) {
        client.emit("mouseposition", {
            posX: e.clientX,
            posY: e.clientY
        })
    })
    client.on("mouseposition", function (data) {
        console.log(data.posX +" - "+data.posY)
})
}