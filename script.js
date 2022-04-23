const discs = [
    ["13", "C418"],
    ["cat", "C418"],
    ["blocks", "C418"],
    ["chirp", "C418"],
    ["far", "C418"],
    ["mall", "C418"],
    ["mellohi", "C418"],
    ["stal", "C418"],
    ["strad", "C418"],
    ["ward", "C418"],
    ["11", "C418"],
    ["wait", "C418"],
    ["Pigstep", "Lena Raine"],
    ["otherside", "Lena Raine"],
    ["5", "Samuel Aberg"]
]

const playAudio = (audio) => {
    audio = document.getElementById(`audio-${audio}`)
    if (audio) {
        audio.play()
        audio.currentTime = 0
    }
    else console.error("Audio not found.")
}

const el = {}
el.discs = document.querySelector(".discs")
el.nowPlaying = document.querySelector(".now-playing")
el.audio = document.querySelector(".audio")
el.jukebox = document.querySelector(".jukebox")

for (let i = 0; i < discs.length; i++) {
    const disc = discs[i][0]
    el.discs.innerHTML += `<div class="disc" id="disc-${disc}">
        <img src="./assets/${disc}.webp" class="disc-image" />
        <div class="disc-name">${disc}</div>
    </div>`
    el.audio.innerHTML += `<audio id="audio-${disc}"><source src="./assets/music/${disc}.mp3" type="audio/mp3" /></audio>`
}
for (let i = 0; i < discs.length; i++) {
    document.getElementById(`disc-${discs[i][0]}`).onclick = function() {
        for (let i = 0; i < el.audio.querySelectorAll("audio").length; i++) el.audio.querySelectorAll("audio")[i].pause()

        el.nowPlaying.style.display = "block"
        el.nowPlaying.innerText = `Now playing: ${discs[i][1]} - ${discs[i][0]}`
        playAudio(discs[i][0])
    }
}

el.jukebox.onclick = function() {
    for (let i = 0; i < el.audio.querySelectorAll("audio").length; i++) {
        const audio = el.audio.querySelectorAll("audio")[i]
        if (!audio.paused) {
            el.nowPlaying.style.display = "none"
            el.nowPlaying.innerText = `Now playing:`
            audio.pause()
        } else continue
    }
}