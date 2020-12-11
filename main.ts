function setup () {
    splash = 1
    haloDisplay = kitronik_halo_hd.createZIPHaloDisplay(60)
    haloDisplay.clear()
    haloDisplay.showColor(kitronik_halo_hd.colors(ZipLedColors.Red))
    for (let index = 0; index <= 20; index++) {
        haloDisplay.setZipLedColor(index * 3, kitronik_halo_hd.colors(ZipLedColors.Green))
        haloDisplay.setZipLedColor(index * 3 + 1, kitronik_halo_hd.colors(ZipLedColors.Green))
    }
    haloDisplay.show()
}
let haloDisplay: kitronik_halo_hd.ZIPHaloHd = null
let splash = 0
setup()
basic.showString("God jul, Olive!  Hilsen onkel Anders")
basic.forever(function () {
    if (splash == 1) {
        basic.showArrow(ArrowNames.West)
        basic.pause(500)
        basic.clearScreen()
        basic.pause(500)
        basic.showArrow(ArrowNames.East)
        basic.pause(500)
        basic.clearScreen()
        basic.pause(2000)
    }
})
basic.forever(function () {
    haloDisplay.rotate(1)
    haloDisplay.show()
    basic.pause(500)
})
