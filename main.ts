input.onButtonPressed(Button.A, function () {
    led.stopAnimation()
    splash = false
    gladeJul()
})
function gladeJul () {
    // Glade jul, hellige jul
    for (let index = 0; index < 2; index++) {
        music.playTone(392, music.beat(BeatFraction.Whole))
        music.playTone(440, music.beat(BeatFraction.Quarter))
        music.playTone(392, music.beat(BeatFraction.Half))
        music.rest(music.beat(BeatFraction.Quarter))
        music.playTone(330, music.beat(BeatFraction.Whole))
        music.rest(music.beat(BeatFraction.Whole))
    }
    // Engler daler ned i skjul
    for (let index = 0; index < 1; index++) {
        music.playTone(587, music.beat(BeatFraction.Whole))
        music.rest(music.beat(BeatFraction.Quarter))
        music.playTone(587, music.beat(BeatFraction.Half))
        music.rest(music.beat(BeatFraction.Quarter))
        music.playTone(494, music.beat(BeatFraction.Whole))
        music.rest(music.beat(BeatFraction.Quarter))
        music.playTone(494, music.beat(BeatFraction.Half))
        music.rest(music.beat(BeatFraction.Quarter))
        music.playTone(523, music.beat(BeatFraction.Whole))
        music.rest(music.beat(BeatFraction.Quarter))
        music.playTone(523, music.beat(BeatFraction.Half))
        music.rest(music.beat(BeatFraction.Quarter))
        music.playTone(392, music.beat(BeatFraction.Whole))
        music.rest(music.beat(BeatFraction.Whole))
    }
    // hit de flyver med paradisgrønt / hvor de ser hva for Gud er skjønt
    for (let index = 0; index < 2; index++) {
        music.playTone(440, music.beat(BeatFraction.Whole))
        music.rest(music.beat(BeatFraction.Quarter))
        music.playTone(440, music.beat(BeatFraction.Half))
        music.rest(music.beat(BeatFraction.Quarter))
        music.playTone(523, music.beat(BeatFraction.Whole))
        music.rest(music.beat(BeatFraction.Quarter))
        music.playTone(494, music.beat(BeatFraction.Quarter))
        music.rest(music.beat(BeatFraction.Quarter))
        music.playTone(440, music.beat(BeatFraction.Quarter))
        music.rest(music.beat(BeatFraction.Half))
        music.playTone(392, music.beat(BeatFraction.Whole))
        music.rest(music.beat(BeatFraction.Quarter))
        music.playTone(440, music.beat(BeatFraction.Quarter))
        music.rest(music.beat(BeatFraction.Quarter))
        music.playTone(392, music.beat(BeatFraction.Half))
        music.rest(music.beat(BeatFraction.Quarter))
        music.playTone(330, music.beat(BeatFraction.Whole))
        music.rest(music.beat(BeatFraction.Whole))
    }
    // lønnlig i blant oss de går (1)
    for (let index = 0; index < 1; index++) {
        music.playTone(587, music.beat(BeatFraction.Whole))
        music.rest(music.beat(BeatFraction.Half))
        music.playTone(587, music.beat(BeatFraction.Quarter))
        music.rest(music.beat(BeatFraction.Quarter))
        music.playTone(587, music.beat(BeatFraction.Whole))
        music.rest(music.beat(BeatFraction.Quarter))
        music.playTone(698, music.beat(BeatFraction.Half))
        music.playTone(698, music.beat(BeatFraction.Quarter))
        music.rest(music.beat(BeatFraction.Quarter))
        music.playTone(587, music.beat(BeatFraction.Whole))
        music.rest(music.beat(BeatFraction.Quarter))
        music.playTone(494, music.beat(BeatFraction.Whole))
        music.rest(music.beat(BeatFraction.Quarter))
        music.playTone(523, music.beat(BeatFraction.Double))
        music.playTone(523, music.beat(BeatFraction.Whole))
        music.playTone(659, music.beat(BeatFraction.Double))
        music.rest(music.beat(BeatFraction.Whole))
    }
    // lønnlig i blant oss de går (2)
    for (let index = 0; index < 1; index++) {
        music.playTone(523, music.beat(BeatFraction.Whole))
        music.rest(music.beat(BeatFraction.Quarter))
        music.playTone(392, music.beat(BeatFraction.Quarter))
        music.rest(music.beat(BeatFraction.Quarter))
        music.playTone(330, music.beat(BeatFraction.Half))
        music.rest(music.beat(BeatFraction.Half))
        music.playTone(392, music.beat(BeatFraction.Whole))
        music.rest(music.beat(BeatFraction.Half))
        music.playTone(349, music.beat(BeatFraction.Half))
        music.rest(music.beat(BeatFraction.Quarter))
        music.playTone(294, music.beat(BeatFraction.Half))
        music.rest(music.beat(BeatFraction.Whole))
        music.playTone(262, music.beat(BeatFraction.Double))
    }
}
input.onButtonPressed(Button.B, function () {
    led.stopAnimation()
    splash = false
    lydSensorAktiv = true
    if (lysVariant == 0) {
        haloDisplay.showRainbow(1, 360)
        lysVariant = 1
    } else {
        juleLys()
        lysVariant = 0
    }
})
function setup () {
    kitronik_halo_hd.setBuzzerPin()
    juleHilsen = 0
    lysVariant = 0
    lydSensorAktiv = false
    splash = false
    haloDisplay = kitronik_halo_hd.createZIPHaloDisplay(60)
    haloDisplay.clear()
    juleLys()
}
function juleLys () {
    haloDisplay.showColor(kitronik_halo_hd.colors(ZipLedColors.Green))
    for (let index = 0; index <= 20; index++) {
        haloDisplay.setZipLedColor(index * 3, kitronik_halo_hd.colors(ZipLedColors.Red))
        haloDisplay.setZipLedColor(index * 3 + 1, kitronik_halo_hd.colors(ZipLedColors.Red))
    }
    haloDisplay.show()
}
let lydNivå = 0
let juleHilsen = 0
let haloDisplay: kitronik_halo_hd.ZIPHaloHd = null
let lysVariant = 0
let lydSensorAktiv = false
let splash = false
setup()
basic.forever(function () {
    if (juleHilsen == 0) {
        basic.showString("God jul, Olive!  Hilsen onkel Anders")
        juleHilsen = 1
        splash = true
    }
})
basic.forever(function () {
    if (splash == true) {
        basic.showArrow(ArrowNames.West)
        basic.pause(500)
        basic.clearScreen()
        basic.pause(500)
        basic.showArrow(ArrowNames.East)
        basic.pause(500)
        basic.clearScreen()
        basic.pause(2000)
    } else {
        basic.showIcon(IconNames.EigthNote)
    }
})
basic.forever(function () {
    haloDisplay.rotate(1)
    if (lydSensorAktiv == true) {
        haloDisplay.setBrightness(lydNivå)
    }
    if (lysVariant == 1) {
    	
    } else {
        basic.pause(500)
    }
    haloDisplay.show()
})
basic.forever(function () {
    if (lydSensorAktiv == true) {
        lydNivå = kitronik_halo_hd.readAverageSoundLevel()
    }
})
