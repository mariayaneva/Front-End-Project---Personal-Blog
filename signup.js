var validatedPsw;
var validatedEmail;

function validatePsw(validatedPsw)
{
    var confirmPass = document.getElementById('confirmPw').value;

    // regex expressions - validations
    var lowerCase = /[a-z]/;
    var upperCase = /[A-Z]/;
    var numbers = /[0-9]/;

    if(validatedPsw.length < 6)
    {
        alert('Password must be 6 symbols at least.');
        return false;
    }

    else if(!validatedPsw.match(numbers))
    {
        alert('Password must consist of 1 number at least.');
        return false;
    }

    else if(!validatedPsw.match(upperCase))
    {
        alert('Password must consist of 1 uppercase letter at least.');
        return false;
    }

    else if(!validatedPsw.match(lowerCase))
    {
        alert('Password must consist of 1 lowercase letter at least.');
        return false;
    }

    else if(validatedPsw != confirmPass)
    {
        alert('Passwords do not match!');
        return false;
    }

    return true;
}

function validateEmail(validatedEmail)
{
    var atSign = /@/;
    var dotSign = /./;

    var users = JSON.parse(localStorage.getItem('users'));

    if(validatedEmail.length < 6)
    {
        alert('Email must be 6 symbols at least.');
        return false;
    }

    else if(!validatedEmail.match(atSign) || !validatedEmail.match(dotSign))
    {
        alert('Email invalid!');
        return false;
    }

    for(var i=0;i<users.length;i++)
    {
        if(validatedEmail == users[i]['email'])
        {
            alert('Email already exists!');
            return false;
        } 
    }

      return true;
}

function registration()
{
    var email = document.getElementById('em').value;
    var password = document.getElementById('pw').value;

    validatedPsw = validatePsw(password);
    validatedEmail = validateEmail(email);

    if (validatedEmail == true && validatedPsw == true) 
    {
        var existingUsers = JSON.parse(localStorage.getItem('users'));
        if(existingUsers == null) 
        existingUsers = [];
    
        var record = 
        {
            "email": email,
            "password": password
        };
    
        existingUsers.length++;
        existingUsers[existingUsers.length - 1] = record;
        window.localStorage.setItem('users', JSON.stringify(existingUsers));

        alert("You have signed up successfully!");

        window.open('login.html', 'Login'); 
    }

}