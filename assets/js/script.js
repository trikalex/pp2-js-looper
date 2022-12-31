let kickSound = "assets/audio/kick/kick1.wav";
let snareSound = "assets/audio/snare/snare1.wav";
let hihatSound = "assets/audio/hihat/hihat1.wav";
let percSound = "assets/audio/perc/perc1.wav";

let kickAudio = new Audio(kickSound);
let snareAudio = new Audio(snareSound);
let hihatAudio = new Audio(hihatSound);
let percAudio = new Audio(percSound);

let playBtn = document.getElementById('play');
playBtn.addEventListener('click', playLoop);

// let stopBtn = document.getElementById('stop');
// stopBtn.addEventListener('click', exit.playLoop);

let bpmInput = document.getElementById('input-bpm');
let bpm = bpmInput.value;

let loopInterval;

let tempo = 100;
let rhythmIndex = 1;
let playing = false;
let sixteenthNoteTime;
let timer;

// function playLoop() {

function playLoop(){
    let kicksToPlay = [];
    let snaresToPlay = [];
    let hihatsToPlay = [];
    let percsToPlay = [];
    let kickInputs = document.querySelectorAll('.kick input');
    kickInputs.forEach(input => {
        if (input.checked) {
            kicksToPlay.push(1);
        } else {
            kicksToPlay.push(0);
        }
    });
    let snareInputs = document.querySelectorAll('.snare input');
    snareInputs.forEach(input => {
        if (input.checked) {
            snaresToPlay.push(1);
        } else {
            snaresToPlay.push(0);
        }
    });
    let hihatInputs = document.querySelectorAll('.hihat input');
    hihatInputs.forEach(input => {
        if (input.checked) {
            hihatsToPlay.push(1);
        } else {
            hihatsToPlay.push(0);
        }
    });
    let percInputs = document.querySelectorAll('.perc input');
    percInputs.forEach(input => {
        if (input.checked) {
            percsToPlay.push(1);
        } else {
            percsToPlay.push(0);
        }
    });
    console.log("kicks = ", kicksToPlay);
    console.log("snares = ", snaresToPlay);
    console.log("hihats = ", hihatsToPlay);
    console.log("perc = ", percsToPlay);

    loopInterval = setInterval(function() {
        
        kicksToPlay.forEach(kick => {
            if (kick === 1) {
                kickAudio.currentTime = 0;
                kickAudio.play();
            }
        });
        snaresToPlay.forEach(snare => {
            if (snare === 1) {
                snareAudio.currentTime = 0;
                snareAudio.play();
            }
        });
        hihatsToPlay.forEach(hihat => {
            if (hihat === 1) {
                hihatAudio.currentTime = 0;
                hihatAudio.play();
            }
        });
        percsToPlay.forEach(perc => {
            if (perc === 1) {
                percAudio.currentTime = 0;
                percAudio.play();
            }
        });
    }, bpm);
}

bpmInput.addEventListener('change', changeBpm);

function changeBpm() {
    bpmInput.value = Math.round(bpmInput.value);
    clearInterval(loopInterval);
    bpm = (60 / bpmInput.value) * 250;
    playLoop();
}

function addSteps() {

}

function removeSteps() {

}

function stepVelocity() {
    
}

function muteTrack() {

}

function soloTrack() {

}

// document.getElementById('kick-menu').addEventListener('change', changeSound);
// document.getElementById('snare-menu').addEventListener('change', changeSound);
// document.getElementById('hihat-menu').addEventListener('change', changeSound);
// document.getElementById('perc-menu').addEventListener('change', changeSound);

let soundSelects = document.querySelectorAll('select[id$="-menu"]');
soundSelects.forEach(select => {
    select.addEventListener('change', changeSound);
});


function changeSound(e) {
    let opt = e.target.selectedOptions[0].value;
    if (opt.includes('kick')) {    
        kickSound = `assets/audio/${opt}.wav`;
        kickAudio = new Audio(kickSound);
    } else if (opt.includes('snare')) {  
        snareSound = `assets/audio/${opt}.wav`;
        snareAudio = new Audio(snareSound);
    } else if (opt.includes('hihat')) {    
        hihatSound = `assets/audio/${opt}.wav`;
        hihatAudio = new Audio(hihatSound);
    } else if (opt.includes('perc')) {    
        percSound = `assets/audio/${opt}.wav`;
        percAudio = new Audio(percSound);
    }     

}


