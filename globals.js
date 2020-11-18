// Default behavior of (sub) trial phases.
const FIXCROSS_DURATION = 1000;
const PRIME_DURATION = 500;
const WORD_DURATION = 1000;
const RESPONSE_TIMEOUT_DURATION = 2000;
const FEEDBACK_DURATION = 1000;
const CROSS_GAP_DURATION = 0;

// How many items of the same type may appear in series
const MAX_SUCCEEDING_ITEMS_OF_TYPE = 2

// Duration of the interval between prime and target.
const PRIME_GAP_DURATION = 300;

const WORD_GAP_DURATION = 0;
const TRIAL_GAP_DURATION = 1000;
const OK_BUTTON_TEXT = "OK";

const YES_OR_NO_BUTTON_TEXT = ["Yes", "No"];

const ACCESS_KEY = 'secretkeyforwebimplementation';

// GENERIC TESTS/CHECKS
const GENERIC_CHECK = "In order to participate in this experiment, please confirm that you:<BR><BR><ul><li>Run this on a Laptop or Desktop computer, <b>not</b> on a phone or a tablet!</li><li>Have a <b>real keyboard</b> working.</li><li>Have a <b>mouse</b> and/or <b>trackpad</b> that works.</li><li>Have your browser's audio enabled and your volume on.</li></ul><h5>Before you click OK, make sure you have your browser window nice and large!</h5><BR><p>We'll try and help you check some additional things..."

const AUDIO_CHECK_PROMPT_TEXT_LOOP = "Please make sure your audio is audible, you can play the sound again to adjust your device volume. Once you're happy with the levels, click 'Continue'"

const PREPARE_FOR_SURVEY = "We will ask you to answer some screening questions in a quick (forced choice) survey.";

//survey html plugin
const NATIVE_LANGUAGE_QUESTION = 'What is your native language?'
const YEAR_BORN_QUESTION = 'In what <i>year</i> were you born?';
const MONTH_BORN_QUESTION = 'In what <i>month</i> were you born? (1 - 12)';

// block
const BILINGUAL_QUESTION = "Were you raised to understand and speak more than one language, from when you were an infant and onwards?"
const BILINGUAL_OPTIONS = ["No","Yes"];

const DYSLEXIC_QUESTION = "Are you dyslexic?";
const DYSLEXIC_OPTIONS = ["No", "Yes"];

const GENDER_QUESTION = "What is your gender?";
const GENDER_OPTIONS = ["Female", "Male"];

const HAND_QUESTION = "What hand do you use to write with?"
const HAND_OPTIONS = ["Left", "Right"];

// for which we have some defaults configured
const KEYBOARD_CHOICES = ['QWERTY','AZERTY','DVORAK','QWERTZ','CUSTOM'];

const KEYBOARD_FALLBACK = 'CUSTOM';

//now for finding out the real bits..
// simple sheme
// Type     |   Left  |   Right
// ---------|---------|----------
// QWERTY   |   A     |  L
// AZERTY   |   Q     |  M
// DVORAK   |   A     |  S (or N?)
// QWERTZ   |   A     |  L
// OTHER    |   A     |  L (fallback, more tries?)

const QWERTY = { kb_type: 'QUERTY', left_key: "A", right_key: "L" };
const AZERTY = { kb_type: 'AZERTY', left_key: "Q", right_key: "M" };
const DVORAK = { kb_type: 'DVORAK', left_key: "A", right_key: "S" };
const QWERTZ = { kb_type: 'QWERTZ', left_key: "A", right_key: "L" };
const CUSTOM = { kb_type: 'CUSTOM', left_key: "A", right_key: "L" };

// Quick lookup table
const KEYBOARD_DEFAULTS = {
	'QWERTY': QWERTY,
	'AZERTY': AZERTY,
	'DVORAK': DVORAK,
	'QWERTZ': QWERTZ,
	'CUSTOM': CUSTOM,
};

const KEYBOARD_KEYS_TIMELINE = [
    { key: 'left_key' },
    { key: 'right_key'}
];




