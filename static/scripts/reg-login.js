function show_password() {
    var password_field = document.getElementById('password');
    try {
        show_password_again();
    } catch (err) {}
    var label = document.getElementById('pass-label');
    if (password_field.type == "password"){
        password_field.type = "text";
        // label.style = "color: rgb(156, 212, 24); text-shadow: 0 0 8px rgb(156, 212, 24)"
    } else {
        password_field.type = "password";
    }
}
function show_password_again() {
    var password_again = document.getElementById('password-again');
    var label = document.getElementById('pass-label');
    if (password_again.type == "password"){
        password_again.type = "text";
    } else {
        password_again.type = "password";
    }
}
function check_email_field() {
    var email = document.getElementById('mail');
    var email_label = document.getElementById('mail-label')
    if (email.value.length) {
        email_label.style = "position: relative; font-size: 12px; top: -45px; left: -1px; color: #8cd418; text-shadow: 0 0 8px rgb(156, 212, 24)"
    }
    else {
        email_label.style = ""
    }
}