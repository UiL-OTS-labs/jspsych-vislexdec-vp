// ACCESS_KEY needs to be used for server setup (data store)
const ACCESS_KEY = 'zeeekretkeey'; 

// Default behavior of (sub) trial phases.
const FIXCROSS_DURATION = 1000;
const WORD_DURATION = 1000;
const PRIME_DURATION = 1000;
const PRIME_GAP_DURATION = 300;

const RESPONSE_TIMEOUT_DURATION = 2000;
const FEEDBACK_DURATION = 1000;
const TRIAL_GAP_DURATION = 1000;
const DEFAULT_ITI = 500; // inter-trial interval (post_trial_gap)

// How many items of the same type may appear in series in case of pseudorandomisation.
const MAX_SUCCEEDING_ITEMS_OF_TYPE = 2;

// Defaults for buttons
const OK_BUTTON_TEXT = "OK";
//const YES_OR_NO_BUTTON_TEXT = ["Yes", "No"];
const YES_BUTTON_TEXT = "Yes";
const NO_BUTTON_TEXT = "No";
const TRUE_BUTTON_TEXT = "True";
const FALSE_BUTTON_TEXT = "False";


// Deafult restrictions of minimal browser dimensions
const MIN_WIDTH = 800;
const MIN_HEIGHT = 600;

// GENERIC TESTS/CHECKS
const GENERIC_CHECK = `
    <h3>In order to participate, please make sure that you:</h3>
    <br>
    <ul>
      <li>Run this on a Laptop or Desktop computer, <b>not</b> on a phone or a tablet!</li>
      <li>Have a <b>real keyboard</b> working.</li>
      <li>Have a <b>mouse</b> and/or <b>trackpad</b> that works.</li>
    </ul>
    <h3>Please <i>maximize</i> your browser window before you continue!</h3>
    <br>
    <p>Click below if you are ready to proceed</p>
    `;
    
// // Keyboard choices
// const KEYBOARD_CHOICES = ['QWERTY','AZERTY','DVORAK','QWERTZ','CUSTOM'];

// // simple layout for left/right keys given some known layouts:
// // Type     |   Left  |   Right
// // ---------|---------|----------
// // QWERTY   |   A     |  L
// // AZERTY   |   Q     |  M
// // DVORAK   |   A     |  S (or N?)
// // QWERTZ   |   A     |  L
// // OTHER    |   A     |  L (fallback, more tries?)

// const QWERTY = { kb_type: 'QUERTY', left_key: "A", right_key: "L" };
// const AZERTY = { kb_type: 'AZERTY', left_key: "Q", right_key: "M" };
// const DVORAK = { kb_type: 'DVORAK', left_key: "A", right_key: "S" };
// const QWERTZ = { kb_type: 'QWERTZ', left_key: "A", right_key: "L" };
// const CUSTOM = { kb_type: 'CUSTOM', left_key: "1", right_key: "0" };

// // Quick lookup table
// const KEYBOARD_DEFAULTS = {
//     'QWERTY': QWERTY,
//     'AZERTY': AZERTY,
//     'DVORAK': DVORAK,
//     'QWERTZ': QWERTZ,
//     'CUSTOM': CUSTOM,
// };

const DEBRIEF_MESSAGE = `
    <h1>End of the experiment</h1><BR><BR>
    <h2>Thank you for participating!</h2>
    `;

const DEBRIEF_MESSAGE_DURATION = 3000;

