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

const ACCESS_KEY = '382b7538-e7bf-4197-a1a4-73b1351f9198';

// TESTING THINGS 
const GENERIC_CHECK = "In order to participate in this experiment, please confirm that you:<BR><BR><ul><li>Run this on a Laptop or Desktop computer, <b>not</b> on a phone or a tablet!</li><li>Have a <b>real keyboard</b> working.</li><li>Have a <b>mouse</b> and/or <b>trackpad</b> that works.</li><li>Have your browser's audio enabled and your volume on.</li></ul><h5>Before you click OK, make sure you have your browser window nice and large!</h5><BR><p>We'll try and help you check some additional things..."

const AUDIO_CHECK_ONE = "<h1>Test audio</h><BR><BR><p>Are you alone in a room? It would be best to use your headphones, if you have them, but otherwise: please don't be in a place where some sound from your device would be really annoying...<BR><BR>Click 'play sound' to start playing a test sound.</p>"

const AUDIO_CHECK_PROMPT_TEXT_LOOP = "Please make sure your audio is audible, you can play the sound again to adjust your device volume. Once you're happy with the levels, click 'Continue'"

//ASK THING BEFORE TESTING OTHER THINGS 
//survey (simple, no input validation from within multi-question)
const PREPARE_FOR_BINARY_SURVEY = "We will ask you to answer some questions in a quick survey. This is a quick screening we need, before we (think we) can use your data for this particular experiment. Please know that we know how limited this is at many levels...<BR><BR>";//placeholder

//survey html plugin
const NATIVE_LANGUAGE_QUESTION = 'What is your native language? (todo, pattern now at: "[a-zA-Z]+")'
const YEAR_BORN_QUESTION = 'In what <i>year</i> were you born? (valid input: 1919 - 2019)';
const MONTH_BORN_QUESTION = 'In what <i>month</i> were you born? (valid input: 1 - 12)';

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

// what default keys to configure if we 
//- have not data from tests -
//- or the participant can't hit the same key after some tries?

const KEYBOARD_FALLBACK = 'CUSTOM';

// unused
const KEYBOARD_KEYS_PLACE_LR = ['left', 'right'];
// unused 
const KEYBOARD_KEYS_PLACE_TB= ['top', 'bottom'];

// let's confuse everyone's hands
const ASSUMED_DOMINANT_TRUE = 'left_key';
const ASSUMED_DOMINANT_FALSE = 'right_key';

        //now for finding out the real bits..
        // simple sheme
        // Type     |   Left  |   Right
        // ---------|---------|----------
        // QWERTY   |   A     |  L
        // AZERTY   |   Q     |  M
        // DVORAK   |   A     |  S (or N?)
        // QWERTZ   |   A     |  L
        // OTHER    |   A     |  L (fallback, more tries?)

const KEYBOARD_DEFAULTS = {
	'QWERTY': {
		left_key:'A',
		right_key: 'L',
		max_tries: 1
	},
	'AZERTY':{
		left_key:'Q',
		right_key: 'M',
		max_tries: 2
	},
	'DVORAK':{
		left_key:'A',
		right_key: 'S',
		max_tries: 3
	},
	'QWERTZ':{
		left_key:'A',
		right_key: 'L',
		max_tries: 4
	},
	'CUSTOM':{
		left_key:'A',
		right_key: 'L', 
		max_tries: 5
	}
};	

const QWERTY = { kb_type: 'QUERTY', left_key: "A", right_key: "L", max_tries: 2 };
const AZERTY = { kb_type: 'AZERTY', left_key: "Q", right_key: "M", max_tries: 2 };
const DVORAK = { kb_type: 'DVORAK', left_key: "A", right_key: "S", max_tries: 2 };
const QWERTZ = { kb_type: 'QWERTZ', left_key: "A", right_key: "L", max_tries: 2 };
const CUSTOM = { kb_type: 'CUSTOM', left_key: "A", right_key: "L", max_tries: 2 };

const HAND_PREFERENCE = undefined;


console.log(Object.keys(KEYBOARD_DEFAULTS));
console.log(Object.keys(KEYBOARD_DEFAULTS["QWERTY"]));



