function sequencer() {
    const kicks = new Tone.Player('./audio/kick/kick1.wav').toDestination();

    let index = 0;

    Tone.Transport.scheduleRepeat(repeat, '16n');
    Tone.Transport.start();

    function repeat() {

        let step = index % 16;
        let selectedSound = document.querySelector(`.kick input:nth-child(${step + 1})`);

        if (selectedSound.checked) {
            kicks.start();
        }
        index ++
    }
}
sequencer();