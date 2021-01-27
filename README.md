# jspsych-vislexdec-vp
Visual [Lexical Decision](https://en.wikipedia.org/wiki/Lexical_decision_task) Experiment with _Visual Prime_ (template)

# Generic template documentation
Please read the [generic documentation](https://github.com/UiL-OTS-labs/jspsych-uil-template-docs) for context and scope.

# Task Description
The participant first sees a fixation cross, then a prime is presented, followed by the test stimulus. Particpants are instructed to respond as quickly as possible to make the decision if both strings in the pair are words --or not--, using the keyboard.

- The _prime_ is a string of letters and can be a real word or a nonword.
- The _'test stimulus'_ is a string of letters and can also be a real word or a nonword.

## Longer description
There are many (slightly) different variations of a lexical decision task. In this version, a trial consists of subsequently presenting _two_ words or nonwords. The participant needs to make a swift decision whether the _pair_ of presented sets of letters - the test stimuli - are _both_ acutal words or not. 

The idea behind this _primed_ variant is that there may be semantic (or visual or grammatical) associations that influence reaction time in the last decision stage. For instance, after presenting the word 'snow' as a _prime_, there might be a speedup in the reaction time (RT) to the test stimulus if it were 'white', as opposed to --for instance-- 'potato', due to <i>semantic association</i>.

Reference (TODO)

The essential sub trial phases for _one_ trial for this boilerplate experiment are:

1. Fixation cross presentation (fixed time, no responses are recorded) 
2. Prime presentation (fixed time, no responses are recorded)
3. Test stimulus presentation (the last string of letters of the presented pair, lexical decision phase). 

Only in this _last phase_, as soon as the "test item" is being presented, the participant can respond with the keyboard.

## Output
 
By default, the data of all sub trial phases are logged in the data, but the output data can quite easily be filtered after data collection.
Please read the [general primer on jsPsych's data](https://github.com/UiL-OTS-labs/jspsych-output) if you are new to jsPsych.

Essential output for the _'true experimental'_ purpose in this template are:

- Reaction Time of the keyboard response in the decision phase
- Correctness of the keyboard response in the decision phase



## Prepare for the data server (only for people affiliated with our lab!)

### Update access key
In the file `globals.js` is a variable:
```javascript
const ACCESS_KEY = 'zeekretkey';
```
For uploading to the UiL-OTS data server you will need to change this to the access_key that you obtained when your experiment was approved. For elaborate info see `globals.js`.

### Adapting stimuli
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

# Getting started (the easy way, working internet connection required)
For now, the easiest way to test these templates, is:

1. Download this repository by clicking the green code button above and Download zip.
2. Unzip the jspsych-vislexdec-vp-main.zip at a location of your choosing.
3. Inside the folder is a file called index.html, double click it in order to open it
   in a browser.









  

