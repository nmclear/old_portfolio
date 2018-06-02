$(document).ready(function(){

//========================================================================================================================
// MATERIALIZE JS CALLS
//========================================================================================================================
    //Show side Nav
    $('.sidenav').sidenav();
    //Autoresize text input box
    M.textareaAutoResize($('#contactMessage'));

//========================================================================================================================
// ON PAGE LOAD CALLS
//========================================================================================================================
//on page load, show HomePage, hide all others
    displayHomePage();


//========================================================================================================================
// NAVBAR CLICK LISTENERS
//========================================================================================================================
    $('#navHome').on('click', function(){
        displayHomePage();
    });

    $('#navAbout').on('click', function(){
        hideAllContainers();
        $('#containerAbout').show();
    });

    $('#navEducation').on('click', function(){
        hideAllContainers();
        $('#containerEducation').show();
    });

    $('#navProjects').on('click', function(){
        hideAllContainers();
        $('#containerProjects').show();
    });

    $('#navHobbies').on('click', function(){
        hideAllContainers();
        $('#containerHobbies').show();
    });

    $('#navContact').on('click', function(){
        hideAllContainers();
        $('#containerContact').show();
    });

//========================================================================================================================
// FUNCTIONS
//========================================================================================================================

    function hideAllContainers() {
        $('#containerHome').hide();
        $('#containerAbout').hide();
        $('#containerEducation').hide();
        $('#containerProjects').hide();
        $('#containerHobbies').hide();
        $('#containerContact').hide();
    }

    function displayHomePage() {
        hideAllContainers();
        $('#containerHome').show();
    }

//========================================================================================================================
// FIREBASE
//========================================================================================================================
  // Initialize Firebase
    var config = {
        apiKey: "AIzaSyC9QrfmjqaHdJTy73WTLUUxEi3voCF1GvU",
        authDomain: "portfolio-fb684.firebaseapp.com",
        databaseURL: "https://portfolio-fb684.firebaseio.com",
        projectId: "portfolio-fb684",
        storageBucket: "",
        messagingSenderId: "29324912075"
    };
    firebase.initializeApp(config);
    // Create a variable to reference the database
    var database = firebase.database();


//========================================================================================================================
// TYPE WRITER ANIMATION
//========================================================================================================================


var instance = new TypeIt('.headerTag', {
    strings: ['Full-Stack Developer.', 'Brewing up web applications.'],
    nextStringDelay: 2500,
    cursor: false,
    breakLines: false,
    loop: true
});

//========================================================================================================================
// CONTACT FORM
//========================================================================================================================

$('#contactFormSubmitBtn').on('click', function() {
    event.preventDefault();
    getContactInputValues();
    clearContactInputValues();
});

function clearContactInputValues() {
    $('#first_name').val('');
    $('#last_name').val('');
    $('#email').val('');
    $('#contactMessage').val('');
}

function getContactInputValues() {
    //GET INPUTS
    var firstName = $('#first_name').val().trim();
    var lastName = $('#last_name').val().trim();
    var email = $('#email').val().trim();
    var message = $('#contactMessage').val().trim();

    var newContactFormMessage = {
        firstName: firstName,
        lastName: lastName,
        email: email,
        message: message
    }

    database.ref().push(newContactFormMessage);

    // SET VALUES
    // $('#first_name').val(firstName);
    // $('#last_name').val(lastName);
    // $('#email').val(email);
    // $('#contactMessage').val(message);
}







}); //DOCUMENT END