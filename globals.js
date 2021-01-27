////////////////
// GLOBALS
///////////////

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

// Bail out string for mobiles
const BAIL_OUT_MOBILE_TEXT = "Please run this experiment on a PC or Laptop."

// Deafult restrictions of minimal browser dimensions
const MIN_WIDTH = 800;
const MIN_HEIGHT = 600;
