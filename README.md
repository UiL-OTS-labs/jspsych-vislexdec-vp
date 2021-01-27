# jspsych-vislexdec-vp
Visual [Lexical Decision](https://en.wikipedia.org/wiki/Lexical_decision_task) Experiment with _Visual Prime_ (template)

# Generic template documentation
Please read the [generic documentation](https://github.com/UiL-OTS-labs/jspsych-uil-template-docs) for context and scope.

# Task Description
The participant first sees a fixation cross, then a prime is presented, followed by the test stimulus. Particpants are instructed to respond as quickly as possible to make the decision if both strings in the pair are words --or not--, using the keyboard.

- The _prime_ is a string of letters and can be a _real word_ or a _nonword_.
- The _'test stimulus'_ is a string of letters and can also be a _real word_ or a _nonword_.

## Longer description
There are many (slightly) different variations of a lexical decision task. 

In this version, a trial consists of subsequently presenting _two_ words or nonwords. The participant needs to make a swift decision whether the _pair_ of presented sets of letters - the test stimuli - are _both_ acutal words or not. 

The idea behind this _primed_ variant is that there may be semantic (or visual or grammatical) associations that influence reaction time in the last decision stage. For instance, after presenting the word 'snow' as a _prime_, there might be a speedup in the reaction time (RT) to the test stimulus if it were 'white', as opposed to --for instance-- 'potato', due to <i>semantic association</i>.

Reference (TODO)

The essential sub trial phases for _one_ trial for this boilerplate experiment are:

1. Fixation cross presentation (fixed time, no responses are recorded) 
2. Prime presentation (fixed time, no responses are recorded)
3. Test stimulus presentation (the last string of letters of the presented pair, lexical decision phase). 

Only in this _last phase_, as soon as the "test item" is being presented, the participant can respond with the keyboard.

## Output
 
The data of _all_ (sub) _trial phases_ are logged in the data, but the output data can be filtered after data collection in many ways.
Please read the [general primer on jsPsych's data](https://github.com/UiL-OTS-labs/jspsych-output) if you are new to jsPsych data output.

Essential output for the _'true experimental'_ purpose in this template are:

- Reaction Time (RT) of the keyboard response in the decision phase
- Correctness of the keyboard response in the decision phase

The following code block, 'present_word' (exerpt from 'index.html' contents) yields these relevant RT and correctness of responses:
```javascript
        let present_word = {
            type: 'html-keyboard-response',
            stimulus: function(){
                return "<p class='stimulus'>" + jsPsych.timelineVariable('word', true) + "</p>";
            },
            choices: present_word_choices,
            response_ends_trial: true,
            stimulus_duration: WORD_DURATION,
            trial_duration: RESPONSE_TIMEOUT_DURATION,
            post_trial_gap: DEFAULT_ITI,
            prompt: "",
            data: {
                condition: jsPsych.timelineVariable('item_type'),
                word: jsPsych.timelineVariable('word'),
                prime: jsPsych.timelineVariable('prime'),
                id: jsPsych.timelineVariable('id'),
                trial_phase: 'present_word',
                useful_data_flag: true,
                correct_response: jsPsych.timelineVariable('correct')
            },
            //...(left out for brevity)
   ```
In the `data: { ` section of the above code, you see some `'key: value'` pairs. They implement the stimulus definitions (`stimuli.js`) to the presentation phase (in `index.html`) and connect relevant data needed in that trial phase. These can then also be used in context and added in the output. In this case,`'condition', 'word', 'prime', 'id'` and `'correct_response'` reference 'timelineVariable' information from `stimuli.js`, whereas `'trial_phase'` and `'useful_data_flag'` are added there 'directly'. 

The 'useful_data_flag' was added so it could be used for filtering the aggregate of output from your online experiment. You can alter or add data (key, value pairs) according to your own goals and needs, but you would need to edit the present_block, be careful and concise!

The 'raw' ([JSON](https://www.json.org/json-en.html)) output data of a `'present_word'` 'trial' (our 'trial' is in fact a _sub trial phase_) may look like this:

```JSON
	{
		"rt": 643,
		"stimulus": "<p class='stimulus'>clown</p>",
		"key_press": 76,
		"condition": "UNRELATED",
		"word": "clown",
		"prime": "forest",
		"id": 8,
		"trial_phase": "present_word",
		"useful_data_flag": true,
		"correct_response": 1,
		"trial_type": "html-keyboard-response",
		"trial_index": 25,
		"time_elapsed": 69378,
		"internal_node_id": "0.0-11.0-2.0",
		"subject": "h2gaya5g",
		"group": "group3",
		"correct": false,
		"key_chosen_ascii": 76,
		"key_chosen_char": "L",
		"yes_key": "A",
		"no_key": "L"
	},
 ...
 ```
Clearly, it contains a lot more `key: value` pairs than what was mentioned above in the experpt `present_word` trial from `index.html`. 

- Some of them are native to jsPsych and have been mentioned in the primer on data output. 
- Others have been explicitly added to the data in the ```on_finish()``` method call that happens further down in the `present_word` trial definition. 
- Open ```index.html``` in your plain text editor for more details.

Here is a description of the above example, using "#" as comments on the `"key: value"` pairs:

```JSON
                                               #this is a comment

"rt": 643,                                     # Reaction Time, in miliseconds (jsPysch default)
"stimulus": "<p class='stimulus'>clown</p>",   # The word or string and/or its HTML specifics (jsPsych default)
"key_press": 76,                               # ASCII code of keyboard key pressed within phase (jsPysch default)
"condition": "UNRELATED",                      # timelineVariable from 'stimuli.js' (UiL template default)
"word": "clown",                               # timelineVariable from 'stimuli.js' (UiL template default)
"prime": "forest",                             # timelineVariable from 'stimuli.js' (UiL template default)
"id": 8,                                       # timelineVariable from 'stimuli.js' (UiL template default)
"trial_phase": "present_word",                 # timelineVariable from 'stimuli.js' (UiL template default)
"useful_data_flag": true,                      # timelineVariable from 'stimuli.js' (UiL template default)
"correct_response": 1,                         # timelineVariable from 'stimuli.js' (UiL template default)
"trial_type": "html-keyboard-response",        # jsPysch default
"trial_index": 25,                             # jsPysch default
"time_elapsed": 69378,                         # jsPysch default (miliseconds)
"internal_node_id": "0.0-11.0-2.0",            # jsPysch default
"subject": "h2gaya5g",                         # Subject ID (from index.html)(UiL template default)
"group": "group3",                             # Group or list (from stimuli.js) (UiL template default) 
"correct": false,                              # Correctness of item (word, string, from trial phase)
"key_chosen_ascii": 76,                        # Verbose info on key chosen (UiL template default)
"key_chosen_char": "L",                        # Verbose info on key chosen (UiL template default)
"yes_key": "A",                                # Verbose info on key defined for choosing 'yes' (UiL template default)
"no_key": "L"                                  # Verbose info on key defined for choosing 'no' (UiL template default)
```

In short, similar things appear in all other 'trials' data output. For instance, this is output from a _survey type_ of trial, as could be in the output from the same template's code:
```JSON
{
	"rt": 6359,
	"responses": "{\"birth_year\":\"1919\",\"birth_month\":\"1\",\"native_language\":\"NL\"}",
	"trial_type": "survey-html-form",
	"trial_index": 5,
	"time_elapsed": 34682,
	"internal_node_id": "0.0-2.1-0.1",
	"subject": "h2gaya5g",
	"group": "group3",
	"survey_html_responses": "{\"birth_year\":\"1919\",\"birth_month\":\"1\",\"native_language\":\"NL\"}"
},
```

Note that in it's raw JSON format, data like the values for the "responses" key essentially contain new key-value pairs, only with some so-called 'escape characters'. 

## Prepare for the data server (only for people affiliated with our lab!)

### Update access key
In the file `globals.js` is a variable:
```javascript
const ACCESS_KEY = 'zeekretkey';
```
For uploading to the UiL-OTS data server you will need to change this to the access_key that you obtained when your experiment was approved. For elaborate info see `globals.js`.

### Adapt stimuli
- Open the file `stimuli.js` in your plain text editor.
- There is a list, called LIST_GROUP1:

```javacript
const LIST_GROUP1 = [
    { id: 1, item_type: NON_WORD, word: "slirque", prime: "eyes", correct: 0 },
    { id: 2, item_type: NON_WORD, word: "crawse", prime: "piano", correct: 0 },
    { id: 3, item_type: NON_WORD, word: "thwurp", prime: "rabbit", correct: 0 },
    { id: 4, item_type: NON_WORD, word: "clem", prime: "flower", correct: 0 },
    { id: 5, item_type: RELATED, word: "white", prime: "snow", correct: 1 },
    { id: 6, item_type: RELATED, word: "travel", prime: "suitcase", correct: 1 },
    { id: 7, item_type: UNRELATED, word: "letter", prime: "garden", correct: 1},
    { id: 8, item_type: UNRELATED, word: "clown", prime: "forest", correct: 1 }
];
```
- This list can be adapted to your own needs, i.e, you can replace values, make the list longer (don't forget to increment the 'id' values for new items!).
- If you need to implement a more complex design, you should read the file and its comment sections a little better. 
- For an example of a 'Latin square' design, please have a look [here](https://github.com/UiL-OTS-labs/jspsych-spr-mw) for some inspiration. 

In short: you can add additional lists if your experiment requires this, but then you also have to edit some other values in stimuli.js in order for your experiment to work as intended.

# Getting started (no experiment server set up)

- Make sure you have a functioning internet connection!
- Do this on a desktop PC or a laptop. Do _NOT_ use a mobile device, like a phone or tablet!

The easiest way to test a template _as is_:

1. Download this repository by clicking the green code button above and Download zip.
2. Unzip the jspsych-vislexdec-vp-main.zip at a location of your choosing.
3. Inside the folder is a file called index.html, double click it in order to open it
   in a browser.





  

