// Default behavior of (sub) trial phases.
const FIXCROSS_DURATION = 1000;
const PRIME_DURATION = 500;
const WORD_DURATION = 1000;
const RESPONSE_TIMEOUT_DURATION = 2000;
const FEEDBACK_DURATION = 1000;
const CROSS_GAP_DURATION = 0;

// Duration of the interval between prime and target.
const PRIME_GAP_DURATION = 300;

const WORD_GAP_DURATION = 0;
const TRIAL_GAP_DURATION = 1000;
const OK_BUTTON_TEXT = "OK";

const ACCESS_KEY = '382b7538-e7bf-4197-a1a4-73b1351f9198';

const GENERIC_CHECK = "In order to participate in this experiment, please confirm that you:<BR><BR><ul><li>Run this on a Laptop or Desktop computer, <b>not</b> on a phone or a tablet!</li><li>Have a <b>real keyboard</b> working.</li><li>Have a <b>mouse</b> and/or <b>trackpad</b> that works.</li><li>Have your browser's audio enabled and your volume on.</li></ul><h5>Before you click OK, make sure you have your browser window nice and large!</h5><BR><p>We'll try and help you check some additional things..."

const AUDIO_CHECK_ONE = "Let's test your audio playback, okay?<BR><BR>Are you alone in a room? It would be best to use your headphones, if you have them, but otherwise: please don't be in a place where some sound from your device would be really annoying...<BR><BR>Click 'play sound' to start playing a test sound."

const AUDIO_CHECK_PROMPT_TEXT = 'Make a choice (this flow returns a usable var)';

const AUDIO_CHECK_PROMPT_TEXT_LOOP = "Please make sure your audio is audible, you can play the sound again to adjust your device volume. Once you're happy with the levels, click 'Continue'"

const KEYBOARD_CHOICES = ['QWERTY','AZERTY','DVORAK','QWERTZ','CUSTOM'];

console.log(jsPsych.ALL_KEYS);

const KEYBOARD_LEFT_KEY = 'A';
const KEYBOARD_RIGHT_KEY = 'L';

const HAND_QUESTION = "If forced to choose, I consider myself to be: ";
const HAND_CHOICES = ['Left handed', 'Right handed'];