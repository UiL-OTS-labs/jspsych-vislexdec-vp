
////////////////
// Version 1
///////////////

// this is how jsPsych handles a consent page, using the external-html plugin
// you can use your own html and UU css. But.... this does not allow to skip to the
// end_screen trial without a lot of additional hassle


consent_given1 = false;

// consent check function
let checkConsent = function(elem) {
    if (document.getElementById('consent_checkbox').checked) {
        return true;
    } else {
        alert("If you wish to participate, you must check the box next to the statement 'I agree to participate in this study.'");
        return false;
    }
    // consent_given = false;
    consent_given1 = false;
    return false;
};

let consent_page = {
    type:'external-html',
    url: "consent_page.html",
    cont_btn: "start",
    force_refresh: true,
    check_fn: checkConsent,
    execute_script: true,
    on_finish: function(data) {
        let consent_status = consent_given1 === true;
        console.log('consent_status');
        console.log(consent_status); 
        data.consent_given1 = consent_status;
    }
};

////////////////
// Version 2
///////////////

function getConsentData()
{
    let data = jsPsych.data.get().select('consent_choice_response');
    console.log(data);
    data = JSON.parse(data.values[0]);
    return data.consent;
}
// Using the multi select plugin. This one has an actual checkbox within jsPsych context. 
// And you can use the 'required = true' if you want to use it as a showstopper page. 
// Or (like demanded), it is now also possible to use additional conditional stuff, like proceeding 
// to the end page, probably.
// In this version, if you want things to look 'UU-legit', it takes a bunch of style tags with the same content 
// as in ./uu/uu.css, except the @import part.

const CONSENT_HTML = `
    <style>
        body {
            background: rgb(246, 246, 246);
            font-family: "Open Sans","Frutiger",Helvetica,Arial,sans-serif;
            color: rgb(33, 37, 41);
            text-align: left;
        }

        p {
            line-height: 1.4; /* Override paragraph for better readability */
        }

        label {
            margin-bottom: 0;
        }

        h1, h2{
            font-size: 2rem;
        }

        h6 {
            font-size: 1.1rem;
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
        }

        input[type="checkbox"], input[type="radio"]
        {
            width: auto;
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

        </style>
    <p>Insert your information letter here; for more information, see the <a href="https://fetc-gw.wp.hum.uu.nl/en/" target="_blank">FEtC-H website</a></p>
    `
const DEBRIEF_MESSAGE_NO_CONSENT = `
    <h1>End of the experiment</h1><BR><BR>
    <h2>Thank you for not participating!</h2>
    `;

let consent_block = {
    type: 'survey-multi-select',
    preamble: CONSENT_HTML,
    required_message: "You must check the box next to 'Yes, I agree' in order to proceed to the experiment",
    questions: [
        {
            prompt: "I agree to participate in this study and consent that my data will be used for scientific research.", 
            options: ["Yes, I agree"], 
            horizontal: true,
            required: false, 
            button_label: "Continue",
            name: 'consent'
        }
    ],
    on_finish: function(data){
        let consent_choice = data.responses;   
        //setting old data from here
        data.consent_choice_response = consent_choice;
        console.log("data.consent_choice_response: " + data.consent_choice_response)
    }
};

let no_consent_end_screen = {
    type: 'html-button-response',
    stimulus: DEBRIEF_MESSAGE_NO_CONSENT,
    choices: [],
    trial_duration: DEBRIEF_MESSAGE_DURATION,
    on_finish: function (data){
        console.log('console.logging it');
        jsPsych.endExperiment()
    }
};

let if_node_consent = {
    timeline: [no_consent_end_screen],
    conditional_function: function(data){
        // get the data from the previous trial,
        //let mydata = jsPsych.data.get().last(1).values()[0];
        //let mydata = data.consent_choice_response;
        let mydata = getConsentData();
        console.log(mydata);
        if (mydata == "Yes, I agree"){
            return false;
        } else {
            return true;
        }
    }
}


let consent_procedure = {
    timeline: [consent_block, if_node_consent]
}


