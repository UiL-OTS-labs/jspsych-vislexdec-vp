consent_given = false;

// consent check function
let checkConsent = function(elem) {
    if (document.getElementById('consent_checkbox').checked) {
        return true;
    } else {
        alert("If you wish to participate, you must check the box next to the statement 'I agree to participate in this study.'");
        return false;
    }
    // consent_given = false;
    consent_given = false;
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
        let consent_status = consent_given === true;
        console.log('consent_status');
        console.log(consent_status); 
        data.consent_given = consent_status;
    }
};
