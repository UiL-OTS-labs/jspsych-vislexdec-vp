# jspsych-vislexdec-vp
Visual [Lexical Decision](https://en.wikipedia.org/wiki/Lexical_decision_task) Experiment with _Visual Prime_ (template)

# Generic template documentation
Please read the [generic documentation](https://github.com/UiL-OTS-labs/jspsych-uil-template-docs) for context and scope.

# Task Description
The participant first sees a fixation cross, then a prime is presented, followed by the test stimulus. Particpants are instructed to respond as quickly as possible to make the decision if both strings in the pair are words --or not--, using the keyboard.

- The _prime_ is a string of letters and can be a _real word_ or a _nonword_.
- The _'test stimulus'_ is a string of letters and can also be a _real word_ or a _nonword_.

In this version, a trial consists of subsequently presenting _two_ words or nonwords. The participant needs to make a swift decision whether the _pair_ of presented sets of letters - the test stimuli - are _both_ acutal words or not. Only in this _last phase_ (the decision phase), as soon as the item is being presented, the participant can respond with the keyboard.

Crucial trial phases (sub trial phases):
- Fixation cross
- Visual Prime
- Lexical decision (decision phase)

### Reference:
          Rubenstein, H., Garfield, L., & Millikan, J.A. (1970). 
          Homographic entries in the internal lexicon. 
          Journal of Verbal Learning and Verbal Behavior, 9, 487≠494.

## Output
The data of _all_ (sub) _trial phases_ are logged in the data, but the output data can be filtered after data collection in many ways.
Please read the [general primer on jsPsych's data](https://github.com/UiL-OTS-labs/jspsych-output) if you are new to jsPsych data output.

Essential output for the _'true experimental'_ purpose in this template are:

- Reaction Time (RT) of the keyboard response in the decision phase
- Correctness of the keyboard response in the decision phase

The crucial trial/sub-trial phase (decision phase) output may look similar to this:

```JSON
    {
        "rt": 368.0000000000073,
        "stimulus": "<p class='stimulus'>crawse</p>",
        "key_press": 76,
        "condition": "NON_WORD",
        "word": "crawse",
        "prime": "piano",
        "id": 2,
        "trial_phase": "present_word",
        "useful_data_flag": true,
        "expected_answer": 0,
        "trial_type": "html-keyboard-response",
        "trial_index": 25,
        "time_elapsed": 44933,
        "internal_node_id": "0.0-11.0-2.1",
        "subject": "f9pdgg60",
        "list": "my_one_and_only_list",
        "correct": true,
        "integer_correct": 1,
        "key_chosen_ascii": 76,
        "key_chosen_char": "L",
        "yes_key": "A",
        "no_key": "L"
    },
 //...
```

Variable name (key) | Description          | Unit  | Type           | Comments                             | jsPsych default | Template default | Plugin name
--------------------|----------------------|-------|----------------|--------------------------------------|-----------------|------------------|------------
"rt"                | Reaction Time        | ms.   | float          | Reaction time in milliseconds        | yes             |                  |
stimulus"           | stimulus (html)      |       | string/html    |                                      | yes             |                  |
"key_press"         | Keyboard response    |       | string/object? | https://en.wikipedia.org/wiki/ASCII  | yes             |                  | html-keyboard-response
"condition"         | Condition            |       | string         | See ```stimuli.js```                 | no              | yes              |
"word"              | Decision phase item  |       | string/html    | See ```stimuli.js, index.html```     | no              | yes              |
"prime"             | Prime phase item     |       | string/html    | (...)                                | no              | yes              |
"id"                | ID/code              |       |                | (...)                                | yes             |                  |
"trial_phase"       | Trial phase          |       |                | (...)                                | no              | yes              |
"useful_data_flag"  | Filter flag          |       | boolean        |                                      | no              | yes              |
_"expected_answer"_ | TODO change!         |       | todo           |                                      | no              | no/yes/willbe.   |
"trial_type"        | What plugin was used |       |                |                                      | yes             |                  | "html-keyboard-response"
"trial_index"       | jsPsych index        |       |                |                        	           | yes             |                  |
"time_elapsed".     | jsPsych time object  | ms?   | int (/float?)  | For instance: 45062                  | yes             |                  |
"internal_node_id.  | jsPsych node object  |       |                | For instance:"0.0-11.0-1.4"          | yes             |                  |
"subject"           | Subject ID           |       |                | For instance: "8oo722dq"             |                 | yes              |
"list"              | Stimulus list name.  |       | string         | For instance: "my_one_and_only_list" | no              | yes              |
"correct"           | Scoring result       |       | Boolean        | 'true or false' score of response    |                 | yes              |
"integer_correct"   | Scoring result       |       | integer        | 1 or 0 for correct or incorrect      |                 | yes              |
"key_chosen_ascii"  |                      |       |                | For instance: 65                     | no              | yes              |
"key_chosen_char"   |                      |       |                | For instance: "A"                    | no              | yes              |
"yes_key"           |                      |       |                | For instance:  "A"                   | no              | yes              |
"no_key"            |                      |       |                | For instance: "L"                    | no              | yes              |


# Getting started 
People _affiliated with our lab_ can use the information [from our lab webiste](https://uilots-labs.wp.hum.uu.nl/experiments/overview/) and expand the "Online experiments using jsPsych" section for details. Please follow [this how-to](https://uilots-labs.wp.hum.uu.nl/how-to/online-experimenting/).

### Make your experiment ready for use with the data server

### Update access key
In the file `globals.js` is a variable:
```javascript
const ACCESS_KEY = '00000000-0000-0000-0000-000000000000';
```
Before uploading your experimentto the UiL-OTS data server, you will need to change this to the access_key that you obtained when your experiment was approved. For elaborate info see `globals.js`.


### Adapting stimuli
- Open the file `stimuli.js` in your plain text editor.
- There is a list, called LIST_1:

```javacript
const LIST_1 = [ // stimuli and timeline variables

```
-  This list can be adapted to your own needs, i.e, you can replace values, make the list longer (don't forget to increment the 'id' values for new items!).
- If you need to implement a more complex design, you should read the `stimuli.js` file (and its comment sections) a little better. 
- For an example of a Latin square design, please have a look [here](https://github.com/UiL-OTS-labs/jspsych-spr-mw).

