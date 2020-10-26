// Default behavior of (sub) trial phases
const FIXCROSS_DURATION = 1000;
const PRIME_DURATION = 500;
const WORD_DURATION = 1000;

// having a separate duration for response needs some debate...
const RESPONSE_TIMEOUT_DURATION = 2000;

// ... One option is to do it this way:
const RESPONSE_DURATION_OPTION_ONE = 
    RESPONSE_TIMEOUT_DURATION - WORD_DURATION;
// ... this will leave us with a value of an extra 1000 ms 
// as the so-called post trial gap value...
// but this is not very 'generic'

const FEEDBACK_DURATION = 1000;

const CROSS_GAP_DURATION = 0;
// Duration of the interval between prime and target.
const PRIME_GAP_DURATION = 300;
const WORD_GAP_DURATION = 0;

const TRIAL_GAP_DURATION = 1000;

const OK_BUTTON_TEXT = "OK";
