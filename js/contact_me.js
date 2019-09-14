// Contact Form Scripts

$(function() {

    $("#contactForm input,#contactForm textarea").jqBootstrapValidation({
        preventSubmit: true,
        submitError: function($form, event, errors) {
            // additional error messages or events
        },
        submitSuccess: function($form, event) {
            event.preventDefault(); // prevent default submit behaviour
            // get values from FORM
            var name = $("input#name").val();
            var email = $("input#email").val();
            var phone = $("input#phone").val();
            var message = $("textarea#message").val();
            // var firstName = name; // For Success/Failure Message
            // Check for white space in name for Success/Fail message
            // console.log(name);
            // console.log(email);
            // console.log(phone);
            // console.log(message);

            // if (firstName.indexOf(' ') >= 0) {
            //     firstName = name.split(' ').slice(0, -1).join(' ');
            // }
            var email_to = 'info@scontain.com';
            var subject = 'email from ' + name + ' addr ' + email + ' phone no: ' + phone;
            $('button').click(function() {
                var mailto_link = 'mailto:' + email_to + '?subject=' + subject + '&body=' + encodeURI(message);

                win = window.open(mailto_link, 'ScontainEmailWindow');
                if (win && win.open && !win.closed) win.close();
            });
        },
        filter: function() {
            return $(this).is(":visible");
        },
    });

    $("a[data-toggle=\"tab\"]").click(function(e) {
        e.preventDefault();
        $(this).tab("show");
    });
});


/*When clicking on Full hide fail/success boxes */
$('#name').focus(function() {
    $('#success').html('');
});
