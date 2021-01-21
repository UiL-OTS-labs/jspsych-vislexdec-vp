////////////////
// SURVEY
///////////////

let repeat_survey = false;

const PREPARE_FOR_SURVEY = "<h1>Please answer some questions first</h1>";

// experiment: one can use the UU style for the HTML survey plugin by appending the style below...
// however, this is not as of yet possible in the second type of survey plugin
// might be solved with milestone with things discussed here:
// https://github.com/jspsych/jsPsych/issues/554#event-3434758022 

const SURVEY_HTML_PLUGIN_STYLE_UU = `
    <style>
        body {
            background: rgb(246, 246, 246);
            font-family: "Open Sans","Frutiger",Helvetica,Arial,sans-serif;
            color: rgb(33, 37, 41);
            text-align: left;
        }

        p {
            line-height: 1.4; /* Override paragraph for better readability */
            text-align: left;
        }

        label {
            float: left;
            width: 15em;
            margin-right: 1em;
            text-align: left;
            margin-bottom: 2%;
        }

        h1, h2{
            font-size: 2rem;
            text-align: left;
        }

        h6 {
            font-size: 1.1rem;
            text-align: left;
        }

        /* Input styles */

        form > table th {
            padding-left: 10px;
            vertical-align: middle;
        }

        input, textarea, select {
            border-radius: 0;
            border: 1px solid #d7d7d7;
            padding: 5px 10px;
            line-height: 20px;
            font-size: 16px;
            text-align: left;
        }

        input[type=submit], input[type=button], button, .button, .jspsych-btn {
            background: #000;
            color: #fff;
            border: none;
            font-weight: bold;
            font-size: 15px;
            padding: 0 20px;
            line-height: 42px;
            width: auto;
            min-width: auto;
            cursor: pointer;
            display: inline-block;
            border-radius: 0;
            text-align: left;
        }

        input[type="checkbox"], input[type="radio"]
        {
            width: auto;
            text-align: left;
        }

        button[type=submit], input[type=submit], .button-colored {
            background: #ffcd00;
            color: #000000;
        }

        button[type=submit].button-black, input[type=submit].button-black {
            background: #000;
            color: #fff;
        }

        button a, .button a,
        button a:hover, .button a:hover,
        a.button, a.button:hover {
            color: #fff;
            text-decoration: none;
        }

        .button-colored a,
        .button-colored a:hover,
        a.button-colored,
        a.button-colored:hover {
            color: #000;
        }

        /* Table styles */
        table thead th {
            border-bottom: 1px solid #ccc;
        }

        table tfoot th {
            border-top: 1px solid #ccc;
        }

        table tbody tr:nth-of-type(odd) {
            background: #eee;
        }

        table tbody tr:hover {
            background: #ddd;
        }

        table tbody tr.no-background:hover, table tbody tr.no-background {
            background: transparent;
        }

        table tbody td, table thead th, table tfoot th {
            padding: 6px 5px;
        }

        /* Link styles */
        a {
            color: rgb(33, 37, 41);
            text-decoration: underline;
            transition: 0.2s ease color;
        }

        a:hover {
            transition: 0.2s ease color;
            color: rgb(85, 85, 95);
        }

        span::after {
            padding-left: 1%;
        }

        input:invalid + span::after {
            content: '✖';
        }

        input:valid+span::after {
            content: '✓';
        }
    </style>
    `;

// with other survey plugin(s) than html, UU styling seems to not be easy to implement
const MULTI_CHOICE_HTML =`
    <label for="birth_year">In what year were you born? </label>
    <input type="number" id="birth_year" 
        name="birth_year" placeholder=1999 min=1919 max=2019 required>
    <span class="validity"></span>

    <br>
    <br>

    <label for="birth_month">In what month were you born? </label>
    <input type="number" id="birth_month" name="birth_month" 
        placeholder=7 min=1 max=12 required>
    <span class="validity"></span>

    <br>
    <br>

    <label for="native_language">What is your native language?</label>
    <input type="text" id="native_language" name="native_language"
        pattern="[a-zA-Z]+" placeholder="Dutch" required>
    <span class="validity"></span>
    <br> 
    <br> 
    `

// these constants are used in the survery multip[le choice block]
// with this survey plugin, UU styling is not easy to implement
const BILINGUAL_QUESTION = `
    Were you born and raised in a  
    <a href="https://en.wikipedia.org/wiki/Multilingualism" target="_blank">multilingual</a>
    environment?
    `;
const BILINGUAL_OPTIONS = ["No","Yes"];
const DYSLEXIC_QUESTION = `Are you 
    <a href="https://en.wikipedia.org/wiki/Dyslexia" target="_blank">dyslexic</a>?
    `;
const DYSLEXIC_OPTIONS = ["No", "Yes"];
const SEX_QUESTION = `
    What is your
    <a href="https://en.wikipedia.org/wiki/Sex" target="_blank">biological sex</a>?
    `;
const SEX_OPTIONS = ["Female", "Male", "Other", "Prefer not to say"];
const HAND_QUESTION = 'Which hand do you prefer to write with?';
const HAND_OPTIONS = ["Left", "Right"];

// The multi-choice survey plugin DOES have built-in validation, which is nice
let survey_multi_choice_block = {
    type: 'survey-multi-choice',
    data: {
        survey_data_flag: true
    },
    questions: [
        {
            prompt: BILINGUAL_QUESTION,
            name: 'Multilingual',
            options: BILINGUAL_OPTIONS,
            required:true,
            horizontal: true
        },
        {
            prompt: DYSLEXIC_QUESTION,
            name: 'Dyslexic',
            options: DYSLEXIC_OPTIONS,
            required: true,
            horizontal: true
        },
        {
            prompt: SEX_QUESTION,
            name:'Sex',
            options: SEX_OPTIONS,
            required: true,
            horizontal: true
        },
        {
            prompt: HAND_QUESTION,
            name:'HandPreference',
            options: HAND_OPTIONS,
            required: true,
            horizontal: true
        }
    ],
    on_finish: function(data){
        let survey_multi_choice = data.responses;   
        data.survey_multi_choice_responses = survey_multi_choice;
    }
};

// HTML plugin survey block: questions are in the HTML constant
let survey_multi_html_block = {
    type: 'survey-html-form',
    preamble: PREPARE_FOR_SURVEY,
    html: SURVEY_HTML_PLUGIN_STYLE_UU + MULTI_CHOICE_HTML,
    on_finish: function(data){
        var survey_html_responses = data.responses;
        data.survey_html_responses = survey_html_responses;
    }
};

let survey_review_survey_data = {
    type: "html-button-response",
    stimulus: function(data){

        let survey_html = 
            jsPsych.data.get().last(2).values()[0].survey_html_responses;
        
        let survey_multi = 
            jsPsych.data.get().last(1).values()[0].survey_multi_choice_responses;
        
        let jsHTML = JSON.parse(survey_html);
        let b_year = jsHTML.birth_year;
        let b_month = jsHTML.birth_month;
        let n_lang = jsHTML.native_language;

        let jsMulti = JSON.parse(survey_multi);
        let bilingual = jsMulti.Multilingual;
        let dyslexic = jsMulti.Dyslexic;
        let sex = jsMulti.Sex;
        let hand_pref = jsMulti.HandPreference;

        return `
            <h1>Your data</h1>

            <div><strong>Birth year</strong>: ${b_year} </div>
            <div><strong>Birth month</strong>: ${b_month} </div>
            <div><strong>Native language</strong>: ${n_lang} </div>
            <div><strong>Multilingual</strong>: ${bilingual} </div>
            <div><strong>Dyslexic</strong>: ${dyslexic} </div>
            <div><strong>Sex</strong>: ${sex} </div>
            <div><strong>Hand preference</strong>: ${hand_pref} </div>
            <br><br>

            <p>Is this information correct?</p>
            `;
    },
    choices: [YES_BUTTON_TEXT, NO_BUTTON_TEXT],
    response_ends_trial: true,
    on_finish: function(data){
        // Repeat the survey if yes (0) was not pressed.
        // this may give multiple entries, up to the researcher to filter out
        repeat_survey = data.button_pressed != 0;         
    }
};

let survey_procedure = {
    timeline: [
        survey_multi_html_block, // uu style
        survey_multi_choice_block, // default style (see index.html styling section)
        survey_review_survey_data,
    ],
    loop_function: function(){
        if (repeat_survey == true){
            return true;
        } else {
            return false;
        }
    }
};