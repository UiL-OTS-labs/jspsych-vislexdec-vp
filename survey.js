
// global repeat boolean
// If the survey is filled out incorrectly the questionaire
// is repeated.

// in the lexical decision cases, the info from surveys needs to actually be used, so the old implementation was actually best.
// The only thing, is that then the CONSENT value is also deleted.

//In the old scenario
// let repeat_survey = false;

///////////////////////////////////////////
// CONSTANTS


const PREPARE_FOR_SURVEY = `
    Please answer some screening questions before the experiment starts.
    `;

// these constants are used in the survery multip[le choice block]
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


// The multi-choice survey plugin has built-in validation.
let survey_multi_choice_block = {
    type: 'survey-multi-choice',
    data: {
        useful_data_flag: false,
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
        //from here
        let survey_multi_choice = data.responses;   
        //setting old data from here
        data.survey_multi_choice_responses = survey_multi_choice;
    }
};

// this HTML plugin survey block has the content of the questions in the HTML
let survey_multi_html_block = {
    type: 'survey-html-form',
    preamble: '<h5>' + PREPARE_FOR_SURVEY + '</h5><BR><BR>',
    html: `
        <div class="survey" >
        
        <label for="birth_year">In what year were you born? </label>
        <input type="number" id="birth_year" 
        name="birth_year" placeholder=1999 min=1919 max=2019 required>
        <span class="validity"></span><BR>
        
        <label for="birth_month">In what month were you born? </label>
        <input type="number" id="birth_month" name="birth_month" 
        placeholder=7 min=1 max=12 required>
        <span class="validity"></span><BR>
        
        <label for="native_language">What is your native language?</label>
        <input type="text" id="native_language" name="native_language"
        pattern="[a-zA-Z]+" placeholder="Dutch" required>
        <span class="validity"></span><BR> 
        
        </div>
        `,
    on_finish: function(data){
        var survey_html_responses = data.responses;
        data.survey_html_responses = survey_html_responses;
    }
};

let survey_review_survey_data = {
    type: "html-button-response",
    stimulus: function(data){

        let survey_html = 
            jsPsych.data.get().last(2).values()[0].survey_html_responses; //former
        
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
            <p> Please verify if your data is correct. 
            If you click "${NO_BUTTON_TEXT}", this will delete <i>all</i> data. 
            You can then refresh your browser (press F5) and start again.
            You will have to give your <i>consent</i> again!</p>

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
        // either:

        // the data reset in the survey loop function may cause the explicit consent value to be lost?
        // however, a participant could never have arrived ghere without having given consent... so it's implicit...
        // let's test that reset TODO

        // Repeat the survey if yes (0) was not presse
        repeat_survey = data.button_pressed != 0;


        // or:

        // end the experiment if data is not correct, 
        //the user will have to start again, data is useless

        // if (data.button_pressed != 0)
        //     jsPsych.endExperiment();
            // maybe a browser refresh? @Ty           
    }
};

let survey_procedure = {
    timeline: [
        survey_multi_html_block,
        survey_multi_choice_block,
        survey_review_survey_data,
    ],
    loop_function: function(){
        if (repeat_survey == true){
            // Remove any previously recorded data, to prevent
            // duplicate entries
            jsPsych.data.reset();

            return true;
        } else {
            return false;
        }
    }
};